"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative "data-carousel="slide">
      <div className="relative h-56 overflow-hidden  md:h-auto">
        <div className="flex duration-700 ease-in-out px-80 rounded-lg" data-carousel-item>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${
                index === currentImageIndex ? 'block' : 'hidden'
              } w-full`}
            >
                <div className="duration-700 ease-in-out" data-carousel-item>
                    <Image
                        src={image.src}
                        alt={image.alt}
                        layout="responsive"
                        width={400}
                        height={200}
                    />
                </div>
              
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
        <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 w-2 mx-1 rounded-full bg-gray-400 ${
                index === currentImageIndex ? 'bg-gray-800' : ''
            }`}
        ></button>
        ))}
        </div>
      <button onClick={prevImage} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button  onClick={nextImage} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;