"use client";
import React from "react";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, veritatis! Porro, quas odio fugiat nemo beatae dicta sint culpa nostrum.",
  info: [
    { fieldName: "Name", fieldValue: "Utsav Baral" },
    { fieldName: "Phone", fieldValue: "+977-9865544909" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "GitHub", fieldValue: "utsavbaral007" },
    { fieldName: "Nationality", fieldValue: "Nepali" },
    { fieldName: "E-mail", fieldValue: "manutsssav@gmail.com" },
    { fieldName: "Languages", fieldValue: "Nepali, English, Hindi" },
  ],
};

const experience = {
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, corporis.",
  items: [
    {
      company: "InfoDevelopers Pvt. Ltd.",
      position: "UI/UX Engineer",
      duration: "Jun 2021 - Oct 2021",
    },
    {
      company: "Prismasofts",
      position: "Software Developer",
      duration: "Jun 2021 - Oct 2021",
    },
    {
      company: "Learngaroo",
      position: "Web Developer",
      duration: "Jun 2021 - Oct 2021",
    },
  ],
};

const education = {
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, corporis.",
  items: [
    {
      institution:
        "Central Department of Computer Science and Information Technology",
      degree: "Masters",
      duration: "Jun 2021 - Oct 2021",
    },
    {
      institution: "Himalaya College of Engineering",
      degree: "Bachelors",
      duration: "Jun 2021 - Oct 2021",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, corporis.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              Experience
            </TabsContent>
            <TabsContent value="education" className="w-full">
              Education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              Skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              About me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
