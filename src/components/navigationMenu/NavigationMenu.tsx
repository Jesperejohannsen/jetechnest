// Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  isOpen: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen }) => (
  <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/skills">Skills</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navigation;