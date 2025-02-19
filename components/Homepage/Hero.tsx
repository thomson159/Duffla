import Image from "next/image";
// import HeroImg from "../../public/homepage/hero-background.webp"
import HeroImg from "../../public/compressed/uslugowe/meta3/4.jpg";
import Button from "../ui/Button-scroll";
// import ImageSlider from "./ImageSlider";

interface HeroProps {
  journeyId: string;
}

export const Hero = ({ journeyId }: HeroProps) => {
  return (
    <div
      className="bg-black"
      style={
        {
          // minHeight: "54vh"
        }
      }
    >
      {/* md:bg-hero-background */}
      <div className="relative max-w-[1440px] mx-auto bg-contain md:bg-hero-background bg-no-repeat bg-right">
        <div className="pb-20 md:py-20 px-4 md:px-28" id="home">
          {/* md:hidden */}
          <div className="relative w-auto mx-auto md:hidden">
            <Image src={HeroImg} alt="hero" />
            {/* <ImageSlider /> */}
            <div className="absolute w-full h-32 bottom-0 left-0 bg-black-gradient-bottom" />
          </div>
          <div>
            <div className="text-heading-4 md:text-heading-5 lg:text-heading-3 xl:text-heading-2 font-semibold tracking-tight-4">
              {/* Ledger <span className="text-purple">Developer</span> Portal */}
              Duffla
            </div>
            <div className="text-heading-6 lg:text-heading-5 font-semibold tracking-tight-2 mt-5 md:max-w-[300px] lg:max-w-[500px] xl:max-w-none">
              {/* <p><span className="text-purple">Build</span> with Ledger to bring <span className="text-purple">security</span> to your community.</p> */}
              {/* <p><span className="text-purple">Easy. Accessible. Proven.</span></p> */}
              <p>
                <span className="">Tworzymy przestrzeń, która inspiruje.</span>
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
    </div>
  );
};
