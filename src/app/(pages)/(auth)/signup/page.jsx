"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/lib/zod";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { toastOptions } from "@/lib/toastOptions";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const onSubmit = async (data) => {
    setLoading((prev) => !prev);
    try {
      const res = await fetch("/api/auth/user", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      if (res.status === 201) {
        toast.success(response.message);
        router.push("/login");
      } else {
        toast.error(response.message);
        setLoading((prev) => !prev);
      }
    } catch (err) {
      toast.error("Something went wrong");
      setLoading((prev) => !prev);
    }
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
        <div className="flex justify-center items-center min-h-[70vh]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[500px] w-full flex flex-col gap-4"
          >
            <Input
              placeholder="Enter your first name"
              type="text"
              {...register("firstName")}
            />

            {errors.firstName?.message && (
              <span className="text-sm text-red-400">
                {errors.firstName?.message}
              </span>
            )}

            <Input
              placeholder="Enter your last name"
              type="text"
              {...register("lastName")}
            />

            {errors.lastName?.message && (
              <span className="text-sm text-red-400">
                {errors.lastName?.message}
              </span>
            )}

            <Input
              placeholder="Enter your email address"
              type="email"
              {...register("email")}
            />

            {errors.email?.message && (
              <span className="text-sm text-red-400">
                {errors.email?.message}
              </span>
            )}

            <Input
              placeholder="Enter the password"
              type="password"
              {...register("password")}
            />

            {errors.password?.message && (
              <span className="text-sm text-red-400">
                {errors.password?.message}
              </span>
            )}

            <Button disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>
        </div>
      </div>
      <Toaster toastOptions={toastOptions} />
    </motion.section>
  );
};

export default Signup;
