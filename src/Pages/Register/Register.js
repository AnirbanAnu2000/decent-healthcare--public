import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
  const {handleRegistration, signInUsingGoogle, handleEmailChange, handlePasswordChange, handleNameChange, error, success} = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';

  const handleGoogleLogin = () => {
    signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri); 
        })
}

  return (
    <div>
      <div className="container py-5 border-top border-1">
        <div className="row justify-content-center">
          <div className="col-lg-8">
          <h1 className="brand-color fw-bold text-center mb-4">Register Here</h1>
            <form onSubmit={handleRegistration}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input onBlur={handleNameChange} type="text" className="form-control" id="register-n" aria-describedby="emailHelp" required />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email Address</label>
                <input onBlur={handleEmailChange} type="email" className="form-control" id="register-e" aria-describedby="emailHelp" required />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input onBlur={handlePasswordChange} type="password" className="form-control" id="register-p" required />
              </div>
              <div className="error-msg"><p className="text-danger">{error}</p></div>
              <div className="error-msg"><p className="text-success fw-bold">{success}</p></div>
              <button onChange={handleRegistration} type="submit" className="btn btn-primary mt-2">Register</button>
            </form>
            <p className="mt-4">Already have an account? <Link to="/login">Login</Link></p>
            <hr />
            <div onClick={handleGoogleLogin} style={{cursor:"pointer",display:"inline-block"}} className="text-center">
              <span>
                <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/decent-healthcare/google.png" alt="Google Logo" width="60px" />
              </span>
              <p className="text-primary fw-bold">Google Sign In</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;