import React from "react";

interface TimelineYearProps {
  year: number;
  isActive?: boolean;
  onClick?: (year: number) => void;
}

const TimelineYear = ({
  year = 2020,
  isActive = false,
  onClick = () => {},
}: TimelineYearProps) => {
  return (
    <div
      className={`relative flex flex-col items-center cursor-pointer transition-all duration-300 bg-white ${isActive ? "scale-110" : "hover:scale-105"}`}
      onClick={() => onClick(year)}
    >
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-colors duration-300 ${isActive ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
      >
        <span className="text-lg font-bold">{year}</span>
      </div>

      {/* Dot indicator for timeline */}
      <div className="w-3 h-3 rounded-full bg-primary"></div>

      {/* Line connector */}
      <div
        className={`absolute bottom-0 w-full h-0.5 ${isActive ? "bg-primary" : "bg-muted"}`}
      ></div>

      {/* Active indicator */}
      {isActive && (
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-primary"></div>
        </div>
      )}
    </div>
  );
};

export default TimelineYear;
