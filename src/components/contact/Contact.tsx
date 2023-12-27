import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div id="contact" className="contact">
      <a href="https://github.com/Jesperejohannsen" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/jesper-johannsen-61a140161/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="mailto:jesperejohannsen@outlook.dk">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </a>
      <span>© {currentYear} JETechNest</span>
    </div>
  );
};

export default Contact;