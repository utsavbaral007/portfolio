"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Pill } from "@/components/ui/pill";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBlogData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blog`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const { data } = await response.json();
        setBlogData(data);
        setBlogData(data || []);
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    getBlogData();
  }, []);

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
            <div className="grid h-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogData && blogData.length > 0 ? (
                blogData?.map((data, _) => (
                  <Link
                    key={data.id}
                    className="overflow-hidden border rounded-lg cursor-pointer border-white/10"
                    href={`${location.pathname}/${data.slug}`}
                  >
                    <div className="overflow-hidden rounded-lg h-[30vh] md:h-[25vh]">
                      <Image
                        src={data.imgUrl}
                        width={600}
                        layout="intrinsic"
                        height={600}
                        alt="Blog Image"
                        priority={true}
                        className="transition duration-500 hover:scale-110"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className="px-4 pb-4 mt-4">
                      <div className="relative flex items-center gap-3">
                        <Pill>{data.category}</Pill>
                      </div>
                      <h1 className="mt-3 mb-2 text-xl font-bold leading-6 line-clamp-1">
                        {data.title}
                      </h1>
                      <div
                        dangerouslySetInnerHTML={{ __html: data.description }}
                        className="text-sm line-clamp-3 text-white/60"
                      ></div>
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
                  </Link>
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
