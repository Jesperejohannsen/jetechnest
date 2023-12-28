import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import SkillSection from './components/skills/SkillSection';
import ProjectsSection from './components/projects/ProjectsSection';
import ContactForm from './components/contact/Contact';

function App() {
  return (
    <>
      <Header />
      <About />
      <SkillSection />
      <ProjectsSection />
      <ContactForm />
    </>
  );
}

export default App;