import React from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import BlogCard, { BlogPost } from "../components/blog/BlogCard";

const dummyPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Evolution of Web Development",
    description:
      "Exploring the journey from static HTML to modern frameworks and the future of web development.",
    date: "2024-03-20",
    category: "Technology",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  },
  {
    id: 2,
    title: "Mastering UI/UX Design Principles",
    description:
      "Essential principles and practices for creating user-friendly and aesthetically pleasing interfaces.",
    date: "2024-03-15",
    category: "Design",
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    id: 3,
    title: "The Power of React Hooks",
    description:
      "Deep dive into React Hooks and how they revolutionize state management in functional components.",
    date: "2024-03-10",
    category: "React",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    id: 4,
    title: "Building Responsive Layouts",
    description:
      "Tips and techniques for creating websites that look great on any device using modern CSS.",
    date: "2024-03-05",
    category: "CSS",
    imageUrl:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
  },
];

const BlogPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Thoughts, tutorials and updates from my journey
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {dummyPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default BlogPage;
