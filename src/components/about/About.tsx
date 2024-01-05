import "./About.css";
import profileImage from "../../assets/profilePicture.jpg"; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <section id="about" className="about">
          <h2>Jesper Elgaard Johannsen</h2>
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
          />
          <p>
            I am a passionate software developer with a keen interest in clean
            code and clean architecture. I believe that a well-structured and
            well-written codebase is the backbone of any successful software
            project.
          </p>
          <p>
            I am always eager to learn new technologies and improve my skills. I
            enjoy the challenge of solving complex problems and the satisfaction
            that comes with finding an elegant solution.
          </p>
          <p>
          I am very fond and interested in working with cloud technologies. I believe that cloud technologies are a key component of modern software development and I am always looking for opportunities to expand my knowledge in this area.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
