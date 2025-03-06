interface ExploreProps {
  journeyId: string;
}

export const Explore = ({ journeyId }: ExploreProps) => {
  const MAP_ID = process.env.MAP_GOOGLE_ID;

  return (
    <div className="bg-black">
      <div className="relative max-w-[1440px] mx-auto bg-cover md:bg-contain bg-no-repeat bg-[40%] md:bg-right bg-black">
        <div className="flex items-center justify-center px-4 py-20 md:px-28">
          <div className="flex flex-col items-center gap-16">
            <div className="text-heading-5 md:text-heading-3 font-semibold tracking-tight-2 text-center">
              Razem tworzymy przyszłość pełną inspiracji i możliwości!
            </div>
            <div>
              <iframe
                src={MAP_ID}
                height="200"
                style={{
                  width: "65vw",
                }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
