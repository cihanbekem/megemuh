import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo_5.png';

function Navbar({ scrollToSection }) {
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo kısmı */}
        <div className="logo-container">
          <a
            href="#home"
            className="logo-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <img src={logo} alt="MEGE Logo" className="logo-image" />
            <span className="logo-text">MEGE Mühendislik</span>
          </a>
        </div>

        {/* Menü Linkleri */}
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              Anasayfa
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
              Hizmetler
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
              Hakkımızda
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
              Projeler
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              İletişim
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
