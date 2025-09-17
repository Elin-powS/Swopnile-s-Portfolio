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
          prevIndex === experienceData.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
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
    setCurrentIndex(currentIndex === 0 ? experienceData.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === experienceData.length - 1 ? 0 : currentIndex + 1);
  };

  // Get visible cards (previous, current, next)
  const getVisibleCards = () => {
    if (experienceData.length === 0) return [];
    
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + experienceData.length) % experienceData.length;
      cards.push({ ...experienceData[index], position: i, originalIndex: index });
    }
    return cards;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experiences"
      className="w-full px-[12%] py-10 scroll-mt-35 min-lg:mt-20 min-lg:mb-50"
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
        className="text-center text-5xl font-Ovo"
      >
        Professional Experiences
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-4 mb-8 font-Ovo"
      >
        I have hands-on experience in AI/ML, computer vision, and software development. 
        As an AI/ML Engineer at TransformsAI, I have worked on developing AI-driven solutions using
        TensorFlow, PyTorch, and other machine learning tools. I also gained valuable experience as
        an AI/ML Intern at Cognifyz Technologies. Additionally, I serve as a Teaching Assistant at Ostad, 
        assisting in the development of AI agents using no-code tools. I am passionate about leveraging technology 
        to build practical and impactful applications.
      </motion.p>

      {/* 3D Carousel Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative w-full my-8 h-[400px] flex items-center justify-center"
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 
                   bg-white dark:bg-gray-800 rounded-full p-3 shadow-xl 
                   hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300
                   hover:scale-110"
        >
          <svg 
            className="w-6 h-6 text-gray-700 dark:text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 
                   bg-white dark:bg-gray-800 rounded-full p-3 shadow-xl 
                   hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300
                   hover:scale-110"
        >
          <svg 
            className="w-6 h-6 text-gray-700 dark:text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Cards Container */}
        <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
          {getVisibleCards().map(({ icon, title, description, link, position, originalIndex }, index) => {
            const isCenter = position === 0;
            const isLeft = position === -1;
            const isRight = position === 1;
            
            return (
              <motion.div
                key={`${originalIndex}-${currentIndex}`}
                initial={{ 
                  x: position * 300, 
                  scale: isCenter ? 1 : 0.8,
                  opacity: isCenter ? 1 : 0.6,
                  rotateY: position * 15,
                  translateZ: isCenter ? 0 : -50
                }}
                animate={{ 
                  x: position * 280, 
                  scale: isCenter ? 1 : 0.8,
                  opacity: isCenter ? 1 : 0.6,
                  rotateY: position * 15,
                  translateZ: isCenter ? 0 : -50
                }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 100
                }}
                className={`absolute w-80 cursor-pointer transform-gpu ${
                  !isCenter ? 'pointer-events-none' : ''
                }`}
                style={{
                  filter: !isCenter ? 'blur(2px)' : 'blur(0px)',
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => !isCenter && goToSlide(originalIndex)}
                whileHover={isCenter ? { scale: 1.05, y: -10 } : {}}
              >
                <div
                  className={`border border-gray-400 rounded-xl px-6 py-8 h-85 
                           shadow-lg transition-all duration-500 backdrop-blur-sm
                           ${isCenter 
                             ? 'bg-white dark:bg-gray-800 shadow-2xl border-blue-200 dark:border-blue-800' 
                             : 'bg-white/70 dark:bg-gray-800/70 shadow-md'
                           }
                           flex flex-col justify-between`}
                >
                  <div>
                    {icon && (
                      <div className="mb-4">
                        <Image 
                          src={icon} 
                          alt={title || "Experience icon"} 
                          className="w-30 h-20 object-contain" 
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    <h3 className={`text-xl font-semibold my-3 transition-colors duration-300 ${
                      isCenter 
                        ? 'text-gray-800 dark:text-white' 
                        : 'text-gray-600 dark:text-gray-300'
                    }`}>
                      {title}
                    </h3>
                    <div className={`text-sm leading-6 transition-colors duration-300 ${
                      isCenter 
                        ? 'text-gray-700 dark:text-gray-200' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {description.split('\n').map((line, index) => (
                        <div key={index} className={index > 0 ? 'mt-2' : ''}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {isCenter && link && (
                    <div className="mt-4">
                      <a 
                        href={link} 
                        className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 font-medium"
                      >
                        Read More
                        <svg 
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {experienceData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                currentIndex === index 
                  ? 'bg-blue-600 dark:bg-blue-400 shadow-lg' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-64">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / experienceData.length) * 100}%` }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experiences;