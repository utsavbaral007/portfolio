"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/zod";
import toast, { Toaster } from "react-hot-toast";
import { toastOptions } from "@/lib/toastOptions";

const LoginComponent = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });
  const onSubmit = async (data) => {
    setLoading((prev) => !prev);
    const signInData = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (signInData?.error) {
      toast.error("Invalid email or password");
      setLoading((prev) => !prev);
    } else {
      toast.success("Logged in successfully");
      router.push("/blog");
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
        <div className="min-h-[70vh] flex justify-center items-center">
          <form
            className="max-w-[500px] w-full flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              placeholder="Enter your email"
              type="text"
              {...register("email")}
            />

            {errors.email?.message && (
              <span className="text-sm text-red-400">
                {errors.email?.message}
              </span>
            )}

            <Input
              placeholder="Enter password"
              type="password"
              {...register("password")}
            />

            {errors.password?.message && (
              <span className="text-sm text-red-400">
                {errors.password?.message}
              </span>
            )}

            <Button disabled={loading} type="submit">
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
      </div>
      <Toaster toastOptions={toastOptions} />
    </motion.section>
  );
};

export default LoginComponent;
