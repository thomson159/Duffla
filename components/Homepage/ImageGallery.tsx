import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  ["/compressed/jedno/dob/1.jpg", "/compressed/jedno/swier/1.jpg", "/compressed/jedno/meszna/1.jpg"],
  ["/compressed/uslugowe/meta3/1.jpg", "/compressed/uslugowe/meta/7.jpg", "/compressed/uslugowe/part/1.jpg"],
  ["/compressed/wielo/marcin/1.jpg", "/compressed/wielo/sos/1.jpg", "/compressed/wielo/1maja/1.jpg"],
  ["/compressed/jedno/swier/8.jpg", "/compressed/wnetrza/website/3.jpg", "/compressed/jedno/archi/2/1.jpg"],
  ["/compressed/kon/14.jpg", "/compressed/urban/lowisko/3.jpg", "/compressed/przemysl/2/4.jpg"]
];

const ImageColumn: React.FC<{ images: string[], isHovered: boolean, onMouseEnter: () => void, onMouseLeave: () => void }> = ({ images, isHovered, onMouseEnter, onMouseLeave }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="flex-1 overflow-hidden cursor-pointer relative"
      onClick={nextImage}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Gradient nakładający się na kolumnę, widoczny tylko podczas najechania */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
      )}

      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="Gallery"
          className="w-full h-full object-cover absolute"
          initial={{ opacity: 0, scale: 1.2, x: -100 }}
          animate={{
            opacity: 1,
            scale: isHovered ? 1.1 : 1, // Powiększ obrazek podczas najechania
            x: 0,
          }}
          exit={{ opacity: 0, scale: 0.8, x: 100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
};

const ImageGallery: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative flex w-full" style={{ height: "80vh" }}>
      {images.map((column, idx) => (
        <ImageColumn
          key={idx}
          images={column}
          isHovered={hoveredIndex === idx}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
