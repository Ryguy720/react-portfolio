import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";




const Navigation = () => {
  return (
    <div>
    <Navbar className="color-nav text-center" variant="dark">
      <Container className="text center">
        <Navbar.Brand className = "name" href="/">Ryan McCulloch</Navbar.Brand>
        <Nav className="ml-auto">
        <Link className = "text-white p-2 m-2" to="/home">Home</Link>
          <Link className = "text-white p-2 m-2"to="/aboutme">About Me</Link>
          <Link className = "text-white p-2 m-2" to="/contact">Contact</Link>
          <Link className = "text-white p-2 m-2" to="/portfolio">Portfolio</Link>
        </Nav>
      </Container>

    </Navbar>
    </div>
    )
}


export default Navigation