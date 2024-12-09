"use client";

import { useMemo, useState } from "react";
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
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";

const CreateBlog = () => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const [quillDescription, setQuillDescription] = useState("");
  const [quillError, setQuillError] = useState("");
  const [creatingPost, setCreatingPost] = useState(false);
  const [category] = useState("Technology");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (!quillDescription) {
      setQuillError("Description is required");
      return;
    }
    setCreatingPost((prev) => !prev);
    data.description = quillDescription;
    data.category = category;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        console.log("Post created successfully"), creatingPost((prev) => !prev);
      })
      .catch((e) => {
        console.log(e), creatingPost((prev) => !prev);
      });
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <Input
            className="w-full"
            placeholder="Title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-sm text-red-400">Title is required</span>
          )}
          <Input
            className="w-full"
            placeholder="Image URL (only unsplash links valid)"
            {...register("imgUrl", { required: true })}
          />
          {errors.imgUrl && (
            <span className="text-sm text-red-400">Image is required</span>
          )}

          <Select value={category}>
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
          <ReactQuill
            theme="snow"
            value={quillDescription}
            onChange={(value) => {
              setQuillDescription(value), setQuillError("");
            }}
          />
          {quillError && (
            <span className="text-sm text-red-400">{quillError}</span>
          )}
          <Button type="submit" className="w-fit">
            Create Post
          </Button>
        </form>
      </div>
    </motion.section>
  );
};

export default CreateBlog;
