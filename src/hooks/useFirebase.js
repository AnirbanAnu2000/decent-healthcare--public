import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});    

    const [isLoading, setIsLoading] = useState(true); 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [success, setSuccess] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

const handleNameChange = e => {
  setName(e.target.value);
}
const handleEmailChange = e => {
  setEmail(e.target.value);
}

const handlePasswordChange = e => {
  setPassword(e.target.value) 
}

const handleRegistration = e => {
  e.preventDefault();
  setIsLogin(e.target.value);
  if (password.length < 6) {
    setError('Password Must be at least 6 characters long.')
    return;
  }

  if (isLogin) {
    processLogin(email, password);
  }
  else {
    registerNewUser(email, password);
  }

  document.getElementById('register-n').value = '';
  document.getElementById('register-e').value = '';
  document.getElementById('register-p').value = '';

  setSuccess('Successfully register!')

}

const processLogin = (e, email, password) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      setError('');
    })
    .catch(error => {
      setError(error.message);
    })
    document.getElementById('login-pass').value = '';
    document.getElementById('login-e').value = '';
    setSuccess('Welcome! you are successfully login!');

}

const registerNewUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      setError('');
      setUserName();
    })
    .catch(error => {
      setError(error.message);
    })
}

const setUserName = () => {
  updateProfile(auth.currentUser, { displayName: name })
    .then(result => { })
}

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
              setUser({})
            }
            setIsLoading(false);
        });
        return unsubscribe;
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        handleNameChange,
        processLogin,
        registerNewUser,
        setUserName,
        error,
        success,
        isLoading
    }
}

export default useFirebase;