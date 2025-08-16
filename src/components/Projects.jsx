"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
    title: "HalLink – Link in Bio Platform",
    description:
      "A creator-focused platform with customizable profiles, analytics, and social media integrations.",
    image: "./images/projects/hallink.png",
    tags: ["React", "Firebase", "TailwindCSS"],
    link: "https://www.hallink.ink", 
   
  },
  {
    title: "E-Commerce Clothing Store",
    description:
      "A fully responsive online clothing store with modern UI, secure checkout, and product management.",
    image: "./images/projects/velv.png",
    tags: ["React", "TailwindCSS", "Node.Js"],
    link: "https://velvaire.vercel.app/", 
    github: "https://github.com/0paziz/Velvaire", 
  },
  {
    title: "List of JavaScript Projects",
    description:"A collection of all my JavaScript applications",
    image: "./images/projects/jspro.png",
    tags: ["React", "Node.js", "tailwind", "API"],
    link: "https://0paziz.github.io/javaScript-projects", 
    github:  "https://github.com/0paziz/javaScript-projects", 
  },

];

export default function WorkSection() {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-16" >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-blue-950 dark:text-white mb-4"
          >
            My Projects
          </motion.h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I’ve built recently. Click to view live demos or source code on GitHub.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                  <ExternalLink className="w-5 h-5 text-gray-800" />
                </a>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                  >
                    Live Demo
                  </a>

                  {/* Show GitHub button only if it exists */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                      <FaGithub className="w-4 h-4" />
                      View Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
