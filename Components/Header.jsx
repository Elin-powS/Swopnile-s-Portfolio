import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      id="home"
      className="w-11/12 max-sm:mb-80 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-3 "
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="mt-30 max-sm:mt-90"
        suppressHydrationWarning={true}

      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-44" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-2 font-Ovo "
      >
        Hi I'm Aciful Islam Khan
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[60px]  font-Ovo"
      >
        AI Engineer at SOFOF TECH
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        Passionate about Artificial Intelligence, Machine Learning, and AI
        Automation, I am dedicated to building innovative and intelligent
        solutions that solve real-world problems. My interests include machine
        learning model development, AI agents, workflow automation, data
        scraping, and intelligent system design. By working with modern AI
        technologies and automation tools, I aim to create scalable, efficient,
        and impactful systems that enhance productivity, improve user
        experiences, and drive technological innovation.
      </motion.p>
      <div className=" flex flex-col sm:flex-row items-center gap-4 mt-4 ">
        <motion.a
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        href="#contact"
        className="group px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 
        cursor-pointer hover:-translate-y-1 dark:bg-transparent"
      >
        Contact Me{" "}
        <Image src={assets.right_arrow_white} alt="" className="w-4 transition-transform duration-300 group-hover:-rotate-270" />
      </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="./CV_Aciful_Islam_Khan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white
          cursor-pointer  hover:-translate-y-1 hover:bg-lightHover duration-500 dark:text-black  dark:hover:bg-darkHover "
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
