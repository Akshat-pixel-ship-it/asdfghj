import React from 'react';
import { Dumbbell, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900/90 backdrop-blur-sm py-16 border-t border-yellow-500/20 animate-fade-in-up">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="animate-fade-in-left animate-delay-100">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Dumbbell className="w-8 h-8 text-yellow-500" />
                <div className="absolute inset-0 bg-yellow-500 blur-lg opacity-30"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                GoldFit
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transform your body and mind with our premium fitness programs designed for lasting results.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook].map((Icon, index) => (
                <a 
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all duration-500 transform hover:scale-110 hover:rotate-12"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up animate-delay-200">
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Programs', 'Trainers', 'Success Stories', 'Blog', 'FAQ'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="animate-fade-in-up animate-delay-300">
            <h4 className="text-lg font-bold text-white mb-6">Programs</h4>
            <ul className="space-y-3">
              {['Weight Loss', 'Strength Training', 'Body Transformation', 'Nutrition Coaching', 'Personal Training'].map((program, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 hover:translate-x-2 transform inline-block">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-right animate-delay-400">
            <h4 className="text-lg font-bold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span>hello@goldfit.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span>Mumbai, India</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-xl border border-yellow-500/20">
              <p className="text-sm text-gray-300 mb-2">Ready to start?</p>
              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 py-2 rounded-lg text-black font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-12 animate-fade-in-up animate-delay-500">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2025 GoldFit. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 hover:translate-y-1 transform">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 hover:translate-y-1 transform">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 hover:translate-y-1 transform">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;