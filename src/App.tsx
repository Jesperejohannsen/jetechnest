import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import SkillSection from './components/skills/SkillSection';
import ProjectsSection from './components/projects/ProjectsSection';

function App() {
  return (
    <Router>
      <Header />
      <About />
      <SkillSection />
      <ProjectsSection />
    </Router>
  );
}

export default App;