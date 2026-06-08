import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * Project_Image_Modal
 *
 * Props:
 *  - images     : string[]  — array of image URLs
 *  - startIndex : number    — which image to open on
 *  - onClose    : () => void
 */
const Project_Image_Modal = ({ images, startIndex = 0, onClose }) => {
  const [current, setCurrent] = useState(startIndex);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  /* ── Keyboard navigation ── */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, onClose]);

  /* ── Lock body scroll ── */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      >
        {/* ── Modal box ── */}
        <motion.div
          key="lightbox-box"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl mx-4 flex flex-col items-center"
        >
          {/* ── Close button ── */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute -top-10 right-0 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-sm"
          >
            ✕
          </button>

          {/* ── Counter ── */}
          {images.length > 1 && (
            <p className="absolute -top-10 left-0 text-white/50 text-sm tabular-nums">
              {current + 1} / {images.length}
            </p>
          )}

          {/* ── Image area ── */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-black aspect-video">
            <AnimatePresence custom={direction} mode="popLayout" initial={false}>
              <motion.img
                key={current}
                src={images[current]}
                alt={`Slide ${current + 1}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-contain"
                draggable={false}
              />
            </AnimatePresence>

            {/* ── Prev / Next hit areas ── */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  aria-label="Previous image"
                  className="absolute left-0 top-0 h-full w-1/4 z-10 group flex items-center justify-start pl-3 focus:outline-none"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-lg">
                    ‹
                  </span>
                </button>
                <button
                  onClick={goNext}
                  aria-label="Next image"
                  className="absolute right-0 top-0 h-full w-1/4 z-10 group flex items-center justify-end pr-3 focus:outline-none"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-lg">
                    ›
                  </span>
                </button>
              </>
            )}
          </div>

          {/* ── Dot indicators ── */}
          {images.length > 1 && (
            <div className="flex gap-2 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-white w-6"
                      : "bg-white/30 w-1.5 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}

          {/* ── Keyboard hint ── */}
          {images.length > 1 && (
            <p className="mt-3 text-white/30 text-xs flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 rounded border border-white/20 font-mono text-[10px]">←</kbd>
              <kbd className="px-1.5 py-0.5 rounded border border-white/20 font-mono text-[10px]">→</kbd>
              to navigate
              <span className="mx-1 opacity-40">·</span>
              <kbd className="px-1.5 py-0.5 rounded border border-white/20 font-mono text-[10px]">Esc</kbd>
              to close
            </p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Project_Image_Modal;