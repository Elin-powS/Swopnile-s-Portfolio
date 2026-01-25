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
        className="text-3xl sm:text-6xl lg:text-[66px]  font-Ovo"
      >
       Junior ML/AI Engineer at Transforms AI
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        Passionate about Artificial Intelligence and Machine Learning, I am
        dedicated to creating innovative, user-centric solutions. By exploring
        web technologies like React.js, Next.js, and Node.js, I aim to build
        powerful, future-ready applications. My focus on AI and ML enables me to
        develop intelligent systems that solve complex problems, enhance user
        experiences, and drive impactful technological change.
      </motion.p>
      <div className=" flex flex-col sm:flex-row items-center gap-4 mt-4 ">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 
          cursor-pointer  hover:-translate-y-1 dark:bg-transparent"
        >
          Contact Me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
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
