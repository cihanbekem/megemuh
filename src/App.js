import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/App.css';
console.log('window height:', window.innerHeight);
console.log('document height:', document.body.scrollHeight);

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  console.log('scrollToSection çağrıldı:', sectionId);
  if (section) {
    const yOffset = -80;
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
    console.log('Scroll pozisyonu:', y);
    window.scrollTo({ top: y, behavior: 'smooth' });
  } else {
    console.log('❌ section bulunamadı:', sectionId);
  }
}


function App() {
  return (
    <div className="app">
        <Navbar scrollToSection={scrollToSection} />

      
      
      <section id="home" className="section">
        <Home scrollToSection={scrollToSection} />
      </section>


      <section id="services" className="section">
        <Services />
      </section>

      <section id="about" className="section">
        <About />
      </section>

      <section id="projects" className="section">
        <Projects scrollToSection={scrollToSection} />
      </section>

      <section id="contact" className="section">
        <Contact scrollToSection={scrollToSection} />
      </section>
    </div>
  );
}

export default App;
