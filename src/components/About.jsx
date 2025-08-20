'use client';
import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-gray-50 text-black dark:bg-gray-900 dark:text-gray-100 px-6 flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-blue-950 dark:text-blue-300 mb-8 text-center">
        About <span className="text-orange-500 dark:text-orange-400"> Me</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-7xl">
        {/* Left: Profile Image */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-end">
          <img
            src="/images/aziz1.png"
            alt="Profile"
            className="bg-gray-100 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-900 w-72 h-72 md:w-80 md:h-80 lg:w-80 lg:h-96 object-cover rounded-lg shadow-xl transition-transform duration-300"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-7/12 text-center md:text-left">
          <p className="text-gray-800 dark:text-gray-300 mb-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            Hey! I'm Abdiaziz Jama, a frontend developer passionate about building clean, responsive, and user-friendly websites. I hold a Bachelor’s degree in Computer Science, which laid the foundation for my skills in modern web development.
            <br /><br />
            I'm always open to exciting job opportunities where I can contribute, learn, and grow. If you have a role that matches my skills and experience, do not hesitate to reach out!
          </p>

          {/* Contact Info */}
          <div className="mb-8 space-y-2 text-gray-700 dark:text-gray-400">
            <p><strong>Email:</strong> itzabdiaziz@gmail.com</p>
            <p><strong>Phone:</strong> +256 707 838274</p>
            <p><strong>Location:</strong> Kampala, UG</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1MvNv5sq_rp4qkG3XSGoVDm5VZV0_a211/view"
              className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="border border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold py-2 px-6 rounded-lg hover:bg-indigo-100 dark:hover:bg-gray-800 text-center"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
