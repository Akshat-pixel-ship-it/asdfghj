import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Golden Shapes */}
      <div className="absolute inset-0">
        {/* Large floating cube */}
        <div className="absolute top-20 left-20 w-32 h-32 golden-cube animate-float-slow">
          <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg shadow-2xl shadow-yellow-500/50 transform rotate-45 hover:rotate-12 transition-transform duration-1000"></div>
          <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-30 animate-pulse"></div>
        </div>

        {/* Medium sphere */}
        <div className="absolute top-1/4 right-20 w-24 h-24 golden-sphere animate-float-medium">
          <div className="w-full h-full bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 rounded-full shadow-2xl shadow-yellow-500/40 transform hover:scale-110 transition-transform duration-500"></div>
          <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-25 animate-ping"></div>
        </div>

        {/* Small diamond */}
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 golden-diamond animate-float-fast">
          <div className="w-full h-full bg-gradient-to-t from-yellow-500 to-yellow-300 transform rotate-45 shadow-xl shadow-yellow-500/30 hover:rotate-90 transition-transform duration-700"></div>
          <div className="absolute inset-0 bg-yellow-300 blur-md opacity-20 animate-pulse"></div>
        </div>

        {/* Large background sphere */}
        <div className="absolute bottom-20 right-1/4 w-40 h-40 golden-bg-sphere animate-float-slow">
          <div className="w-full h-full bg-gradient-radial from-yellow-400/20 via-yellow-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-tight animate-fade-in-up animate-delay-200">
          TRANSFORM
          <br />
          <span className="text-white">YOUR BODY</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-400">
          Unlock your potential with our premium weight loss and strength training programs designed by expert trainers
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animate-delay-600">
          <button className="group bg-gradient-to-r from-yellow-500 to-yellow-600 px-8 py-4 rounded-full text-black font-bold text-lg hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-yellow-500/30 flex items-center space-x-2 animate-slide-in-left animate-glow-loop">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="group flex items-center space-x-3 text-white hover:text-yellow-400 transition-colors duration-300">
            <div className="w-12 h-12 rounded-full border-2 border-yellow-500 flex items-center justify-center group-hover:bg-yellow-500/10 transition-all duration-300">
              <Play className="w-5 h-5 ml-1" />
            </div>
            <span className="font-semibold">Watch Success Stories</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto animate-fade-in-up animate-delay-800">
          {[
            { number: '500+', label: 'Members Transformed' },
            { number: '50+', label: 'Expert Trainers' },
            { number: '95%', label: 'Success Rate' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;