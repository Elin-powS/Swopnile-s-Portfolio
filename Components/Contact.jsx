import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3c2d4b02-9f4c-4e20-b9ab-c48fba156eab");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-30 min-lg:mt-20 min-lg:mb-45 
    bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-(length:auto_90%) dark:bg-none'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Contact With Me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center  text-5xl  font-Ovo"
      >
        Get In Touch
      </motion.h2>
      <motion.p
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.7 }} 
       className=" text-center max-w-2xl mx-auto mt-4 mb-7  font-Ovo">
        If you have any queries, suggestions, or would like to discuss potential
        collaborations, feel free to reach out. I’m always happy to connect and
        assist with any inquiries. Don’t hesitate to get in touch – I look
        forward to hearing from you!
      </motion.p>

      <motion.form 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }} 
        onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-8 mb-6">
          <motion.input
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }} 
            type="text"
            placeholder="Enter Your Name"
            required
            className="flex-1 p-3 outline-none border-[0.5px]
             border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="name"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }} 
            type="email"
            placeholder="Enter Your Mail"
            required
            className="flex-1 p-3 outline-none border-[0.5px]
             border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="email"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }} 
          rows="5"
          placeholder="Enter Your Massage"
          required
          className="w-full p-5  flex outline-none border-[0.5px]
             border-gray-400 rounded-md bg-white mb-8 dark:bg-darkHover/30 dark:border-white/90"
          name="message"
        ></motion.textarea>

        <motion.button
         whileHover={{scale:1.05}}
         transition={{ duration: 0.3}}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-baseline gap-2 bg-black/80 cursor-pointer  hover:-translate-y-1
        text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>

        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};
/**/

export default Contact;
