import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-800 text-white py-20 px-10 text-center">
      <h1 className="text-4xl font-bold">Welcome to DING!</h1>
      <p className="mt-4 text-lg">Your one-stop destination for all shopping needs.</p>
      <button className="mt-6 bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 transition">
        Shop Now
      </button>
    </section>
  );
};

export default Hero;
