import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

class Nava extends Component {
  render() {
    return (
      <Navbar className="nav"  >
        <Navbar.Brand className="row float-left">
          <img src="./images/favicon.png" className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="mr-auto row">
            <Nav.Link className="col float-right" >
              <Link to="/#home">Home</Link>
            </Nav.Link>
            <Nav.Link className="col float-right">
              <Link to="/#projects"> Projects </Link>
            </Nav.Link>
            <Nav.Link className="col float-right">
              <Link to="/#about"> About Me </Link>
            </Nav.Link>
            <Nav.Link className="col float-right">
              <Link to="/#contact"> Contact </Link>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default Nava;
