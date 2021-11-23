import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About/About';
import Services from './Pages/Services/Services/Services';
import Header from './Pages/Shared/Header/Header';
import Contact from './Pages/Contact/Contact/Contact';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>

          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>

            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
          
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
