import { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/footer'; // 👈 Import Footer
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const renderSection = () => {
    switch (activeSection) {
      case 'hero': return <Hero />;
      case 'about': return <About />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <Navbar setActiveSection={setActiveSection} />
      <main className="flex-grow pt-20 px-4">
        {renderSection()}
      </main>
      <Footer /> {/* 👈 Footer placed at the bottom */}
    </div>
  );
}