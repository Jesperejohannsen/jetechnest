import './SkillSection.css';

const skills = [
  'MSSQL', 'GraphQL', 'C#', '.NET', 'HTML5', 'CSS3', 'React', 'TypeScript', 'Azure Cloud'
];

const SkillSection = () => {
  return (
    <div className="skill-section">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <div className="card-face card-face-front">
            <div className="skill-name">{skill}</div>
          </div>
          <div className="card-face card-face-back">
            {/* You can add more information about the skill here */}
            <div className="skill-info">More info about {skill}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;