import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import Aboutme from './pages/Aboutme';
import Project  from './components/Project';


function App() {
  return (
    <div className="App">
     <Navigation />
     <Aboutme />
     <Project />

    </div>
  );
}

export default App;
