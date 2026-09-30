import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const MOBILE_COLLAPSED_HEIGHT = 360;
const READ_MORE_BUTTON_SPACE = 48;

const About = ({ isDarkMode }) => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [collapsedHeight, setCollapsedHeight] = useState(MOBILE_COLLAPSED_HEIGHT);
  const [isOverflowing, setIsOverflowing] = useState(true);

  // Collapse the text to the height of the photo (desktop) so "Read more"
  // appears exactly where the image ends.
  useEffect(() => {
    const measure = () => {
      const imageHeight = imageRef.current?.offsetHeight ?? 0;
      const isDesktop = window.innerWidth >= 1024;
      const height =
        isDesktop && imageHeight > 0
          ? Math.max(imageHeight - READ_MORE_BUTTON_SPACE, 200)
          : MOBILE_COLLAPSED_HEIGHT;
      setCollapsedHeight(height);
      setIsOverflowing((textRef.current?.scrollHeight ?? 0) > height + 8);
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 mt-25 scroll-mt-30"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:grid lg:grid-cols-2 lg:gap-20 my-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          ref={imageRef}
          className="w-full rounded-3xl max-w-none mb-6 lg:mb-0 lg:self-start mt-5"
        >
          <Image
            src={assets.user_image}
            alt="User"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <div className="mb-10 max-w-4xl font-Ovo text-left sm:text-justify">
            <div className="relative">
              <div
                ref={textRef}
                id="about-text"
                className="space-y-4 overflow-hidden transition-[max-height] duration-500"
                style={{
                  maxHeight:
                    expanded || !isOverflowing ? "none" : `${collapsedHeight}px`,
                }}
              >
            <p>
              I completed my undergraduate studies in Computer Science and
              Engineering at Khulna University of Engineering and Technology
              (KUET) in August 2025. I currently work full-time as a
              Software Engineer I (Forward Deployment) at Markopolo AI in
              Dhaka, where I work on building and deploying AI-driven software
              solutions for real-world business and customer-facing applications. My
              work involves developing machine learning and AI systems,
              AI-powered automation workflows, data-driven solutions, and intelligent
              software components, while working closely with real-world
              requirements to turn AI capabilities into practical and deployable
              products. I also work with data processing, automation pipelines, AI
              integrations, and reliable software systems built around modern AI
              technologies.
            </p>
            <p>
              Alongside my professional work, I am actively involved in AI
              education and training. I currently work as a Lead
              Instructor at UpSkill Consultancy, where I conduct two
              professional courses for learners in the United States: AI
              Automation &amp; Prompt Engineering and AI
              Engineering. My teaching focuses on practical, project-based
              learning, helping students understand and implement AI technologies beyond
              theoretical concepts. I guide learners through topics including machine
              learning, deep learning, LLM-based applications, AI automation, AI agents,
              APIs, RAG, vector databases, workflow automation, and practical AI
              engineering. I also support learners in developing real-world AI projects
              and integrating modern AI technologies into software and business
              workflows.
            </p>
            <p>
              Previously, I worked as a Software Engineer I (L2) at
              Ajentica, where I gained experience in software engineering and
              product development. Before that, I worked as an AI Engineer at
              SOFOF TECH, where I developed e-commerce AI and automation
              systems, including user activity tracking, behavioral scoring, audience
              segmentation, marketing automation, and voice-based customer engagement
              systems. I also worked as an AI/ML Engineer specializing in
              Computer Vision at Transforms AI, where I developed computer
              vision solutions for Hajj monitoring and car showroom intelligence,
              including object detection, CCTV analytics, VLM-based monitoring, person
              identification, interaction analysis, and automated scoring systems.
              Earlier, I worked as a Teaching Assistant at Ostad,
              supporting 14+ batches across AI Engineering, Machine
              Learning, AI Automation, and AI Automation for Non-Coders.
            </p>
            <p>
              My expertise spans Machine Learning, Deep Learning, Computer
              Vision, LLM-based applications, AI agents, AI automation, and data-driven
              software systems. Currently, I am exploring AI-DLC
              (AI-Driven Development Life Cycle) and Spec-Driven
              Development, with a particular interest in how AI can be
              integrated throughout the software development process to make engineering
              workflows faster, more systematic, reliable, and scalable.
            </p>
            <p>
              Outside of work, I enjoy football and cricket, along with
              music and playing the guitar. These interests help me
              stay creative, balanced, and motivated.
            </p>
              </div>
              {!expanded && isOverflowing && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-darkTheme"
                />
              )}
            </div>
            {isOverflowing && (
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                aria-controls="about-text"
                className="mt-3 text-sm font-medium underline underline-offset-4 cursor-pointer hover:text-darkHover dark:hover:text-purple-300"
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* New Div for Info List and Tools */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full my-8"
      >
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-full"
        >
          {infoList.map(
            (
              { icon, iconDark, title, description, more_description },
              index,
            ) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover
            hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 "
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
                <p className="text-gray-600 text-sm dark:text-white/80 mt-2">
                  {more_description}
                </p>
              </motion.li>
            ),
          )}
        </motion.ul>

        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="my-4 text-gray-700 font-Ovo dark:text-white/80"
        >
          Tools I Use
        </motion.h4>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="w-full flex flex-wrap items-center gap-3 sm:gap-5"
        >
          {toolsData.map((tool, index) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border
          border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 "
              key={index}
            >
              <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default About;
