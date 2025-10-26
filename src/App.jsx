import React from 'react';
import Hero3D from './components/Hero3D';
import AboutSection from './components/AboutSection';
import ProjectsGallery from './components/ProjectsGallery';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-purple-300 bg-clip-text text-lg font-semibold text-transparent">
            DN // Portfolio
          </a>
          <nav className="hidden gap-6 text-sm text-cyan-100/80 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero3D />
        <AboutSection />
        <ProjectsGallery />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
