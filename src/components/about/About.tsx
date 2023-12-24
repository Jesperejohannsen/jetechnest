import "./About.css";
import profileImage from "../../assets/profilePicture.jpg"; // Import the image

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <section className="about">
          <h2>Jesper Elgaard Johannsen</h2>
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
          />{" "}
          {/* Use the image */}
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
            My passion for software development extends beyond my professional
            life. In my free time, I enjoy contributing to open-source projects
            and exploring the latest trends in the tech industry.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
