import React, { useState } from "react";
import TimelineYear from "./TimelineYear";
import TimelineContent from "./TimelineContent";
import { motion } from "framer-motion";

interface TimelineProject {
  year: number;
  image: string;
  title: string;
  description: string;
}

interface TimelineProps {
  projects?: TimelineProject[];
}

const Timeline = ({ projects = [] }: TimelineProps) => {
  // Default projects if none are provided
  const defaultProjects: TimelineProject[] = [
    {
      year: 2018,
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      title: "Web Development Portfolio",
      description:
        "Created my first professional web development portfolio showcasing early projects and skills in HTML, CSS, and JavaScript.",
    },
    {
      year: 2019,
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
      title: "Mobile App Design",
      description:
        "Designed and developed a mobile application for local businesses, implementing responsive design principles and user experience best practices.",
    },
    {
      year: 2020,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      title: "E-commerce Platform",
      description:
        "Built a full-featured e-commerce platform with secure payment processing, inventory management, and analytics dashboard.",
    },
    {
      year: 2021,
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
      title: "Interactive Data Visualization",
      description:
        "Created interactive data visualizations for a financial services company, translating complex data into intuitive visual representations.",
    },
    {
      year: 2022,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      title: "AI-Powered Web Application",
      description:
        "Developed an AI-powered web application that provides personalized recommendations based on user behavior and preferences.",
    },
    {
      year: 2023,
      image:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      title: "Blockchain Integration Project",
      description:
        "Implemented blockchain technology for a supply chain management system, ensuring transparency and security in product tracking.",
    },
  ];

  const timelineProjects = projects.length > 0 ? projects : defaultProjects;
  const [activeYear, setActiveYear] = useState(
    timelineProjects[timelineProjects.length - 1].year,
  );

  // Find the active project based on the selected year
  const activeProject =
    timelineProjects.find((project) => project.year === activeYear) ||
    timelineProjects[0];

  return (
    <div className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my professional timeline and see how my skills and projects
            have evolved over the years.
          </p>
        </div>

        {/* Timeline Years */}
        <div className="relative mb-16">
          <div className="absolute left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 top-1/2 -translate-y-1/2"></div>

          <motion.div
            className="flex justify-between items-center relative z-10 px-4 md:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {timelineProjects.map((project) => (
              <TimelineYear
                key={project.year}
                year={project.year}
                isActive={activeYear === project.year}
                onClick={setActiveYear}
              />
            ))}
          </motion.div>
        </div>

        {/* Timeline Content */}
        <div className="mt-8">
          <TimelineContent
            year={activeProject.year.toString()}
            image={activeProject.image}
            title={activeProject.title}
            description={activeProject.description}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
