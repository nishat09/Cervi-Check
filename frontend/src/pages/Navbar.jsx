import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full z-30 top-0 left-0 py-4 px-8 bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">CerviCheck</div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => navigate("/home")} className="hover:bg-indigo-100 px-4 py-2 rounded-lg">Home</button>
          <button onClick={() => navigate("/about")} className="hover:bg-indigo-100 px-4 py-2 rounded-lg">About</button>
          <button onClick={() => navigate("/services")} className="hover:bg-indigo-100 px-4 py-2 rounded-lg">Services</button>
          <button onClick={() => navigate("/contact")} className="hover:bg-indigo-100 px-4 py-2 rounded-lg">Contact</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
