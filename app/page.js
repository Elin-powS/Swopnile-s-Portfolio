"use client";
import About from "@/Components/About";
import Achievements from "@/Components/Achievements";
import Contact from "@/Components/Contact";
import Education from "@/Components/Education";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import Services from "@/Components/Experiences";
import Work from "@/Components/Work";
import { useState, useEffect, useCallback } from "react";


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    if(localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)){
      setIsDarkMode(true);
    }else{
      setIsDarkMode(false);
    }
  },[]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);


  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode} />
    <About isDarkMode={isDarkMode}/>
    <Education isDarkMode={isDarkMode}/>
    <Work isDarkMode={isDarkMode}/>
    <Achievements isDarkMode={isDarkMode} />
    <Services isDarkMode={isDarkMode}/>
    <Contact isDarkMode={isDarkMode}/>
    <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
