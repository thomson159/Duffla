// ImageSlider.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroImg from "../../public/portfolio/ANDRYCHOW-biur-foto_obrobione.jpg";

const ImageSlider: React.FC = () => {
  // Konfiguracja slidera
  const settings = {
    dots: true, // Kropki nawigacyjne
    infinite: true, // Nieskończoność przewijania
    speed: 500, // Szybkość przejścia między slajdami
    slidesToShow: 1, // Ilość zdjęć wyświetlanych jednocześnie
    slidesToScroll: 1, // Ilość przewijanych zdjęć na raz
    arrows: false, // Wyłączenie strzałek nawigacyjnych
    swipe: true, // Umożliwia przewijanie za pomocą gestów i myszki
    draggable: true, // Umożliwia przeciąganie myszką
    autoplay: true, // Włącz automatyczne przewijanie
    autoplaySpeed: 3000, // Czas w ms (tutaj 3000 ms = 3 sekundy)
    swipeToSlide: true, // Umożliwia przesuwanie slajdów za pomocą gestów
    touchThreshold: 10, // Tolerancja dla gestów na urządzeniach dotykowych
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src="/_next/static/media/bg-clear-signing.e531988b.jpg"
            alt="Image 1"
          />
        </div>
        <div>
          <img
            src="/_next/static/media/bg-interaction.3a7b7f67.jpg"
            alt="Image 2"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
