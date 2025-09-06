import React, { useState, useEffect } from 'react';
import './style.css';

const phrases = ["Software Engineer", "System Designer", "MERN Developer"];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting && charIndex <= currentPhrase.length) {
        setTypingText(currentPhrase.substring(0, charIndex));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypingText(currentPhrase.substring(0, charIndex));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex > currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [typingText, isDeleting, phraseIndex, charIndex]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="header">
      {/* ✅ Navbar stays at top */}
      <div className="container">
        <nav>
          <ul id="sidemenu" className={menuOpen ? 'show' : ''} style={{ right: menuOpen ? '0' : '-200px' }}>
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className={`fa-solid ${menuOpen ? 'fa-times' : 'fa-bars'} hamburger`} onClick={toggleMenu} aria-expanded={menuOpen} aria-label="Toggle menu"></i>
        </nav>
      </div>

      {/* ✅ Hero text fills remaining height */}
      <div className="header-text">
        <h1 className="intro-text">
  Hello, I'm <span className="highlight">Sakshi Jadhav</span>
</h1>
        <p>
          I'm a <span id="typing">{typingText}</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
