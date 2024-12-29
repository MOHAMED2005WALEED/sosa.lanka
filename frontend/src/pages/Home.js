// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to සෝස ලංකා
      </h1>
      <div className="text-center">
        <Link
          to="/shop"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Home;