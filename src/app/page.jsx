import { FiDownload } from "react-icons/fi";
import React from "react";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Link from "next/link";
import Stats from "@/components/Stats";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">React/UIUX Developer</span>
            <h1 className="h1 mb-6 mt-6">
              Hello I'm <br />
              <span className="text-accent">Utsav Baral</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a React.js and UI/UX developer proficient on developing
              seamless user interface and web applications using multiple
              technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="/assets/resume/Utsav CV.pdf"
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 rounded-full border border-accent h-12 px-6 text-accent hover:transition-all hover:bg-accent hover:text-primary"
                download
                target="_blank"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex items-center gap-6"
                  iconStyles="h-9 w-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <div className="pb-12 pt-4 xl:pb-0 xl:pt-0">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Home;
