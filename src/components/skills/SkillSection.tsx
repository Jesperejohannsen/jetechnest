import GradiantHeader from '../gradiantHeader/GradiantHeader';
import './SkillSection.css';

const SkillSection = () => {
  const skills = {
    frontend: ["HTML5", "CSS3", "TypeScript", "React"],
    backend: [".NET", "C#", "Python", "GraphQL", "REST"],
    database: ["MongoDB", "MSSQL", "PostgreSQL", "SQLite"],
    technologies: ["Azure", "Docker", "Git", "CI/CD" ],
  };

  return (
    <>
    <GradiantHeader h3="This provides a glimpse into my preferred tech stack and the technologies I enjoy working with" />
    <div id="skills" className="skill-section">
      {Object.entries(skills).map(([category, skills], index) => (
        <div key={index} className={`category-box ${category}`}>
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          {skills.map((skill, index) => (
            <div key={index} className="skill-box">
              <div className="skill-name">{skill}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </>
  );
};

export default SkillSection;