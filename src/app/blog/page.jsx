"use client";

import React from "react";
import { motion } from "framer-motion";
import { Pill } from "@/components/ui/pill";
import Image from "next/image";

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
      <div className="container mx-auto">
        <div className="min-h-[70vh]">
          <div className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1731582618594-4c084339d8d2?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={600}
                  height={600}
                  alt="Blog Image"
                  className="transition duration-500 hover:scale-110"
                />
              </div>
              <div className="mt-4">
                <div className="relative flex items-center gap-3">
                  <Pill>Technology</Pill>
                </div>
                <h1 className="text-2xl leading-6 font-bold my-3 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h1>
                <p className="text-sm line-clamp-3 text-white/60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus, quidem officiis? Tempora tenetur velit qui dolor,
                  sequi error voluptatum pariatur esse exercitationem
                  doloremque.
                </p>
                <div className="flex items-center mt-10">
                  <div className="h-[40px] w-[40px] rounded-full overflow-hidden bg-slate-400 flex justify-center items-center">
                    UB
                  </div>
                  <div className="flex flex-col ms-3">
                    <h1 className="font-bold">Utsav Baral</h1>
                    <p className="leading-3 text-[13px] text-white/60">
                      2h ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;
