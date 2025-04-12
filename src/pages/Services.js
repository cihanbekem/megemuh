import React, { useRef, useState, useEffect } from 'react';
import './Services.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

const servicesData = [
  { title: 'Dalgıç Pompa ve Motorlar'},
  { title: 'Dalgıç Montaj Malzemeleri'},
  { title: 'Hidrofor ve Aksesuarları'},
  { title: 'Santrifüj ve Drenaj Pompaları' },
  { title: 'Tanker ve Yağmurlama Pompaları'},
  { title: 'Derin Kuyu Sondajı'},
];

const Services = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Sağ ve sol oklarla kaydırma
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  

  // Mouse sürükleme (drag-scroll) fonksiyonları
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Kaydırma hızı
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('mousemove', handleMouseMove);

    return () => {
      carousel.removeEventListener('mousedown', handleMouseDown);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      carousel.removeEventListener('mouseup', handleMouseUp);
      carousel.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging]);

  return (
    <div className="services">
      <h1 className="services-title">Hizmetlerimiz</h1>
      <div className="carousel-wrapper">
        {/* Sol Ok */}
        <button className="carousel-arrow left" onClick={() => scroll('left')}>
          <FaChevronLeft />
        </button>

        {/* Kaydırılabilir Kartlar */}
        <div className="carousel" ref={carouselRef}>
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Sağ Ok */}
        <button className="carousel-arrow right" onClick={() => scroll('right')}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Services;
