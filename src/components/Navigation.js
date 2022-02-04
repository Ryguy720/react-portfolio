import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar className="color-nav text-center" variant="dark">
      <Container className="text center">
        <Navbar.Brand href="#home">Ryan McCulloch</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#aboutme">About Me</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>)
}

export default Navigation