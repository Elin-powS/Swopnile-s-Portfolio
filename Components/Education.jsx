import { educationData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Education = ({ isDarkMode }) => {
  return (
    <div className="mt-5 mb-10 min-lg:mt-30 min-lg:mb-35">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="education"
        className="w-full px-[12%] py-15 scroll-mt-35"
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg  font-Ovo"
        >
          Educational Background
        </motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center  text-5xl  font-Ovo"
        >
          {" "}
          My Studies and Qualifications
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className=" text-center max-w-2xl mx-auto mt-5 mb-12  font-Ovo"
        >
          I am currently pursuing my undergraduate degree in Computer Science
          and Engineering. At Khulna University of Engineering and Technology, I
          am gaining strong foundations in programming, software development,
          and problem-solving.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-auto gap-6 my-10">
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-full ">
            {educationData.map(
              ({ icon, title, description, more_description }, index) => (
                <motion.li
                whileHover={{ scale: 1.05 }}
                transition={{duration: 0.3}}

                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover
                             hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 "
                  key={index}
                >
                  <Image src={icon} alt={title} className="w-22 mt-1" />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white/80">
                    {description}
                  </p>
                  <p className="text-gray-600 text-sm dark:text-white/80">
                    {more_description}
                  </p>
                </motion.li>
              )
            )}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;
