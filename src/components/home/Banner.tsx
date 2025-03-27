import React from "react";
import { cn } from "../../lib/utils";

interface BannerProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const Banner = ({
  title = "Welcome to My Portfolio",
  subtitle = "I create beautiful and functional digital experiences that make an impact.",
  backgroundImage = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80",
}: BannerProps) => {
  return (
    <div className="relative w-full h-[500px] bg-slate-900 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content container */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl animate-fadeIn delay-100">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fadeIn delay-200">
          <button className="px-6 py-3 bg-white text-slate-900 font-medium rounded-md hover:bg-gray-100 transition-colors">
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
