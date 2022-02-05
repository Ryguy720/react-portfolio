import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Aboutme from '../pages/Aboutme';
import Portfolio from '../pages/Portfolio';



const Navigation = () => {
  return (
    <div>
    <Navbar className="color-nav text-center" variant="dark">
      <Container className="text center">
        <Navbar.Brand href="#home">Ryan McCulloch</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#aboutme">About Me</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        </Nav>
      </Container>

    </Navbar>
    </div>
    )
}


export default Navigation