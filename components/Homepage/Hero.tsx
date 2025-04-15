import { useState, useEffect } from "react";
import Image from "next/image";
import HeroImg from "../../public/compressed/kon/18.jpg";
import Logo from "../../public/logo.png";
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
        <div className="pb-20 px-4 md:px-28 myMinHeight" id="home">
          <div className="relative w-auto mx-auto md:hidden">
            <Image src={HeroImg} alt="hero" />
            <div className="absolute w-full h-32 bottom-0 left-0 bg-black-gradient-bottom" />
          </div>
          <div className="hide-on-mobile">
            <Image src={Logo} alt="logo" style={{ maxWidth: 186.61 }} />
          </div>

          <div style={{ position: "absolute", bottom: 0 }}>
            <div className="text-heading-6 font-semibold tracking-tight-2 mt-5 w-full">
              <div className="pr-4">
                <span>Tworzymy przestrzeń, która inspiruje.</span>
              </div>
            </div>
            <Button
              label="ODKRYWAJ"
              link={journeyId}
              svgIcon="arrow-right"
              type="primary"
              className="relative mt-5 z-10"
            />
          </div>

          <div className="absolute w-full hidden md:block h-28 bottom-0 left-0 bg-black-gradient-bottom" />
        </div>
      </div>
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 shadow-lg flex items-center justify-center gap-4 z-50">
          <span>
            🍪 Serwis wykorzystuje pliki cookies. Korzystanie z witryny oznacza
            zgodę na ich zapis lub odczyt wg ustawień przeglądarki.
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
