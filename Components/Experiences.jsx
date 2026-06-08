import { assets, experienceData } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

const Experiences = ({ isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Auto-swipe functionality
  useEffect(() => {
    if (!isHovered && experienceData.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === experienceData.length - 1 ? 0 : prevIndex + 1,
        );
      }, 3333);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  // Manual navigation functions
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? experienceData.length - 1 : currentIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === experienceData.length - 1 ? 0 : currentIndex + 1,
    );
  };

  // Get visible cards (previous, current, next)
  const getVisibleCards = () => {
    if (experienceData.length === 0) return [];

    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + experienceData.length) % experienceData.length;
      cards.push({
        ...experienceData[index],
        position: i,
        originalIndex: index,
      });
    }
    return cards;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experiences"
      className="w-full px-[5%] py-10 scroll-mt-35 lg:px-[12%] lg:mt-20 lg:mb-50 overflow-hidden"
      suppressHydrationWarning={true}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Experience
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo"
      >
        Professional Experiences
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-4 mb-8 font-Ovo px-4"
      >
        I have hands-on experience in AI/ML, computer vision, AI automation, and
        software development. Currently, I work as an AI Engineer at SOFOF TECH,
        where I develop machine learning models, AI automation systems, and data
        scraping solutions. Previously, I worked as an AI/ML Engineer – Computer
        Vision at Transforms AI. I also serve as a Lead Teacher at Upskill
        Consultancy, teaching Prompt Engineering and AI Automation with n8n, and
        previously worked as a Teaching Assistant at Ostad for AI automation
        courses. Additionally, I completed an AI/ML Internship at Cognifyz
        Technologies. I am passionate about building impactful AI-driven
        solutions.
      </motion.p>

      {/* 3D Carousel Container - Mobile Optimized */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative w-full my-8 h-[450px] sm:h-[400px] flex items-center justify-center overflow-visible"
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 
                   bg-white dark:bg-gray-800 rounded-full p-2 sm:p-3 shadow-xl 
                   hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300
                   hover:scale-110"
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 
                   bg-white dark:bg-gray-800 rounded-full p-2 sm:p-3 shadow-xl 
                   hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300
                   hover:scale-110"
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Cards Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {getVisibleCards().map(
            (
              { icon, title, description, link, position, originalIndex },
              index,
            ) => {
              const isCenter = position === 0;
              const isLeft = position === -1;
              const isRight = position === 1;

              return (
                <motion.div
                  key={`${originalIndex}-${currentIndex}`}
                  initial={{
                    x:
                      position *
                      (typeof window !== "undefined" && window.innerWidth < 640
                        ? 0
                        : 280),
                    scale: isCenter
                      ? 1
                      : typeof window !== "undefined" && window.innerWidth < 640
                        ? 0
                        : 0.8,
                    opacity: isCenter
                      ? 1
                      : typeof window !== "undefined" && window.innerWidth < 640
                        ? 0
                        : 0.6,
                    rotateY:
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? 0
                        : position * 15,
                    translateZ: isCenter
                      ? 0
                      : typeof window !== "undefined" && window.innerWidth < 640
                        ? 0
                        : -50,
                  }}
                  animate={{
                    x:
                      position *
                      (typeof window !== "undefined" && window.innerWidth < 640
                        ? 0
                        : 280),
                    scale: isCenter
                      ? 1
                      : typeof window !== "undefined" && window.innerWidth < 640
                        ? 0
                        : 0.8,
                    opacity: isCenter
                      ? 1
                      : typeof window !== "undefined" && window.innerWidth < 640
                        ? 0
                        : 0.6,
                    rotateY:
                      typeof window !== "undefined" && window.innerWidth < 640
                        ? 0
                        : position * 15,
                    translateZ: isCenter
                      ? 0
                      : typeof window !== "undefined" && window.innerWidth < 640
                        ? 0
                        : -50,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                  }}
                  className={`absolute w-[85%] sm:w-80 max-w-sm cursor-pointer transform-gpu ${
                    !isCenter ? "pointer-events-none hidden sm:block" : ""
                  }`}
                  style={{
                    filter: !isCenter ? "blur(2px)" : "blur(0px)",
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => !isCenter && goToSlide(originalIndex)}
                  whileHover={isCenter ? { scale: 1.05, y: -10 } : {}}
                >
                  <div
                    className={`border border-gray-400 rounded-xl px-4 sm:px-6 py-6 sm:py-8 min-h-[350px]
                           shadow-lg transition-all duration-500 backdrop-blur-sm
                           ${
                             isCenter
                               ? "bg-white dark:bg-gray-800 shadow-2xl border-blue-200 dark:border-blue-800"
                               : "bg-white/70 dark:bg-gray-800/70 shadow-md"
                           }
                           flex flex-col justify-between`}
                  >
                    <div>
                      {icon && (
                        <div className="mb-4 relative w-20 h-16 sm:w-30 sm:h-20">
                          <Image
                            src={icon}
                            alt={title || "Experience icon"}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}

                      <h3
                        className={`text-lg sm:text-xl font-semibold my-3 transition-colors duration-300 ${
                          isCenter
                            ? "text-gray-800 dark:text-white"
                            : "text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        {title}
                      </h3>
                      <div
                        className={`text-xs sm:text-sm leading-5 sm:leading-6 transition-colors duration-300 ${
                          isCenter
                            ? "text-gray-700 dark:text-gray-200"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {description.split("\n").map((line, index) => (
                          <div key={index} className={index > 0 ? "mt-2" : ""}>
                            {line}
                          </div>
                        ))}
                      </div>
                    </div>

                    {isCenter && link && (
                      <div className="mt-4">
                        <a
                          href={link}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 font-medium"
                        >
                          Read More
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            },
          )}
        </div>

        {/* Pagination Dots */}
        <div className="absolute -bottom-14 sm:-bottom-17 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {experienceData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                currentIndex === index
                  ? "bg-blue-600 dark:bg-blue-400 shadow-lg"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute -bottom-5 sm:-bottom-7 left-1/2 transform -translate-x-1/2 w-48 sm:w-64">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-1 rounded-full transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / experienceData.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experiences;
