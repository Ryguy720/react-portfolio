import './App.css';
// import Navigation from './components/Navigation';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import React from "react";
import Navigation from './components/Navigation';
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className= "App" >
    
    <Router>
       <Navigation />
        <Switch>
        <Route exact path="/">
            {Aboutme}
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
     
    </Router> 
    </div> );

}

export default App;


