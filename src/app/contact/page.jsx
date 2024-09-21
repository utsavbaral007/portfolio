"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FiLoader } from "react-icons/fi";

const Contact = () => {
  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "+977-9865544909",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "manutsssav@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      description: "Chyasundol, Kathmandu, Nepal",
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    service: "",
    textMessage: "",
  });
  const [loading, setLoading] = useState(false);

  const handleFormValueChange = (e) => {
    if (typeof e === "object") {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, service: e });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.service ||
      !formData.textMessage
    ) {
      return toast.error(
        "All form fields must be filled out to proceed. Please check the missing fields and try again."
      );
    }
    try {
      setLoading(true);
      fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => toast.success(data.message))
        .finally(() => {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            service: "",
            textMessage: "",
          });
          setLoading(false);
        });
    } catch (e) {
      toast.error(e.message);
      setLoading(false);
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
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let&apos;s Work Together</h3>
              <p className="text-white/60">
                Got a project you would like me to work on?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstName"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormValueChange}
                />
                <Input
                  type="lastName"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormValueChange}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormValueChange}
                />
                <Input
                  type="phoneNumber"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleFormValueChange}
                />
              </div>

              <Select
                name="service"
                value={formData.service}
                onValueChange={handleFormValueChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Frontend Development">
                      Frontend Development
                    </SelectItem>
                    <SelectItem value="UI/UX Development">
                      UI/UX Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="textMessage"
                value={formData.textMessage}
                onChange={handleFormValueChange}
              />
              {loading ? (
                <Button disabled className="max-w-fit">
                  Sending <FiLoader className="ms-2 h-5 w-5 animate-spin" />
                </Button>
              ) : (
                <Button size="md" className="max-w-fit" type="submit">
                  Send Message
                </Button>
              )}
            </form>
          </div>
          <div className="order-1 xl:order-none flex flex-1 mb-8 xl:mb-0 items-center xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="h-[52px] w-[52px] xl:h-[72px] xl:w-[72px] bg-[#27272c] text-accent rounded-md grid place-content-center">
                      <div>{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          type="Success"
        />
      </div>
    </motion.section>
  );
};

export default Contact;
