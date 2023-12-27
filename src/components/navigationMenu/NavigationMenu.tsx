import React from 'react';

interface NavigationProps {
  isOpen: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen }) => (
  <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Technologies</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Socials</a></li>
    </ul>
  </nav>
);

export default Navigation;