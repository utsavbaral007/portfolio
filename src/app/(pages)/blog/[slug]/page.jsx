"use client";

import React, { useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import moment from "moment";
import SocialShare from "@/components/SocialShare";

const BlogDetails = ({ params }) => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDetails = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blog/details`,
        {
          method: "POST",
          body: JSON.stringify({ slug: params.slug }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const response = await res.json();
      setBlogData(response.data);
    } catch (error) {
      console.error("Failed to fetch blog details:", error);
    } finally {
      setLoading(false);
    }
  }, [params.slug]);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

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
        {loading ? (
          <h1 className="text-center">Loading...</h1>
        ) : blogData && blogData.length > 0 ? (
          blogData.map((data) => (
            <div key={data.id}>
              <h1 className="text-center font-extrabold text-2xl lg:text-4xl mb-4 sm:mb-8 uppercase tracking-[3px]">
                {data.title}
              </h1>
              <div className="md:h-[50vh] w-full rounded-lg overflow-hidden">
                <Image
                  src={data.imgUrl}
                  width={500}
                  height={500}
                  alt="Blog Image"
                  priority={true}
                  className="transition duration-500 hover:scale-110"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="flex items-center mt-10">
                <div className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] rounded-full overflow-hidden bg-slate-400 flex justify-center items-center">
                  UB
                </div>
                <div className="flex flex-col ms-3">
                  <h1 className="font-bold md:text-lg">{data.author}</h1>
                  <p className="leading-3 text-[13px] md:text-[14px] text-white/60">
                    {moment(data.createdAt).format("LLL")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start mt-8 relative">
                <div
                  className="order-2 sm:order-1 blog-description"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                ></div>
                <SocialShare
                  containerStyles="flex flex-row sm:flex-col mb-6 sm:mb-0 gap-6 sm:ml-8 border border-white/10 p-3 rounded-lg h-fit order-1 sm:order-2"
                  iconStyles="text-xl md:text-3xl transition-all hover:text-accent"
                  title={data.title}
                />
              </div>
              <div className="h-[100vh]"></div>
            </div>
          ))
        ) : (
          <h1>Page not found</h1>
        )}
      </div>
    </motion.section>
  );
};

export default BlogDetails;
