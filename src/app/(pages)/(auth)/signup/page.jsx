"use client";

import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Signup = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-2"
    >
      <div className="container mx-auto">
        <div className="flex justify-center items-center min-h-[70vh]">
          <form className="max-w-[500px] w-full flex flex-col gap-4">
            <Input
              className="border-2"
              placeholder="Enter your email"
              type="text"
            />

            <Input
              className="border-2"
              placeholder="Enter password"
              type="password"
            />

            <Button>Signup</Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Signup;
