import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar className="color-nav" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Ryan McCulloch</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#aboutme">About Me</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>)
}

export default Navigation