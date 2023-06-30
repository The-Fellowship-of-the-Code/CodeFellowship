import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends React.Component {
  render() {
    return (
        <>
          <Navbar className="d-flex align-items-center justify-content-center sticky-top"  bg="dark" data-bs-theme="dark">                    
            <Navbar.Brand><h2 className="brand">DreamWell AI</h2></Navbar.Brand>
            {/* DO NOT DELETE SPACER UNLESS YOU FIX THE DARK BACKGROUND SPACING WITHOUT IT */}
            <Navbar.Brand><h4 className="spacer">Spacer</h4></Navbar.Brand>          
            <NavItem><Link to="/" className="home-link">Home</Link></NavItem>
            <NavItem><Link to="/about" className="about-link">About Us</Link></NavItem>
          </Navbar>       
        </>
    )
  }
}

export default Header;

// collapseOnSelect expand="lg"