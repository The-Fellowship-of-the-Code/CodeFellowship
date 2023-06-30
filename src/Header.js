import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './css/Header.css';

class Header extends React.Component {
  render() {
    return (    
        <Navbar className="d-flex align-items-center justify-content-center sticky-bottom" collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" position="absolute">
          <Navbar.Brand>DreamWell AI</Navbar.Brand>
          <NavItem><Link to="/" className="home-link">Home</Link></NavItem>
          <NavItem><Link to="/about" className="about-link">About Us</Link></NavItem>
        </Navbar>       
    )
  }
}

export default Header;