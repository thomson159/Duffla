import React from "react";
import Image from "next/image";

interface CarouselItemProps {
  title: string;
  url: string;
  link: string;
}

export const CarouselItem = ({ title, url, link }: CarouselItemProps) => {
  return (
    <div className="flex justify-center items-center">
      <a target="_blank" href={ link }>
        <img src={url} alt={title} className="" style={{ width: 200 }} />
      </a>
    </div>
  );
};

export default CarouselItem;
