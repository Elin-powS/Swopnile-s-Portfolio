import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
   <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  id="about"
  className="w-full px-[12%] py-10 mt-25 scroll-mt-30"
>
  <motion.h4
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="text-center mb-2 text-lg font-Ovo"
  >
    Introduction
  </motion.h4>

  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="text-center text-5xl font-Ovo"
  >
    About Me
  </motion.h2>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="flex w-full flex-col lg:grid lg:grid-cols-2 lg:gap-20 my-8"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full rounded-3xl max-w-none mb-6 lg:mb-0 lg:self-start mt-5" 
    >
      <Image
        src={assets.user_image}
        alt="User"
        className="w-full rounded-3xl"
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="flex-1"
    >
      <p className="mb-10 max-w-4xl font-Ovo text-justify">
        I am a recent graduate from Khulna University of Engineering and Technology (KUET) with a degree in 
        Computer Science and Engineering. Currently, I work as an AI/ML Engineer – Computer Vision at TransformsAI, 
        where I have contributed to various AI and machine learning projects, particularly in computer vision and edge optimization. 
        I also completed an internship at Cognifyz Technologies, where I gained hands-on experience in data analysis and machine learning.

        Additionally, I serve as a Teaching Assistant for the AI Agent Development with No Code Tool for Non-coders course at Ostad, 
        where I help non-technical individuals explore AI through intuitive workflows. Throughout my academic journey, I have worked 
        on diverse projects, including Android and iOS applications, websites, and data models for analysis. I am passionate about 
        machine learning and AI, constantly striving to create innovative solutions. My achievements include securing 4th place in the 
        SynergyX2024 Datathon Competition.

        Outside of work, I am an avid football and cricket player, and I enjoy playing the guitar, which is my favorite instrument. 
        Music and sports are important aspects of my life that help me stay balanced and inspired.
      </p>
    </motion.div>
  </motion.div>

  {/* New Div for Info List and Tools */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="w-full my-8"
  >
    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-full"
    >
      {infoList.map(
        ({ icon, iconDark, title, description, more_description }, index) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover
            hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 "
            key={index}
          >
            <Image
              src={isDarkMode ? iconDark : icon}
              alt={title}
              className="w-7 mt-3"
            />
            <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 text-sm dark:text-white/80">
              {description}
            </p>
            <p className="text-gray-600 text-sm dark:text-white/80 mt-2">
              {more_description}
            </p>
          </motion.li>
        )
      )}
    </motion.ul>

    <motion.h4
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.3 }}
      className="my-4 text-gray-700 font-Ovo dark:text-white/80"
    >
      Tools I Use
    </motion.h4>

    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.5 }}
      className="w-full flex flex-wrap items-center gap-3 sm:gap-5"
    >
      {toolsData.map((tool, index) => (
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-12 sm:w-14 aspect-square border
          border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 "
          key={index}
        >
          <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
</motion.div>

  );
};

export default About;
