// components/DynamicImage.js
import React, { useState, useEffect } from "react";

const DynamicImage = ({ src, alt }) => {
  const [minHeight, setMinHeight] = useState(300);

  useEffect(() => {
    const updateMinHeight = () => {
      setMinHeight(window.innerWidth < 768 ? 200 : 300);
    };

    updateMinHeight(); // Ustaw wartość początkową
    window.addEventListener("resize", updateMinHeight);
    
    return () => {
      window.removeEventListener("resize", updateMinHeight);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
      }}
    >
      <img
        alt={alt}
        src={src}
        style={{
          width: "100%",
          minHeight: minHeight,
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default DynamicImage;
