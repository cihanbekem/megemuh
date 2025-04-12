import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import logo from '../assets/logo_5.png'; // Logoyu içe aktar

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
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setFormStatus('Lütfen tüm alanları doldurun.');
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        'service_3gwl2dc', // Senin Service ID
        'template_h4r9cih', // Senin Template ID
        templateParams,
        'Y1U1rUJf0K6DiUQuh' // Senin Public Key'in
      )
      .then(
        (response) => {
          console.log('E-posta başarıyla gönderildi:', response);
          setFormStatus('Mesajınız başarıyla gönderildi!');
        },
        (error) => {
          console.log('E-posta gönderme hatası:', error);
          setFormStatus('Mesaj gönderilirken hata oluştu, lütfen tekrar deneyin.');
        }
      );

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      {/* Logo */}
      <div className="contact-logo">
        <img src={logo} alt="MEGE Mühendislik" className="logo-img" />
      </div>

      <div className="contact-wrapper">
        {/* Sol Taraf: Adres ve Harita */}
        <div className="contact-left">
          <h2>İletişim Bilgileri</h2>
          <p><strong>Mak. Müh. Murat Ege Korucu</strong></p>
          <p><strong>Telefon:</strong> 0536 647 39 49</p>
          <p><strong>Adres:</strong> Cumhuriyet Mahallesi Şirinevler Caddesi No:33/1b, Incirliova, Turkey</p>
          <h3>Konum</h3>
          <div className="map-container">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.5970114896717!2d27.71673217582978!3d37.85238440676456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b943d8c79d8619%3A0x24aeab0b0dc857e1!2sCumhuriyet%20Mahallesi%2C%20%C5%9Eirinevler%20Cd.%20No%3A33%2F1b%2C%20%C4%B0ncirliova%2FAYDIN%2C%20Turkey!5e0!3m2!1str!2str!4v1705517906498!5m2!1str!2str"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Sağ Taraf: Form */}
        <div className="contact-right">
          <h2>Bize Ulaşın</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Adınız:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adınızı girin"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresinizi girin"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesajınız:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mesajınızı yazın"
                required
              ></textarea>
            </div>
            <button type="submit">Gönder</button>
          </form>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </div>
      </div>

      {/* Footer */}
      <div className="bottom-text-container">
        <div className="bottom-text-line"></div>
        <p className="bottom-text">© 2025 MEGE Mühendislik. Tüm Hakları Saklıdır.</p>
      </div>
    </div>
  );
}

export default Contact;
