'use client';
import React from 'react';

export default function Skills() {
  const skills = [
    { name: 'HTML5', src: 'html5/html5-original.svg' },
    { name: 'CSS3', src: 'css3/css3-original.svg' },
    { name: 'JavaScript', src: 'javascript/javascript-original.svg' },
    { name: 'React.js', src: 'react/react-original.svg' },
    { name: 'Next.js', src: 'nextjs/nextjs-original.svg', bg: true },
    { name: 'TailwindCSS', src: 'tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', src: 'nodejs/nodejs-original.svg' },
    { name: 'Express.js', src: 'express/express-original.svg', bg: true },
    { name: 'Git', src: 'git/git-original.svg' },
    { name: 'GitHub', src: 'github/github-original.svg', bg: true },
    { name: 'MySQL', src: 'mysql/mysql-original.svg' },
    { name: 'Python', src: 'python/python-original.svg' },
  ];

  return (
    <section
      id="skills"
      className="py-4 px-2 flex items-center justify-center  bg-gray-50 dark:bg-gray-900"
    >
      <div className="w-full max-w-5xl px-0 py-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-4">
            My Skills
          </h2>
        </div>

        {/* Two Rows Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {skills.map(skill => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.src}`}
                alt={skill.name}
                className={`w-12 h-12 mb-2 ${skill.bg ? 'bg-white rounded-full p-1' : ''}`}
              />
              <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
