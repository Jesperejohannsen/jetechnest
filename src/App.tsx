import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';

function App() {
  return (
    <Router>
      <Header />
      <About />
    </Router>
  );
}

export default App;