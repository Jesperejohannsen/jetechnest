import "./gradiantHeader.css";

interface GradiantHeaderProps {
  h3: string;
}

const GradiantHeader: React.FC<GradiantHeaderProps> = ({ h3 }) => {
  return (
    <div className="project-overview">
      <h3>{h3}</h3>
    </div>
  );
};

export default GradiantHeader;
