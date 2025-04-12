import React from 'react';
import './Home.css';
import logo from '../assets/logo_5.png';
import { FaMouse } from 'react-icons/fa';

function Home({ scrollToSection }) {
  return (
    <div id="home" className="home-container">
      <h1 className="home-title">MEGE Mühendislik</h1>

      <div className="home-content">
        <h2 className="home-subtitle">Mühendislikte Güven ve Kalite</h2>
        <p className="home-description">
          MEGE Mühendislik olarak dalgıç pompa, hidrofor, drenaj sistemleri ve daha fazlasında lider çözümler sunuyoruz.
          Güvenilir mühendislik hizmetlerimizle yanınızdayız.
        </p>

        <div className="button-container">
          <button className="home-button" onClick={() => scrollToSection('services')}>
            Hizmetlerimizi Keşfedin
          </button>
          <button className="home-button" onClick={() => scrollToSection('contact')}>
            İletişime Geçin
          </button>
        </div>
      </div>

      <img src={logo} alt="MEGE Mühendislik" className="home-image" />

      <div className="scroll-down" onClick={() => scrollToSection('services')}>
        <span className="scroll-text">Aşağı İn</span>
        <FaMouse className="mouse-icon" />
      </div>
    </div>
  );
}

export default Home;
