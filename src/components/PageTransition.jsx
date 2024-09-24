"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === "/") {
      document.title = "Portfolio | " + "Home";
      return;
    }
    document.title =
      "Portolio | " +
      pathName.split("").splice(1, pathName.length)[0].toLocaleUpperCase() +
      pathName.split("").splice(2, pathName.length).join("");
  }, [pathName]);

  return (
    <AnimatePresence>
      <div key={pathName}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
