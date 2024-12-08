"use client";

import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";

const CreateBlog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };

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
        <h1 className="text-2xl uppercase mb-6">Create a new blog</h1>
        <form className="w-full flex flex-col gap-4">
          <Input
            className="w-full"
            placeholder="Title"
            {...register("title", { required: true })}
          />
          <Input
            className="w-full"
            placeholder="Image URL"
            {...register("imgUrl")}
          />

          <Select value="Technology">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a category</SelectLabel>
                <SelectItem value="Technology">Technology</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </form>
      </div>
    </motion.section>
  );
};

export default CreateBlog;
