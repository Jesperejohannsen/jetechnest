const SkillSection = () => {
  const skills = {
    frontend: ["HTML5", "CSS3", "TypeScript", "React"],
    backend: [".NET", "C#", "GraphQL", "MSSQL"],
    database: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
    cloud: ["Azure"],
  };

  return (
    <div className="skill-section">
      {Object.entries(skills).map(([category, skills], index) => (
        <div key={index} className={`category-box ${category}`}>
          <div className="skill-box">
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          </div>
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