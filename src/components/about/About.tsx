import "./About.css";
import profileImage from "../../assets/profilePicture.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <section id="about" className="about">
          <h2>Jesper Elgaard Johannsen</h2>
          <img src={profileImage} alt="Profile" className="profile-image" />
        </section>
          <div className="AboutParagraph">
            <p>
              Greetings, I am a Fullstack Developer employed at Siemens Gamesa
              Renewable Energy, where I actively contribute to cutting-edge
              projects in the renewable energy sector. My role involves
              leveraging a diverse skill set to create robust and efficient
              solutions in both front-end and back-end development. Beyond my
              professional endeavors, I am deeply passionate about continuous
              learning and skill development. I actively engage in collaborative
              projects with peers and pursue personal initiatives to stay at the
              forefront of technological advancements. This commitment allows me
              to enhance my proficiency and contribute meaningfully to the
              ever-evolving landscape of software development. In addition to my
              professional pursuits, I am an avid reader, a fitness enthusiast,
              and cherish quality time spent with friends and family. These
              activities serve as a foundation for maintaining a healthy
              work-life balance and nurturing personal well-being. I welcome
              opportunities for collaboration and exploration of new
              technologies to further enrich my expertise. Feel free to explore
              my portfolio to gain insights into my professional journey and the
              projects I have undertaken.
            </p>
            <p>
              I am very fond and interested in working with cloud technologies.
              I believe that cloud technologies are a key component of modern
              software development and I am always looking for opportunities to
              expand my knowledge in this area.
            </p>
            <p>
              Feel free to reach out to me on mail or my Linkedin at the bottom
              of the page.
            </p>
          </div>
      </div>
    </div>
  );
};

export default About;
