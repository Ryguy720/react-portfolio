import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";




const Navigation = () => {
  return (
    <div>
    <Navbar className="color-nav d-flex justify-content-between" variant="dark">
      {/* <Container> */}
        <Navbar.Brand className = "name" href="/"><h1>Ryan McCulloch</h1></Navbar.Brand>
        <Nav className="">
        <Link className = "text-white p-2 m-2" to="/home">Home</Link>
          <Link className = "text-white p-2 m-2" to="/contact">Contact</Link>
          <Link className = "text-white p-2 m-2" to="/portfolio">Portfolio</Link>
        </Nav>
      {/* </Container> */}

    </Navbar>
    </div>
    )
}


export default Navigation