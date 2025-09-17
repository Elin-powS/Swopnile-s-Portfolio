import React from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const Pop_Up = ({ isOpen, selectedAchievement, isDarkMode, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && selectedAchievement && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-7xl w-full max-h-[95vh] sm:max-h-[95vh] overflow-hidden mx-2 sm:mx-4 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b dark:border-gray-700 flex-shrink-0">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <Image
                  src={isDarkMode ? selectedAchievement.iconDark : selectedAchievement.icon}
                  alt=""
                  className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg sm:text-2xl font-bold text-black dark:text-white font-Ovo truncate">
                    {selectedAchievement.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm sm:text-base line-clamp-2">
                    {selectedAchievement.description}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 
                text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full 
                hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex-shrink-0 ml-2"
              >
                ×
              </button>
            </div>

            {/* Content - Mobile optimized layout */}
            <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
              {/* PDF Viewer - Mobile first approach */}
              <div className="flex-1 p-3 sm:p-4 lg:p-6 flex flex-col">
                <div className="w-full flex-1 border rounded-lg overflow-hidden relative bg-gray-100 dark:bg-gray-700 min-h-[300px] lg:min-h-[550px]">
                  <iframe
                    src={`${selectedAchievement.backgroundImage}#toolbar=0&navpanes=0&view=FitH&zoom=page-width`}
                    width="100%"
                    height="100%"
                    style={{ 
                      border: "none", 
                      pointerEvents: "auto",
                      minHeight: "300px",
                      display: "block"
                    }}
                    title={selectedAchievement.title}
                    scrolling="yes"
                    loading="eager"
                    allowFullScreen
                  />
                  {/* Overlay to prevent right-click and selection but allow scrolling */}
                  <div 
                    className="absolute inset-0 bg-transparent select-none pointer-events-none"
                    style={{ 
                      userSelect: "none",
                      WebkitUserSelect: "none",
                      MozUserSelect: "none",
                      msUserSelect: "none"
                    }}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                </div>
              </div>

              {/* Additional Information - Mobile optimized */}
              <div className="w-full lg:w-80 lg:border-l dark:lg:border-gray-700 lg:border-t-0 border-t dark:border-t-gray-700 flex-shrink-0 max-h-[40vh] lg:max-h-none overflow-y-auto">
                <div className="p-3 sm:p-4 lg:p-6">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 sm:p-4">
                      <h3 className="font-semibold text-base sm:text-lg mb-2 text-black dark:text-white font-Ovo">
                        Certificate Details
                      </h3>
                      <div className="space-y-2 text-sm"> 
                        {selectedAchievement.more_description && (
                          <div>
                            <p className="text-gray-600 dark:text-gray-400">{selectedAchievement.more_description}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 sm:p-4">
                      <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Skills Gained</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        {selectedAchievement.skills_gained}
                      </p>
                    </div>

                    <button
                      onClick={onClose}
                      className="bg-gray-800 hover:bg-gray-900 dark:bg-darkHover dark:hover:bg-darkHover/80 
                      text-white px-4 sm:px-6 py-2 rounded-lg transition-colors font-medium w-full text-sm sm:text-base"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Pop_Up;