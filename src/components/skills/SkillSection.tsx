import './SkillSection.css';

const skills = [
  'MSSQL', 'GraphQL', 'C#', '.NET', 'HTML5', 'CSS3', 'React', 'TypeScript', 'Azure Cloud'
];

const SkillSection = () => {
  return (
    <div className="skill-section">
      {skills.map((skill, index) => (
        <div key={index} className="skill-box">
          <div className="skill-name">{skill}</div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;