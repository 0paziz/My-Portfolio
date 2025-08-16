
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Education from '../components/Education';

import "./globals.css";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
 
        <Hero />
        <About />
        <Education />
        <Skills />

        <Projects />

        <Contact />
        <Footer/>
 
    </div>
  );
}
