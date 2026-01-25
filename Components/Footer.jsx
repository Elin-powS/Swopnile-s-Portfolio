import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6 "
          />
          sopnil493@gmail.com
        </div>
        <a
          target="_blank"
          href="https://www.facebook.com/acifulislamkhan.swopnile/"
          className="w-max flex items-center gap-2 mx-auto"
        >
          <Image
            src={isDarkMode ? assets.fb_icon_dark : assets.fb_icon}
            alt=""
            className="w-8"
          />
          Aciful Islam Khan
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/swopnile_khan/"
          className="w-max flex items-center gap-2 mx-auto"
        >
          <Image
            src={isDarkMode ? assets.instra_icon_dark : assets.instra_icon}
            alt=""
            className="w-6 dark:w-13"
          />
          Aciful Islam Khan
        </a>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Aciful Islam Khan. All rights reserve.</p>
        <ul className="md:flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aciful-islam-khan-swopnile-1b6462244/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/Elin-powS">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://leetcode.com/u/Elin_powS/">
              LeetCode
            </a>
          </li>
          <li>
            <a target="_blank" href="https://codeforces.com/profile/elin_pows/">
              Codeforces
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.kaggle.com/acifulsopnil">
              Kaggle
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
