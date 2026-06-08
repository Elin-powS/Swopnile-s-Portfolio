import { assets, publicationsData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const INITIAL_SHOW = 3;

/**
 * Status badge colors
 * status: "Published" | "Under Review" | "Preprint"
 */
const STATUS_STYLES = {
  Published:
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  "Under Review":
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  Preprint: "bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400",
};

const PublicationCard = ({ pub, index }) => {
  const [expanded, setExpanded] = useState(false);

  const statusClass = STATUS_STYLES[pub.status] || STATUS_STYLES["Preprint"];

  return (
    <div  className="group/pub flex flex-col rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 hover:shadow-xl hover:scale-[1.02] transition-[transform,box-shadow] duration-300 origin-center">
      <div className="flex flex-col p-6 bg-white dark:bg-white/5 group-hover/pub:bg-lightHover dark:group-hover/pub:bg-darkHover/50">
        {/* ── Top meta row ── */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {pub.status && (
            <span
              className={`text-[13px] font-semibold px-3.5 py-1.5 rounded-full ${statusClass}`}
            >
              {pub.status}
            </span>
          )}
          <span className="text-[13px] text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
            {pub.issueDate}
            {pub.volume && (
              <>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 inline-block" />
                {pub.volume}
              </>
            )}
            {pub.pages && (
              <>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 inline-block" />
                {pub.pages}
              </>
            )}
          </span>
        </div>

        {/* ── Title ── */}
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug mb-2">
          {pub.title}
        </h2>

        {/* ── Publisher ── */}
        {pub.publisher && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 flex-shrink-0 opacity-60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            {pub.publisher}
          </p>
        )}

        {/* ── Divider ── */}
        <div className="w-full h-px bg-gray-100 dark:bg-white/10 mb-3" />

        {/* ── Abstract ── */}
        {pub.abstract && (
          <div className="mb-4">
            <p
              className={`text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-all duration-300 ${
                expanded ? "" : "line-clamp-2"
              }`}
            >
              {pub.abstract}
            </p>
            {pub.abstract.length > 160 && (
              <button
                onClick={() => setExpanded((v) => !v)}
                className="text-[12px] text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 mt-1 transition-colors duration-200"
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        )}

        {/* ── Bottom row — tags + link ── */}
        <div className="flex flex-col gap-3 mt-auto sm:grid sm:grid-cols-[65fr_15fr_20fr] sm:items-center sm:gap-x-4">
          {/* Tags */}
          {pub.tags && pub.tags.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {pub.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[12px] font-semibold px-3 py-1 rounded-full border border-gray-200 dark:border-white/20 text-gray-700 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <div />
          )}

          {/* Gap */}
          <div />

          {/* View paper button */}
          <div className="flex justify-start sm:justify-end">
            {pub.doi ? (
              <a
                href={pub.doi}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1.5 text-sm font-medium px-5 py-2 rounded-full border border-gray-300 dark:border-white/30 text-gray-700 dark:text-white hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black duration-300 hover:-translate-y-1 transition-all whitespace-nowrap"
              >
                View paper
                <Image
                  src={assets.right_arrow_bold}
                  alt=""
                  className="w-3 dark:invert transition-transform duration-300 group-hover:-rotate-45"
                />
              </a>
            ) : (
              <span className="text-[12px] text-gray-400 dark:text-gray-500 italic">
                Link coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Publications = ({ isDarkMode }) => {
  const [showAll, setShowAll] = useState(false);
  const visiblePubs = showAll
    ? publicationsData
    : publicationsData.slice(0, INITIAL_SHOW);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="publications"
      className="w-full px-[12%] py-10 scroll-mt-30"
    >
      {/* ── Header ── */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Research Work
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Publications
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo"
      >
        Peer-reviewed papers, conference proceedings, and preprints spanning
        Computer Vision, Machine Learning, Artificial Intelligence, Data
        Science, and Large Language Models (LLMs) — demonstrating my commitment
        to advancing knowledge through rigorous research and innovation.
      </motion.p>

      {/* ── Cards — appear as one block after top section ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex flex-col gap-5 max-w-4xl mx-auto"
      >
        <AnimatePresence>
          {visiblePubs.map((pub, index) => (
            <PublicationCard key={pub.title} pub={pub} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ── See More / See Less ── */}
      {publicationsData.length > INITIAL_SHOW && (
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
             dark:text-white dark:border-white  dark:hover:bg-darkHover/50 cursor-pointer hover:-translate-y-1 transition-transform
              "
             
          >
            {showAll ? "See Less" : "See More"}
            <Image
              src={
                isDarkMode
                  ? assets.right_arrow_bold_dark
                  : assets.right_arrow_bold
              }
              alt="arrow"
              className={`w-4 transition-transform duration-300 group-hover:-rotate-45 ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Publications;
