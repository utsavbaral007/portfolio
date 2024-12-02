"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
        <div className="min-h-[70vh] flex justify-center items-center">
          <form
            className="max-w-[500px] w-full flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />

            {errors.email && (
              <span className="text-sm text-red-400">Email is required</span>
            )}

            <Input
              placeholder="Enter password"
              {...register("password", { required: true })}
            />

            {errors.password && (
              <span className="text-sm text-red-400">Password is required</span>
            )}

            <Button type="submit">Login</Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Login;
