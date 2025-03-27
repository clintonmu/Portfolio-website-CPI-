import React from "react";
import Header from "../components/layout/Header";
import Banner from "../components/home/Banner";
import Timeline from "../components/home/Timeline";
import { motion } from "framer-motion";

const HomePage = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <motion.main
        className="pt-20" // Add padding top to account for fixed header
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Banner Section */}
        <motion.section variants={itemVariants}>
          <Banner
            title="Creative Portfolio"
            subtitle="Showcasing my journey through design and development over the years"
            backgroundImage="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=80"
          />
        </motion.section>

        {/* Timeline Section */}
        <motion.section variants={itemVariants}>
          <Timeline />
        </motion.section>

        {/* Footer Section */}
        <motion.footer
          variants={itemVariants}
          className="bg-gray-900 text-white py-12 px-4"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Me</h3>
              <p className="text-gray-300">
                I'm a passionate designer and developer with a focus on creating
                beautiful, functional digital experiences that make an impact.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-300 mb-2">Email: hello@example.com</p>
              <p className="text-gray-300">Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
          </div>
        </motion.footer>
      </motion.main>
    </div>
  );
};

export default HomePage;
