import React from "react";
import { motion } from "framer-motion";

interface TimelineContentProps {
  year: string;
  image: string;
  title: string;
  description: string;
}

const TimelineContent = ({
  year = "2023",
  image = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
  title = "Project Title",
  description = "This is a description of the project completed during this year. It showcases the skills and technologies used.",
}: TimelineContentProps) => {
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key={year} // Key helps React identify when to animate on year change
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <motion.img
            src={image}
            alt={`Project from ${year}`}
            className="w-full h-auto rounded-lg object-cover aspect-video"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium">
            {year}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineContent;
