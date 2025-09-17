import React, { useState } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { achievementsData, assets } from "@/assets/assets";
import Image from "next/image";
import Pop_Up from "./Pop_Up";

const Achievements = ({ isDarkMode }) => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (achievement, e) => {
    e.preventDefault();
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAchievement(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="achievements"
        className={`w-full px-[5%] py-10 scroll-mt-35 transition-all duration-300 ${isModalOpen ? 'blur-lg scale-95' : ''}`}
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
          Achievements
        </motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          {" "}
          Training & Internship Certificates
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        >
          Here, I present my certificates for extra-curricular activities and
          online courses that have helped enhance my skills and knowledge in
          various fields.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center flex-col gap-4"
        >
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1000: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1600: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="w-full max-w-full gap-4"
          >
            {achievementsData.map((item) => (
              <SwiperSlide key={item.title}>
                <div
                  onClick={(e) => openModal(item, e)}
                  className="flex cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col gap-6 mb-15 group relative shadow-lg text-white/50 rounded-xl px-5 py-6 m-4
                    w-full lg:h-[500px] lg:w-[480px] overflow-hidden cursor-pointer border-1 border-gray-400 
                    hover:bg-lightHover dark:hover:bg-darkHover/50 hover:-translate-y-1"
                  >
                    <div className="absolute bg-lightHover opacity-10 group-hover:opacity-50 dark:bg-darkHover"></div>

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
                      className="cursor-pointer relative"
                      style={{ width: "100%", height: "250px", overflow: "hidden" }}
                    >
                      <iframe
                        src={`${item.backgroundImage}#toolbar=0&navpanes=0&view=FitH`}
                        width="100%"
                        height="100%"
                        style={{ 
                          border: "none", 
                          pointerEvents: "none",
                          transform: "scale(1)",
                          transformOrigin: "top left"
                        }}
                        scrolling="no"
                      />
                      {/* Overlay to prevent interaction */}
                      <div 
                        className="absolute inset-0 bg-transparent cursor-pointer"
                        style={{ pointerEvents: "auto" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(item, e);
                        }}
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>

      {/* Pop-up Modal */}
      <Pop_Up 
        isOpen={isModalOpen}
        selectedAchievement={selectedAchievement}
        isDarkMode={isDarkMode}
        onClose={closeModal}
      />
    </>
  );
};

export default Achievements;