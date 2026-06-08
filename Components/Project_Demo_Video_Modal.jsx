import React from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * Project_Demo_Video_Modal
 *
 * Props:
 *  - project  : the project object ({ title, description, tech, demo, category })
 *  - onClose  : callback to close the modal
 */
const Project_Demo_Video_Modal = ({ project, onClose }) => {
  if (!project) return null;

  /* ── Resolve embed URL ── */
  const getEmbedUrl = (url) => {
    if (!url) return null;
    if (url.includes("youtube.com/watch"))
      return url.replace("watch?v=", "embed/") + "?autoplay=1";
    if (url.includes("youtu.be/"))
      return url.replace("youtu.be/", "youtube.com/embed/") + "?autoplay=1";
    return url; // mp4 or generic iframe handled separately below
  };

  const embedUrl = getEmbedUrl(project.demo);
  const isMp4 = project.demo?.endsWith(".mp4");

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="demo-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      >
        {/* Modal container */}
        <motion.div
          key="demo-modal-box"
          initial={{ scale: 0.93, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.93, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="
            relative flex flex-col md:flex-row
            w-full max-w-5xl max-h-[90vh]
            rounded-2xl overflow-hidden
            bg-white dark:bg-[#151515]
            shadow-2xl
          "
        >
          {/* ── Close button ── */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="
              absolute top-3 right-3 z-20
              w-8 h-8 flex items-center justify-center
              rounded-full bg-black/20 dark:bg-white/10
              text-white hover:bg-black/40 dark:hover:bg-white/20
              transition-colors text-sm leading-none
            "
          >
            ✕
          </button>

          {/* ════════════════════════════════════════
              LEFT — 30% — Scrollable info panel
          ════════════════════════════════════════ */}
          <div
            className="
              w-full md:w-[30%] flex-shrink-0
              flex flex-col
              border-b md:border-b-0 md:border-r
              border-gray-100 dark:border-white/10
              overflow-y-auto
              max-h-52 md:max-h-full
            "
          >
            {/* Sticky header inside scroll area */}
            <div className="sticky top-0 z-10 px-5 pt-5 pb-3 bg-white dark:bg-[#151515]">
              {project.category && (
                <span className="inline-block text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 mb-3">
                  {project.category}
                </span>
              )}
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
                {project.title}
              </h2>
            </div>

            {/* Scrollable body */}
            <div className="px-5 pb-6 flex flex-col gap-5">
              {project.description && (
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              )}

              {project.tech && project.tech.length > 0 && (
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2.5">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-gray-200 dark:border-white/20 text-gray-600 dark:text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group inline-flex items-center gap-2 text-sm font-medium
                    px-4 py-2 rounded-full
                    border border-gray-300 dark:border-white/30
                    text-gray-700 dark:text-white
                    hover:bg-lightHover dark:hover:bg-darkHover
                    hover:-translate-y-0.5
                    transition-all duration-300 w-fit
                  "
                >
                  GitHub <span className="inline-block transition-transform duration-300 group-hover:-rotate-45">→</span>
                </a>
              )}
            </div>
          </div>

          {/* ════════════════════════════════════════
              RIGHT — 70% — Video player
          ════════════════════════════════════════ */}
          <div className="flex-1 bg-black flex items-center justify-center min-h-[220px]">
            {isMp4 ? (
              <video
                src={project.demo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            ) : embedUrl ? (
              <iframe
                src={embedUrl}
                className="w-full h-full min-h-[280px] md:min-h-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={project.title}
              />
            ) : (
              <p className="text-white/40 text-sm">No demo available.</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Project_Demo_Video_Modal;