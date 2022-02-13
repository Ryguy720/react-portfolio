import './App.css';
// import Navigation from './components/Navigation';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import React from "react";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App" >

      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route>
            <Footer />
          </Route>
        </Switch>

      </Router>
    </div>);

}

export default App;


