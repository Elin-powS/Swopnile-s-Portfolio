import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Project_Demo_Video_Modal from "./Project_Demo_Video_Modal";
import Project_Image_Modal from "./Project_Image_Modal";

const INITIAL_SHOW = 3;

const ProjectCard = ({ project, index }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const intervalRef = useRef(null);

  const images = project.images || [project.bgImage];

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2500);
  };

  const stopSlider = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (images.length > 1) startSlider();
    return () => stopSlider();
  }, []);

  return (
    <>
      <div className="group/card flex flex-col md:flex-row rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 hover:shadow-xl hover:scale-[1.02] transition-[transform,box-shadow] duration-500 origin-center">
        {/* LEFT — Auto sliding images */}
        <div
          className="relative w-full md:w-[45%] min-h-[260px] md:min-h-[280px] overflow-hidden bg-gray-100 dark:bg-gray-900 flex-shrink-0 cursor-pointer"
          onClick={() => setShowImageModal(true)}
          onMouseEnter={stopSlider}
          onMouseLeave={() => images.length > 1 && startSlider()}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-contain bg-center bg-no-repeat bg-gray-100 dark:bg-gray-900"
              style={{ backgroundImage: `url(${images[currentSlide]})` }}
            />
          </AnimatePresence>

          {/* Hover overlay hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20 z-10 pointer-events-none">
            <span className="text-white text-xs font-medium bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
              🔍 View images
            </span>
          </div>

          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    stopSlider();
                    setCurrentSlide(i);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === currentSlide
                      ? "bg-gray-800 dark:bg-gray-200 w-4"
                      : "bg-gray-500 dark:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Category badge */}
          {project.category && (
            <span className="absolute top-3 left-3 z-10 text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-sm">
              {project.category}
            </span>
          )}
        </div>

        {/* RIGHT — Info */}
        <div className="flex flex-col justify-between p-6 flex-1 group-hover/card:bg-lightHover dark:group-hover/card:bg-darkHover/50">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {project.description ||
                "A project built with modern tools and best practices."}
            </p>

            {/* Tech tags */}
            {project.tech && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-6">
            {project.demo && (
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black hover:border hover:border-gray-300 dark:hover:bg-black dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <span>▶</span> Watch demo
              </button>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1.5 text-sm font-medium px-5 py-2 rounded-full border border-gray-300 dark:border-white/30 text-gray-700 dark:text-white hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black duration-300 hover:-translate-y-1 transition-all"
            >
              GitHub
              <Image
                src={assets.right_arrow_bold}
                alt=""
                className="w-3 dark:invert transition-transform duration-300 group-hover:-rotate-45"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Demo Video Modal */}
      {showModal && (
        <Project_Demo_Video_Modal
          project={project}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Image Modal */}
      {showImageModal && (
        <Project_Image_Modal
          images={images}
          startIndex={currentSlide}
          onClose={() => setShowImageModal(false)}
        />
      )}
    </>
  );
};

const Projects = ({ isDarkMode }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? workData : workData.slice(0, INITIAL_SHOW);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-30 min-lg:mb-5"
    >
      {/* ── Top section ── */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Latest Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo"
      >
        Check out my latest projects, including Machine learning models, AI
        Automation, AI systems, RAG, web applications, mobile apps, and more.
        These projects demonstrate my versatility and commitment to building
        impactful solutions across multiple platforms.
      </motion.p>

      {/* ── Cards — appear as one block after top section ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex flex-col gap-5 max-w-4xl mx-auto"
      >
        <AnimatePresence>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.link} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ── See More / See Less button ── */}
      {workData.length > INITIAL_SHOW && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="group w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px]
             border-gray-700 rounded-full py-2.5 px-10 hover:bg-lightHover duration-500
             dark:text-white dark:border-white dark:hover:bg-darkHover/50 cursor-pointer hover:-translate-y-1 transition-transform"
          >
            {showAll ? "See Less" : "See More"}
            <Image
              src={
                isDarkMode
                  ? assets.right_arrow_bold_dark
                  : assets.right_arrow_bold
              }
              alt="arrow"
              className={`w-4 transition-transform duration-300 ${
                showAll
                  ? "rotate-90 group-hover:-rotate-90"
                  : "group-hover:-rotate-270"
              }`}
            />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
