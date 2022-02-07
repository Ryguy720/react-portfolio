import './App.css';
// import Navigation from './components/Navigation';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import React from "react";
// import Navigation from './components/Navigation';
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    
    <Router>
      <div className= "App" >
      <Navbar className="color-nav text-center" variant="dark">
      <Container className="text center">
        <Navbar.Brand href="#home">Ryan McCulloch</Navbar.Brand>
        <Nav className="ml-auto">
          <Link to="/home">Home</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/portfolio">Portfolio</Link>
        </Nav>
      </Container>

    </Navbar>
        
          {/* <nav> */}
            {/* <ul> */}
            {/* <li> */}
                {/* <Link to="/home">Home</Link> */}
                {/* <Navigation /> */}
              {/* </li> */}
              {/* <li> */}
                {/* <Link to="/aboutme">Aboutme</Link> */}
                {/* <Aboutme /> */}
              {/* </li> */}
              {/* <li> */}
                {/* <Link to="/portfolio">Portfolio</Link> */}
                {/* <Portfolio /> */}
              {/* </li> */}
              {/* <li> */}
                {/* <Link to="/contact">Contact</Link> */}
              {/* </li> */}
            {/* </ul> */}
          {/* </nav> */}
        



        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/home">
            {/* <Navigation /> */}
          </Route>
          <Route path="/aboutme">
            <Aboutme />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;


