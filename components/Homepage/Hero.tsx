import { useState, useEffect } from "react";
import Image from "next/image";
import HeroImg from "../../public/compressed/uslugowe/meta3/4.jpg";
import Button from "../ui/Button-scroll";

interface HeroProps {
  journeyId: string;
}

export const Hero = ({ journeyId }: HeroProps) => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookiesAccepted")) {
      setShowCookieBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookieBanner(false);
  };

  return (
    <div className="bg-black">
      <div className="relative max-w-[1440px] mx-auto bg-contain md:bg-hero-background bg-no-repeat bg-right">
        <div className="pb-20 md:py-20 px-4 md:px-28" id="home">
          <div className="relative w-auto mx-auto md:hidden">
            <Image src={HeroImg} alt="hero" />
            <div className="absolute w-full h-32 bottom-0 left-0 bg-black-gradient-bottom" />
          </div>
          <div>
            <div className="text-heading-4 md:text-heading-5 lg:text-heading-3 xl:text-heading-2 font-semibold tracking-tight-4">
              Duffla
            </div>
            <div className="text-heading-6 lg:text-heading-5 font-semibold tracking-tight-2 mt-5 md:max-w-[300px] lg:max-w-[500px] xl:max-w-none">
              <p>
                <span>Tworzymy przestrzeń, która inspiruje.</span>
              </p>
            </div>
            <Button
              label="Odkrywaj"
              link={journeyId}
              svgIcon="arrow-right"
              type="primary"
              className="relative mt-10 z-10"
            />
          </div>
          <div className="absolute w-full hidden md:block h-28 bottom-0 left-0 bg-black-gradient-bottom" />
        </div>
      </div>

      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 shadow-lg flex items-center justify-center gap-4 z-50">
          <span>
            🍪 Serwis wykorzystuje pliki cookies. Korzystanie z witryny
            oznacza zgodę na ich zapis lub odczyt wg ustawień przeglądarki.
          </span>
          <button
            onClick={acceptCookies}
            className="bg-orange-500 px-3 py-1 rounded-lg"
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};
