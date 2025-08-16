"use client"

import { useEffect, useState } from "react"
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setDarkMode(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  // Toggle theme + persist
  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-50 dark:bg-gray-900 shadow z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-xl text-blue-950 dark:text-white">
          Abdiaziz Jama
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#hero" className={ `  hover:text-blue-600 ${active === "home" ? 'text-blue-600 dark:text-blue-400 ':"dark:text-gray-50" }`} onClick={() => setActive("home")}>Home</a>
          <a href="#about" className={` hover:text-blue-600 ${active === "about" ? 'text-blue-600 dark:text-blue-400':"dark:text-gray-50" }`} onClick={() => setActive("about")}>About</a>
          <a href="#skills" className={` hover:text-blue-600 ${active === "skills" ? 'text-blue-600 dark:text-blue-400' :"dark:text-gray-50"}`} onClick={() => setActive("skills")}>Skills & Education</a>
          <a href="#projects" className={` hover:text-blue-600 ${active === "project" ? 'text-blue-600 dark:text-blue-400' :"dark:text-gray-50"}`} onClick={() => setActive("project")}>Projects</a>
          <a href="#contact" className={` hover:text-blue-600 ${active === "contct" ? 'text-blue-600 dark:text-blue-400' :"dark:text-gray-50"}`} onClick={() => setActive("contct")}>Contact</a>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="ml-4 hover:text-yellow-500 dark:hover:text-yellow-300">
            {darkMode ? <Sun className="w-5 h-5 text-gray-100" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme}>
            {darkMode ? <Sun className="w-6 h-6 text-gray-100" /> : <Moon className="w-6 h-6" />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6 dark:text-gray-50" /> : <Menu className="w-6 h-6 dark:text-gray-50" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-center">
          <a href="#hero" className={` block  hover:text-blue-600 ${active === "home" ? 'text-blue-600 dark:text-blue-400':"dark:text-gray-50" }`} onClick={() => { setActive("home"); setMenuOpen(false); }}>Home</a>
          <a href="#about" className={` block hover:text-blue-600 ${active === "about" ?'text-blue-600 dark:text-blue-400' :"dark:text-gray-50"}`} onClick={() => { setActive("about"); setMenuOpen(false); }}>About</a>
          <a href="#skills" className={` block hover:text-blue-600 ${active === "skills" ? 'text-blue-600 dark:text-blue-400' :"dark:text-gray-50"}`} onClick={() => { setActive("skills"); setMenuOpen(false); }}>Skills & Education</a>
          <a href="#projects" className={` block hover:text-blue-600 ${active === "project"? 'text-blue-600 dark:text-blue-400':"dark:text-gray-50"}`} onClick={() => { setActive("project"); setMenuOpen(false); }}>Projects</a>
          <a href="#contact" className={` block hover:text-blue-600 ${active === "contct" ?'text-blue-600 dark:text-blue-400':"dark:text-gray-50"}`} onClick={() => { setActive("contct"); setMenuOpen(false); }}>Contact</a>
        </div>
      )}
    </nav>
  )
}
