import './SkillSection.css';

const SkillSection = () => {
  const skills = {
    frontend: ["HTML5", "CSS3", "TypeScript", "React"],
    backend: [".NET", "C#", "Python", "GraphQL", "REST"],
    database: ["MongoDB", "MSSQL", "PostgreSQL", "SQLite"],
    technologies: ["Azure", "Docker", "Git", "CI/CD" ],
  };

  return (
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
  );
};

export default SkillSection;