import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import SkillSection from './components/skills/SkillSection';

function App() {
  return (
    <Router>
      <Header />
      <About />
      <SkillSection />
    </Router>
  );
}

export default App;