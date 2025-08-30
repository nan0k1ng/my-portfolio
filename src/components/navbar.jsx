import React from 'react';
import Logo from '../assets/Logo/T (1).png';

export default function Navbar({ setActiveSection }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white px-6 py-4 shadow-md z-50">
      <div className="navbar flex items-center justify-between gap-6">
        {/* Logo button on far left */}
        <button onClick={() => setActiveSection('hero')} className="logo-button">
          <img src={Logo} alt="Logo" className="logo-icon" />
        </button>

        {/* Navigation buttons aligned right */}
        <div className="flex gap-6 ml-auto">
          <button onClick={() => setActiveSection('hero')} className="text-sm font-medium hover:text-blue-600">Home</button>
          <button onClick={() => setActiveSection('about')} className="text-sm font-medium hover:text-blue-600">About</button>
          <button onClick={() => setActiveSection('projects')} className="text-sm font-medium hover:text-blue-600">Projects</button>
          <button onClick={() => setActiveSection('contact')} className="text-sm font-medium hover:text-blue-600">Contact</button>
        </div>
      </div>
    </nav>
  );
}