import ImageGallery from "./ImageGallery";
import { JourneyCard } from "./JourneyCard";

export const Journeys = () => {
  return (
    <>
      <div className="relative bg-cover">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative py-20 px-4 md:px-28 z-10">
            <div
              className="text-heading-5 md:text-heading-3 tracking-tight-3 font-semibold"
              id="journeys"
            >
              {/* Documentation modules */}
              Obiekty
            </div>
            <div className="flex flex-wrap gap-y-8 md:gap-x-[3%] mt-16">
              {/* <div className="text-heading-6 md:text-heading-5 tracking-tight-3 font-semibold w-full">
              Obiekty
            </div> */}

              <JourneyCard
                title="Usługowe"
                description="Tworzymy obiekty usługowe, które wspierają sukces Twojej firmy dzięki innowacyjnemu designowi i efektywności."
                type="device"
                className="w-full md:w-[48.5%]"
              />
              <JourneyCard
                title="Przemysłowe"
                description="Projektujemy obiekty przemysłowe, które łączą wydajność z nowoczesnością, zapewniając optymalne warunki pracy."
                type="interaction"
                className="w-full md:w-[48.5%]"
              />
              <JourneyCard
                title="Konserwatorskie"
                description="Zachowujemy dziedzictwo – projektujemy obiekty, które łączą historyczną wartość z nowoczesnymi rozwiązaniami."
                type="clear-signing"
                className="w-full"
              />

              <div className="text-heading-6 md:text-heading-5 tracking-tight-3 font-semibold w-full">
                Mieszkaniowe
              </div>

              <JourneyCard
                title="Wielorodzinne"
                description="Mieszkania, które odpowiadają na potrzeby współczesnych mieszkańców – przestronne, funkcjonalne i pełne światła."
                type="blockchain"
                className="w-full md:w-[48.5%]"
              />
              <JourneyCard
                title="Jednorodzinne"
                description="Każdy projekt to indywidualna odpowiedź na potrzeby rodziny – projektujemy przestrzeń, w której chcesz mieszkać."
                type="live-app"
                className="w-full md:w-[48.5%]"
              />

              <div className="text-heading-6 md:text-heading-5 tracking-tight-3 font-semibold w-full">
                {/* a także */}
              </div>

              <JourneyCard
                title="Wnętrza"
                description="Każde wnętrze to historia – tworzymy przestrzenie, które inspirują i wyrażają Twoje potrzeby."
                type="A"
                className="w-full md:w-[48.5%]"
              />
              <JourneyCard
                title="Urbanistyka"
                description="Urbanistyka z wizją – tworzymy przestrzenie, które łączą przestronność, zieleń i nowoczesne rozwiązania."
                type="B"
                className="w-full md:w-[48.5%]"
              />

              {/* <div className="text-heading-6 md:text-heading-5 tracking-tight-3 font-semibold w-full">Clear signing</div> */}

              {/* <JourneyCard 
              title="Clear Signing initiative"
              description="Whitelist your smart contracts methods to enforce our new clear signing standard"
              type="clear-signing"
              className="w-full"
            /> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <ImageGallery />
      </div>
    </>
  );
};
