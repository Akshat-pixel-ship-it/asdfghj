import React from 'react';
import { Target, Zap, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Personalized Programs',
      description: 'Customized workout and nutrition plans tailored to your specific goals and fitness level'
    },
    {
      icon: Zap,
      title: 'Fast Results',
      description: 'Proven methodologies that deliver visible results in just 4-6 weeks with consistent effort'
    },
    {
      icon: Award,
      title: 'Expert Trainers',
      description: 'Certified professionals with years of experience in weight loss and strength training'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a supportive community of like-minded individuals on their fitness journey'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg transform rotate-12 opacity-20 animate-spin-slow"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-yellow-500 rounded-full opacity-15 animate-bounce-slow"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              WHY CHOOSE
            </span>
            <br />
            <span className="text-white">GOLDFIT?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge fitness science with personalized coaching to help you achieve your dream physique faster than ever before.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up animate-delay-${(index + 1) * 100}`}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <div className="absolute inset-0 bg-yellow-500 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-3xl p-12 border border-yellow-500/20 animate-fade-in-up animate-delay-600">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in animate-delay-100">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">10,000+</div>
              <div className="text-gray-300">Calories Burned Daily</div>
            </div>
            <div className="animate-scale-in animate-delay-200">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">50kg+</div>
              <div className="text-gray-300">Average Weight Lost</div>
            </div>
            <div className="animate-scale-in animate-delay-300">
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">98%</div>
              <div className="text-gray-300">Member Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;