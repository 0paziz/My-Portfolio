'use client'

import React from 'react'

export default function Education() {
  return (
    <>
      <section id='skills' className="lg:mt-0 py-4 px-2 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-5xl py-2">
          <div className='mb-4'>
             
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white">
              Education
            </h2>
          </div>

          <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm dark:shadow-md">
            <a href='https://www.isbatuniversity.ac.ug/'>
              <img
                src="https://images.seeklogo.com/logo-png/55/1/isbat-university-logo-png_seeklogo-550300.png"
                alt="University Logo"
                className="w-16 h-16 mr-4 rounded-full object-contain"
              />
            </a>
            <div className="flex-1">
               <a href='https://www.isbatuniversity.ac.ug/'><h3 className="text-lg font-bold text-black dark:text-white hover:text-blue-500 hover:dark:text-blue-300">ISBAT University</h3></a> 
              <p className="text-gray-900 dark:text-gray-300">Bachelor of Computer Science</p>
            </div>
            <div className="text-right ml-4">
              <p className="text-gray-700 dark:text-gray-400">2023 - 2026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
