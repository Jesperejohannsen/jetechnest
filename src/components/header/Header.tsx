// Header.tsx
import React, { useState } from 'react';
import Navigation from '../navigationMenu/NavigationMenu';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">JETechNest</div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'X' : '☰'}
      </div>
      <Navigation isOpen={isOpen} />
    </header>
  );
}

export default Header;