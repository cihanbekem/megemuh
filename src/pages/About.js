import React from 'react';
import logo from '../assets/logo_5.png'; // Logo dosyasını içe aktar
import './About.css'; // Stil dosyasını import edin

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const navbar = document.querySelector('.navbar'); // Navbar'ı seç
    const navbarHeight = navbar ? navbar.offsetHeight : 80; // Navbar'ın yüksekliği
    const offset = navbarHeight + 10; // Navbar + ekstra boşluk
    
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
    
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth',
    });
  }
}

function About() {
  return (
    <div className="about">
      <img src={logo} alt="Logo" className="logo hover-logo" /> {/* Logo ekle */}
      <div className="about-card">
        <h1>Hakkımızda</h1>
        <p>MEGE Mühendislik, mühendislik alanında uzmanlaşmış bir firmadır. Amacımız, müşterilerimize en iyi hizmeti sunmaktır.</p>
        <h2>Vizyonumuz</h2>
        <p>Geleceği şekillendiren yenilikçi çözümler sunmak.</p>
        <h2>Misyonumuz</h2>
        <p>Kalite ve güvenilirlikten ödün vermeden, müşteri memnuniyetini ön planda tutmak.</p>
      </div>
    </div>
  );
}

export default About;
