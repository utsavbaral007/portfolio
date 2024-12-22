"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading((prev) => !prev);
    const signInData = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (signInData?.error) {
      console.log(signInData.error);
      setLoading((prev) => !prev);
    } else {
      setLoading((prev) => !prev);
      router.push("/blog");
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
        <div className="min-h-[70vh] flex justify-center items-center">
          <form
            className="max-w-[500px] w-full flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              placeholder="Enter your email"
              type="text"
              {...register("email", { required: true })}
            />

            {errors.email && (
              <span className="text-sm text-red-400">Email is required</span>
            )}

            <Input
              placeholder="Enter password"
              type="password"
              {...register("password", { required: true })}
            />

            {errors.password && (
              <span className="text-sm text-red-400">Password is required</span>
            )}

            <Button disabled={loading} type="submit">
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Login;
