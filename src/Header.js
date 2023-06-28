import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar className='nav-bar' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>DreamWell AI</Navbar.Brand>
        <NavItem><Link to="/" className="home-link">Home</Link></NavItem>
        <NavItem><Link to="/about" className="about-link">About Us</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header;