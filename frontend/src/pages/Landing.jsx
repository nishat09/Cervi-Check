import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from '@material-tailwind/react';
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.png";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const poster1 = document.getElementById('poster1');
      const poster2 = document.getElementById('poster2');
      const poster3 = document.getElementById('poster3');

      if (poster1) poster1.style.transform = `translateY(${scrollY * 0.2}px)`;
      if (poster2) poster2.style.transform = `translateY(${scrollY * 0.3}px)`;
      if (poster3) poster3.style.transform = `translateY(${scrollY * 0.4}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      {/* Carousel with Overlay */}
      <div className="relative">
        <Carousel transition={{ duration: 2 }} className="rounded-xl opacity-90">
          <img src={img1} alt="Image 1" className="h-96 w-full object-cover" />
          <img src={img2} alt="Image 2" className="h-96 w-full object-cover" />
          <img src={img3} alt="Image 3" className="h-96 w-full object-cover" />
        </Carousel>

        {/* Hero Section (Overlayed) */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center p-8 space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in-down text-white" style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Empowering Early Detection of Cervical Cancer
          </h1>
          <p className="max-w-2xl text-lg md:text-xl leading-relaxed animate-fade-in-down delay-100 text-white" style={{ lineHeight: '1.6', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
            CerviCheck is a research-driven tool designed to help women in underdeveloped regions access early screening through AI-powered visual analysis.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => navigate('/login')}
            className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-lg shadow-md hover:bg-indigo-50 transition transform hover:scale-105 animate-fade-in-up delay-200"
          >
            Begin Self Check
          </button>
        </div>
      </div>

      {/* Floating Posters Section */}
      <div className="relative py-16">
        {/* Floating Posters */}
        <div id="poster1" className="absolute top-10 left-10 opacity-90">
          {/* Replace the base64 with the actual internet URL for poster 1 */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB7nJLC_kTman9Ch2jXCkSheXQkRIjI_CQsw&s" alt="Cervical Cancer Awareness Poster 1" className="w-64 h-auto rounded-xl shadow-lg" style={{ transform: 'rotate(-5deg)' }} />
        </div>
        <div id="poster2" className="absolute top-24 right-20 opacity-90">
          {/* Replace the base64 with the actual internet URL for poster 2 */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZcfd5ljjTddbz265c7vCzZarxg-14PpQrcA&s" alt="Cervical Cancer Awareness Poster 2" className="w-72 h-auto rounded-xl shadow-lg" style={{ transform: 'rotate(3deg)' }} />
        </div>
        <div id="poster3" className="absolute bottom-10 left-40 opacity-90">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA9rpGDn4tuJZZL-wjhFh0vsAhIHMGFWP0hA&s" alt="Cervical Cancer Awareness Poster 3" className="w-60 h-auto rounded-xl shadow-lg" style={{ transform: 'rotate(-2deg)' }} />
        </div>
      </div>
      <div className="py-12 text-center text-gray-300 text-sm">
        <p>&copy; {new Date().getFullYear()} CerviCheck. All rights reserved.</p>
      </div>
    </div>
  );
};
export default Landing;