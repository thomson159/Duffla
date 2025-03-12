import Carousel from "./Carousel";
import { ExampleCard } from "./ExampleCard";

export const Examples = () => {
  return (
    <div className="relative bg-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative pt-20 pb-10 md:pb-16 px-4 md:px-28 z-10">
          <div
            className="text-heading-5 md:text-heading-3 tracking-tight-3 font-semibold"
            id="api"
          >
            {/* Nasi Partnerzy */}
          </div>
        </div>
      </div>
      <div className="relative max-w-[1600px] overflow-hidden mx-auto">
        <div className="absolute h-24 w-10 md:w-44 lg:w-96 left-0 top-0 bg-black-gradient-left z-10" />
        <Carousel />
        <div className="absolute h-24 w-10 md:w-44 lg:w-96 right-0 top-0 bg-black-gradient-right z-10" />
      </div>
      <div className="max-w-[1440px] mx-auto -mt-4 md:mt-0">
        <div className="relative pb-20 px-4 md:px-28 z-10">
          <div className="flex flex-wrap gap-8 mt-16 justify-center items-center md:items-stretch md:justify-normal">
            <ExampleCard
              icon="coinbase"
              title="Zofia"
              subtitle=""
              description="Praca z tym architektem to czysta przyjemność! Od pierwszego spotkania wykazał się ogromnym profesjonalizmem i zrozumieniem naszych potrzeb. Każdy etap projektu był dokładnie dopracowany, a komunikacja przebiegała bez zarzutu. Efekt końcowy przerósł nasze oczekiwania – stworzył przestrzeń, która idealnie łączy funkcjonalność z estetyką. Zdecydowanie polecamy!"
              type="interaction"
            />
            <ExampleCard
              icon="moonpay-purple"
              title="Mateusz"
              subtitle=""
              description="Zdecydowanie najlepsza współpraca, jaką mieliśmy przy realizacji naszego projektu! Architekt wykazał się nie tylko ogromną wiedzą, ale również kreatywnością i elastycznością. Każda nasza sugestia była uwzględniona, a projekt dostosowany do naszych indywidualnych potrzeb. Cieszymy się, że zdecydowaliśmy się na współpracę i nie możemy się doczekać, by cieszyć się gotową przestrzenią."
              type="live-app"
            />
            <ExampleCard
              icon="lido"
              title="Marek"
              subtitle=""
              description="Profesjonalizm, precyzyjność i zaangażowanie – to słowa, które najlepiej opisują naszą współpracę z tym architektem. Już na etapie planowania czuliśmy się pewnie, wiedząc, że nasz projekt jest w rękach specjalisty. Efekt końcowy jest niesamowity – architekt stworzył dla nas przestrzeń, która doskonale odpowiada naszym wymaganiom."
              type="live-app"
            />
            <div className="md:hidden w-full text-p text-grey-500 mt-4">
              {/* I wiele więcej... */}
            </div>
          </div>
          <div className="hidden md:block text-p text-grey-500 text-right mt-4">
            {/* I wiele więcej... */}
          </div>
        </div>
      </div>
    </div>
  );
};
