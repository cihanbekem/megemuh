import React from 'react';
import logo from '../assets/logo_5.png';
import './Projects.css';

const Projects = ({ scrollToSection }) => {
  return (
    <div className="projects-container">
      <div className="projects-card">
        <img src={logo} alt="MEGE Logo" className="projects-logo" />
        <h2><strong>Yapım Aşamasında</strong></h2>
        <p>
          <strong>Projeler kısmımız şu anda yapım aşamasındadır.</strong>
          <strong>Çok yakında burada firmamızın tamamlanmış ve devam eden projelerini görüntüleyebileceksiniz.</strong>
        </p>

        <div className="projects-button-container">
          <button className="projects-button" onClick={() => scrollToSection('home')}>
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
