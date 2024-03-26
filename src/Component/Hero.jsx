import React from "react";
import { Carousel } from "@material-tailwind/react";

const Hero = ({ images = [], countries = [] }) => {
  return (
    <Carousel
      transition={{ duration: 0.2 }}
      className="h-screen w-screen rounded-xl"
    >
      {images.map((image, index) => (
        <div key={index} className="relative h-full w-full">
          <img
            src={image}
            alt={`image ${index + 1}`}
            className="absolute h-full w-full object-cover opacity-75"
          />
          <svg className="absolute inset-y-0 left-0 w-1/2 h-full">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="lightblue" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#gradient)"
            />
          </svg>
          {countries.length > 0 && ( // Checks if countries has data
            <h1 className="absolute top-1/3 left-20 text-white text-7xl font-extrabold">
              Kibo {countries[index]}{" "}
              {/* Access country name based on index */}
            </h1>
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
