import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
     <Navigation />
     <Aboutme />
     <Portfolio />

    </div>
  );
}

export default App;
