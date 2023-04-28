import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to='/'><Button variant="outline-primary">Home</Button></Link>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/proyectos'><Button variant="outline-light">Proyectos</Button></Link>
            <Link to='/contacto'><Button variant="outline-light">Contacto</Button></Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


export default NavBar;