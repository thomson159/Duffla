import { useEffect, useState } from "react";

interface ExploreProps {
  journeyId: string;
}

export const Explore = ({ journeyId }: ExploreProps) => {
  const MAP_ID = process.env.NEXT_PUBLIC_MAP_GOOGLE_ID;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-black">
      <div className="relative max-w-[1440px] mx-auto bg-cover md:bg-contain bg-no-repeat bg-[40%] md:bg-right bg-black">
        <div className="flex items-center justify-center px-4 py-20 md:px-28">
          <div className="flex flex-col items-center gap-16">
            <div className="text-heading-5 md:text-heading-3 font-semibold tracking-tight-2 text-center">
              Razem tworzymy przyszłość pełną inspiracji i możliwości!
            </div>
            <div>
              {isClient && MAP_ID && (
                <iframe
                  src={MAP_ID}
                  loading="lazy"
                  title="Explore Map"
                  height="200"
                  className="px-4 md:px-28"
                  style={{
                    width: "calc(100vw - 20px)",
                    border: "none",
                  }}
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
