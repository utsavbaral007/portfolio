"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Pill } from "@/components/ui/pill";
import Image from "next/image";
import moment from "moment";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBlogData = useCallback(async () => {
    try {
      setLoading((prev) => !prev);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blog`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.data.length > 0) {
        setBlogData(data.data || []);
        setLoading((prev) => !prev);
      } else {
        setBlogData([]);
        setLoading((prev) => !prev);
      }
    } catch (e) {
      console.log(e);
      setLoading((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    getBlogData();
  }, [getBlogData]);

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
          {loading ? (
            <h1 className="text-center">Loading...</h1>
          ) : (
            <div className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogData && blogData.length > 0 ? (
                blogData?.map((data, _) => (
                  <div
                    key={data.id}
                    className="rounded-lg overflow-hidden cursor-pointer border border-white/10"
                  >
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={data.imgUrl}
                        width={600}
                        height={600}
                        alt="Blog Image"
                        priority={true}
                        className="transition duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="mt-4 px-4 pb-4">
                      <div className="relative flex items-center gap-3">
                        <Pill>{data.category}</Pill>
                      </div>
                      <h1 className="text-xl leading-6 font-bold mt-3 mb-2 line-clamp-1">
                        {data.title}
                      </h1>
                      <p
                        dangerouslySetInnerHTML={{ __html: data.description }}
                        className="text-sm line-clamp-3 text-white/60"
                      ></p>
                      <div className="flex items-center mt-10">
                        <div className="h-[40px] w-[40px] rounded-full overflow-hidden bg-slate-400 flex justify-center items-center">
                          UB
                        </div>
                        <div className="flex flex-col ms-3">
                          <h1 className="font-bold">{data.author}</h1>
                          <p className="leading-3 text-[13px] text-white/60">
                            {moment(data.createdAt).format("LLL")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>Sorry! No data present currently!</h1>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;
