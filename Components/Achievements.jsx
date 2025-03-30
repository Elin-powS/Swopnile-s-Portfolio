import React from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { achievementsData, assets } from "@/assets/assets";
import Image from "next/image";

const Achievements = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="achievements"
      className="w-full px-[12%] py-10 scroll-mt-35"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg  font-Ovo"
      >
        Achievements
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center  text-5xl  font-Ovo"
      >
        {" "}
        Training & Internship Certificates
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className=" text-center max-w-2xl mx-auto mt-5 mb-12  font-Ovo"
      >
        Here, I present my certificates for extra-curricular activities and
        online courses that have helped enhance my skills and knowledge in
        various fields.
      </motion.p>

      <motion.div 
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 0.8, delay: 1 }}
      className="flex items-center justify-center flex-col  gap-4 ">
        <Swiper
          breakpoints={{
            1000: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className=" max-w-[80%] lg:max-w-[90%] gap-4"
        >
          {achievementsData.map((item) => (
            <SwiperSlide key={item.title}>
              <a
                href={item.backgroundImage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex "
              >
                <motion.div
                 whileHover={{ scale: 1.05 }}
                  className="flex flex-col gap-6 mb-15 group relative shadow-lg text-white/50 rounded-xl px-5 py-6 m-4
               w-full lg:h-[500px] lg:w-[400px] overflow-hidden cursor-pointer border-1 border-gray-400 
                hover:bg-lightHover  dark:hover:bg-darkHover/50 hover:-translate-y-1"
                >
                  <div className="absolute bg-lightHover opacity-10 group-hover:opacity-50 dark:bg-darkHoverr"></div>

                  <div className="relative flex flex-col gap-3">
                    <Image
                      src={isDarkMode ? item.iconDark : item.icon}
                      alt=""
                      className="text-lightHover dark:text-darkHover w-[32px] h-[32px]"
                    />
                    <h1 className="text-xl lg:text-2xl text-black dark:text-white">
                      {item.title}
                    </h1>
                    <p className="lg:text-[15px] text-black dark:text-white">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className="cursor-pointer"
                    style={{ width: "100%", height: "250px", overflow: "auto" }}
                  >
                    <iframe
                      src={item.backgroundImage}
                      width="100%"
                      height="100%"
                      style={{ border: "none" }}
                    />
                  </div>
                  <div className="mt-2">
                    <Image
                      src={
                        isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon
                      }
                      alt=""
                      className="absolute bottom-5 left-5 w-[20px] h-[20px] text-black dark:text-white 
                    group-hover:text-lightHover dark:group-hover:text-darkHover group-hover:rotate-45 duration-100"
                    />
                  </div>
                </motion.div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Achievements;
