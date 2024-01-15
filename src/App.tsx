import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import SkillSection from './components/skills/SkillSection';
import ProjectsSection from './components/projects/ProjectsSection';
import ContactForm from './components/contact/Contact';
import RecommendedBooks from './components/recommendedBooks/RecommendedBooks';

function App() {
  return (
    <>
      <Header />
      <About />
      <RecommendedBooks />
      <SkillSection />
      <ProjectsSection />
      <ContactForm />
    </>
  );
}

export default App;