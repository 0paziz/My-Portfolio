"use client";
import React from "react";
import Typewriter from "./comp/Typewriter";
import { motion } from "framer-motion";
import { FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { Code2 } from "lucide-react";

export default function Hero() {
  return (
    <main id="hero"
      className="relative dark:bg-gray-950 bg-cover bg-center lg:min-h-screen   flex items-center justify-center text-white"
  
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-950 bg-opacity-60 z-0" />

      {/* Hero Content */}
      <section className="mt-16 lg:mt-0 relative z-10 px-6 py-10 max-w-6xl w-full flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h4 className="text-lg text-rose-500 dark:text-rose-400">Hey There</h4>
          <h1 className="text-5xl md:text-6xl font-bold text-orange-500 leading-tight dark:text-gray-50">
            I'm <span className="text-blue-950 dark:text-rose-500">Abdiaziz Jama</span>
          </h1>
          <p className="mt-4 text-xl font-medium text-gray-900 dark:text-gray-200">
            I am into <Typewriter />
          </p>

          <p className="mt-6 text-gray-900 dark:text-gray-400 leading-relaxed">
            Passionate developer focused on building fast, responsive, and
            engaging web experiences.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <a
              href="#about"
              className="bg-blue-500 dark:bg-rose-500 text-white px-6 py-3 rounded-full font-semibold  dark:hover:bg-rose-600 hover:bg-blue-600 transition-all duration-300 shadow-md"
            >
              About Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 dark:gap-1.5 mt-6 justify-center lg:justify-start ">
            <a href="https://github.com/0paziz" target="_blank">
              <img src="/images/socials/github-ico.png" alt="GitHub" className="w-8 bg-gray-900 rounded-xl p-1 dark:bg-gray-950  hover:bg-gray-500" />
            </a>
            <a href="https://www.instagram.com/0paziz" target="_blank">
              <img src="/images/socials/insta-ico.png" alt="Instagram" className="w-8 bg-gray-900 rounded-xl p-1 dark:bg-gray-950 hover:bg-gray-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdiaziz-jama-876b06256/"
              target="_blank"
            >
              <img src="/images/socials/linkedin-ico.png" alt="LinkedIn" className="w-8 bg-gray-900 rounded-xl p-1 dark:bg-gray-950 hover:bg-gray-500" />
            </a>
          </div>
        </div>

    
      <div className="hidden  w-full lg:w-1/2 lg:flex justify-center relative">

     <motion.img
        src="./images/v2.png"
        alt="Hero Visual"
        className="max-h-[500px] object-contain "
        animate={{ y: [0, -10, 0], rotate: [0, 1, -1, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      

      
        </div>
      </section>
    </main>
  );
}
