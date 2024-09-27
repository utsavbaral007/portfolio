"use client";
import React from "react";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

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
  ],
};

const Resume = () => {
  return <div className="container mx-auto">Resume</div>;
};

export default Resume;
