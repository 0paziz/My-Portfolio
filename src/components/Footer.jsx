'use client';
import React from 'react';

export default function Footer() {
  return (
    <section id="footer" className="bg-indigo-950 dark:bg-gray-950">
      <div className="pt-6 px-4 sm:px-10 md:px-32 lg:px-10s flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex-1 m-0 p-0">
          <h1 className="text-2xl text-gray-100 dark:text-white font-bold m-0">ABDIAZIZ JAMA</h1>
          <p className="text-gray-200 dark:text-gray-300 m-0">
            Thank you for exploring my personal portfolio website.
          </p>
          <p className="text-gray-200 dark:text-gray-300 py-5 max-w-80">
            Feel free to connect with me on social media. Keep building. Keep growing. Let's connect over socials!
          </p>
        </div>

        <div className="flex flex-1 justify-between lg:flex-row sm:flex-col flex-col md:flex-row gap-5">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white dark:text-white mb-4">
              Contact Information
            </h2>
            <ul className="space-y-2 text-gray-200 dark:text-gray-300">
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                itzabdiaziz@gmail.com
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +256 707 838274
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Kampala, UG
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white dark:text-white mb-4 md:text-center lg:text-left">
              My Socials
            </h2>
            <div id="socials" className="flex mb-5 md:justify-center lg:justify-start gap-3">
              <a
                href="https://github.com/0paziz"
                className="w-10 h-10 rounded-full bg-gray-400 dark:bg-gray-600 flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <img src="./images/socials/github-ico.png" alt="GitHub" className="w-5 h-5 hover:bg-blue-500 rounded-full" />
              </a>
              <a
                href="https://www.instagram.com/0paziz"
                className="w-10 h-10 rounded-full bg-gray-400 dark:bg-gray-600 flex items-center justify-center hover:bg-red-900 hover:shadow-lg transition-all duration-300"
              >
                <img src="./images/socials/insta-ico.png" alt="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdiaziz-jama-876b06256/"
                className="w-10 h-10 rounded-full bg-gray-400 dark:bg-gray-600 flex items-center justify-center hover:shadow-lg hover:bg-blue-500 transition-all duration-300"
              >
                <img src="./images/socials/linkedin-ico.png" alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-6 sm:px-10 md:px-16 lg:px-32 mt-0">
        <hr className="text-gray-600 dark:text-gray-500" />
        <h1 className="text-center text-gray-50 dark:text-gray-400  py-4 text-sm">
          ©Copyright 2025. @Abdiaziz Jama
        </h1>
      </div>
    </section>
  );
}
