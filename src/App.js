import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import Story from './Story';
import Profile from './Profile';
import Login from './Login';
import Logout from './Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
        <Router>
          <Login />
          <Logout /> 
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<Story />}
            >
            </Route>
            <Route
              exact path="/about"
              element = {<Profile />}
            >

            </Route>
          </Routes>
          <Footer />
        </Router>
    </>
  );
}

export default App;
