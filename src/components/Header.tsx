import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20 animate-fade-in-up">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in-left">
            <div className="relative">
              <Dumbbell className="w-8 h-8 text-yellow-500" />
              <div className="absolute inset-0 bg-yellow-500 blur-lg opacity-30 animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              GoldFit
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-fade-in-right">
            <a href="#home" className="text-white hover:text-yellow-400 transition-colors duration-300">Home</a>
            <a href="#about" className="text-white hover:text-yellow-400 transition-colors duration-300">About</a>
            <a href="#courses" className="text-white hover:text-yellow-400 transition-colors duration-300">Courses</a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition-colors duration-300">Contact</a>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 py-2 rounded-full text-black font-semibold hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/25">
              Join Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-yellow-500/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-white hover:text-yellow-400 transition-colors duration-300">Home</a>
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors duration-300">About</a>
              <a href="#courses" className="text-white hover:text-yellow-400 transition-colors duration-300">Courses</a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition-colors duration-300">Contact</a>
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 py-2 rounded-full text-black font-semibold w-fit">
                Join Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;