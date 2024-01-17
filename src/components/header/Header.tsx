import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {

  return (
    <header className="header">
      <div className="logo">JETechNest</div>
      <div className="icon-group">
        <a href="https://github.com/Jesperejohannsen" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" color='white' />
        </a>
        <a href="https://www.linkedin.com/in/jesper-johannsen-61a140161/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" color='white'/>
        </a>
        <a href="mailto:jesperejohannsen@outlook.dk">
          <FontAwesomeIcon icon={faEnvelope} size="2x" color='white'/>
        </a>
      </div>
    </header>
  );
}

export default Header;