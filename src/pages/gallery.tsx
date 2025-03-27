import React from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import GalleryImage, { GalleryItem } from "../components/gallery/GalleryImage";

const dummyGallery: GalleryItem[] = [
  {
    id: 1,
    title: "Modern Web Application",
    category: "Web Development",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "UI/UX Design",
    imageUrl:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  },
  {
    id: 3,
    title: "Mobile App Design",
    category: "Mobile Development",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    id: 4,
    title: "Brand Identity",
    category: "Branding",
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  },
  {
    id: 5,
    title: "Dashboard Interface",
    category: "UI/UX Design",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 6,
    title: "Social Media App",
    category: "Mobile Development",
    imageUrl:
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80",
  },
];

const GalleryPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Gallery</h1>
            <p className="text-lg text-muted-foreground">
              A showcase of my recent projects and work
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {dummyGallery.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <GalleryImage item={item} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default GalleryPage;
