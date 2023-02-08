// import  Register from './pages/register/Register';
import HomePage from './pages/home/Homepage';
import ProfilePage from './pages/profile/ProfilePage';
import Login from './pages/login/Login'
import Register from './pages/register/Register'

//we will render our pages here
//a page consists of many components
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,

} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route  exact path="/" element = { <HomePage/>} />

        <Route  exact path="/login" element = { <Login/>} />

        <Route  exact path="/register" element = { <Register/>} />

        <Route  exact path="/profile/:username" element = { <ProfilePage/>} />
        
      </Routes>
    </Router>
  )
}

export default App;
