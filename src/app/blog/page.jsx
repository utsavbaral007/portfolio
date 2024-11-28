'use client'

import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-2"
    >
      <div className="container mx-auto">Coming soon...</div>
    </motion.section>
  );
};

export default Blog;
