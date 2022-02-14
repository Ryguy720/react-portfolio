import './App.css';
// import Navigation from './components/Navigation';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import React from "react";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";



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
        </Switch>
        <Route>
            <Footer />
          </Route>

      </Router>
    </div>);

}

export default App;


