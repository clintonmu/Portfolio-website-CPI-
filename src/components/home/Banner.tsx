import React, { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

interface BannerProps {
  title?: string;
  subtitle?: string;
  images?: string[];
}

const Banner = ({
  title = "Welcome to My Portfolio",
  subtitle = "I create beautiful and functional digital experiences that make an impact.",
  images = ["default-banner.jpg"],
}: BannerProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [localImages, setLocalImages] = useState<string[]>([]);

  useEffect(() => {
    // Convert image filenames to local paths
    const imageUrls = images.map((img) => `/images/${img}`);
    setLocalImages(imageUrls);
  }, [images]);

  useEffect(() => {
    // Auto-rotate images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % localImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [localImages.length]);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % localImages.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + localImages.length) % localImages.length,
    );
  };

  return (
    <div className="relative w-full h-[500px] bg-red-600 overflow-hidden">
      {/* Background image with overlay */}
      {localImages.length > 0 && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${localImages[currentImageIndex]})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* Navigation arrows */}
      {localImages.length > 1 && (
        <>
          <button
            onClick={goToPrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={goToNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      {/* Pagination dots */}
      {localImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {localImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Content container */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl animate-fadeIn delay-100">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fadeIn delay-200">
          <button className="px-6 py-3 bg-white text-red-600 font-medium rounded-md hover:bg-gray-100 transition-colors">
            View My Work
          </button>
          <button className="px-6 py-3 bg-transparent text-white border border-white font-medium rounded-md hover:bg-white/10 transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
