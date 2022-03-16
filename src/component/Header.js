import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import {NavLink} from "react-router-dom"
import logo from "../images/logo.png"
 
const Header = () => {
  return (
    <Navbar className="ab" expand="lg">
  <Container>
    <Navbar.Brand >
    <NavLink to="/">
      <img src={logo} />
    </NavLink>
      
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      
        <NavLink to="/">Home</NavLink>
      
        <NavLink to="/about">about</NavLink>
      
        <NavLink to="/menu">menu</NavLink>
      
        <NavLink to="/contact">contact</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
export default Header;