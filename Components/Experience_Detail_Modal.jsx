import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const Chip = ({ children }) => (
  <span className="px-2.5 py-0.5 text-xs rounded-full bg-lightHover text-gray-700 dark:bg-darkHover/40 dark:text-gray-100">
    {children}
  </span>
);

const SectionTitle = ({ children }) => (
  <h3 className="text-lg sm:text-xl font-Ovo font-semibold mb-3 text-black dark:text-white">
    {children}
  </h3>
);

const Experience_Detail_Modal = ({ isOpen, experience, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [isOpen, onClose]);

  const detail = experience?.detail;

  return (
    <AnimatePresence>
      {isOpen && experience && detail && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-[60] p-2 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-modal-title"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 p-4 sm:p-6 border-b dark:border-gray-700 flex-shrink-0">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                {experience.icon && (
                  <div className="relative w-14 h-12 sm:w-20 sm:h-14 flex-shrink-0">
                    <Image
                      src={experience.icon}
                      alt={`${experience.title} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="min-w-0">
                  <h2
                    id="experience-modal-title"
                    className="text-xl sm:text-2xl font-bold font-Ovo text-black dark:text-white"
                  >
                    {experience.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200">
                    {detail.role}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {detail.period}
                    {detail.location ? ` · ${detail.location}` : ""}
                  </p>
                </div>
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close experience details"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200
                text-2xl font-bold w-9 h-9 flex items-center justify-center rounded-full
                hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex-shrink-0"
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-8 text-sm sm:text-base">
              {detail.summary && (
                <p className="text-gray-700 dark:text-gray-200 leading-7">
                  {detail.summary}
                </p>
              )}

              {detail.pipeline?.length > 0 && (
                <section>
                  <SectionTitle>How it fits together</SectionTitle>
                  <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                    {detail.pipeline.map((step, i) => (
                      <li key={step} className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full border border-gray-300 dark:border-white/40">
                          {step}
                        </span>
                        {i < detail.pipeline.length - 1 && (
                          <span aria-hidden="true">→</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {detail.projects?.length > 0 && (
                <section>
                  <SectionTitle>What I worked on</SectionTitle>
                  <div className="space-y-4">
                    {detail.projects.map((project) => (
                      <article
                        key={project.name}
                        className="border border-gray-300 dark:border-white/20 rounded-lg p-4"
                      >
                        <h4 className="font-semibold text-black dark:text-white">
                          {project.name}
                        </h4>
                        <p className="mt-1 text-gray-600 dark:text-gray-300 leading-6">
                          {project.description}
                        </p>
                        {project.points?.length > 0 && (
                          <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-200 leading-6">
                            {project.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        )}
                        {project.tech?.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                              <Chip key={t}>{t}</Chip>
                            ))}
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {detail.timeline?.length > 0 && (
                <section>
                  <SectionTitle>Timeline</SectionTitle>
                  <ol className="relative border-l-2 border-gray-300 dark:border-white/30 ml-2 space-y-5">
                    {detail.timeline.map((item) => (
                      <li key={`${item.date}-${item.title}`} className="pl-5 relative">
                        <span
                          aria-hidden="true"
                          className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-darkHover"
                        />
                        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          {item.date}
                        </p>
                        <p className="font-semibold text-black dark:text-white">
                          {item.title}
                        </p>
                        {item.detail && (
                          <p className="text-gray-600 dark:text-gray-300 leading-6">
                            {item.detail}
                          </p>
                        )}
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {detail.techStack?.length > 0 && (
                <section>
                  <SectionTitle>Tech & tools</SectionTitle>
                  <div className="flex flex-wrap gap-2">
                    {detail.techStack.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Experience_Detail_Modal;
