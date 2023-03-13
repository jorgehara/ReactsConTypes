import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

export const Sidebar = () : JSX.Element => {
    return (
      <Navbar bg="light" expand="sm" className="custom-sidebar .navbar-collapse">
        <Navbar.Brand href="#home" className='navbar-brand'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto flex-column">
            <Nav.Link href="#link1">Web Page</Nav.Link>
            <Nav.Link href="#link2">Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

export default Sidebar;
