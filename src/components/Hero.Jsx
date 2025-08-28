import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 to-purple-700 text-white py-20 px-6 text-center">
      <h1 className="text-5xl font-extrabold mb-4">
        Cyrus: Architect of Digital Realms
      </h1>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        Crafting mythic-tech systems that move nations, ritualize machines, and awaken symbolic intelligence.
      </p>
      <a
        href="/projects"
        className="inline-block bg-white text-indigo-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-indigo-100 transition"
      >
        Explore My Creations
      </a>
    </section>
  );
};

export default Hero;