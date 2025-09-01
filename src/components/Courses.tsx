import React from 'react';
import { Check, Star, Clock, Users, Video, Target, Zap } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'Lifestyle Performance Package',
      subtitle: 'For fat loss, muscle gain, and general fitness',
      price: '₹9,999',
      originalPrice: '₹14,999',
      duration: 'Monthly',
      students: '2,500+',
      rating: 4.9,
      features: [
        'Personalized 3–5 day training plan',
        'Nutrition guidance (calorie/macro targets + sample meal guides)',
        'Bi-weekly check-ins via messaging/email',
        'Progress tracking (measurements & photos every 4 weeks)',
        'Exercise demo library access',
        '2 monthly video calls'
      ],
      badge: 'Most Popular',
      gradient: 'from-red-500 to-orange-500',
      icon: Target
    },
    {
      title: 'Athlete Development Package',
      subtitle: 'For competitive athletes: strength, speed, endurance, and sport-specific training',
      price: '₹14,999',
      originalPrice: '₹19,999',
      duration: 'Monthly',
      students: '1,200+',
      rating: 4.8,
      features: [
        'Sport-specific strength & conditioning program (updated every 4 weeks)',
        'Speed, agility & plyometric drills',
        'Conditioning tailored to sport',
        'Recovery & mobility programming',
        'Weekly video performance review & feedback',
        'Performance testing every 12 weeks'
      ],
      badge: 'Pro Athletes',
      gradient: 'from-blue-500 to-purple-500',
      icon: Zap
    },
    {
      title: 'Strength & Power Package',
      subtitle: 'For powerlifters & strength/hypertrophy-focused lifters',
      price: '₹11,999',
      originalPrice: '₹16,999',
      duration: 'Monthly',
      students: '1,800+',
      rating: 4.9,
      features: [
        'Periodized training program (strength, hypertrophy, peaking phases)',
        'Squat/bench/deadlift technique breakdown (video analysis 2x/month)',
        'Accessory lift programming for weak points',
        'Competition prep strategy (if competing)',
        'Recovery protocols for strength athletes',
        'Optional nutrition coaching'
      ],
      badge: 'Strength Focus',
      gradient: 'from-yellow-500 to-yellow-600',
      icon: Video
    }
  ];

  return (
    <section id="courses" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 border-4 border-yellow-500/20 rounded-lg transform rotate-45 animate-spin-slow"></div>
      
      {/* Additional 3D shapes */}
      <div className="absolute top-1/3 right-1/4 w-20 h-20 golden-cube animate-float-medium">
        <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg shadow-2xl shadow-yellow-500/40 transform rotate-12"></div>
        <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">PREMIUM</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              PACKAGES
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our scientifically-designed programs that have helped thousands achieve their fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <div 
              key={index}
              className={`group relative bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden animate-fade-in-up animate-delay-${(index + 2) * 100}`}
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 bg-gradient-to-r ${course.gradient} px-3 py-1 rounded-full text-xs font-bold text-white`}>
                {course.badge}
              </div>

              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="mb-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500 animate-pulse">
                    <course.icon className="w-8 h-8 text-black" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-500">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{course.subtitle}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-6">
                    <span className="text-4xl font-bold text-yellow-500">{course.price}</span>
                    <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                    <span className="text-sm text-gray-400">/ month</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3 text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-black" />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 py-4 rounded-full text-black font-bold text-lg hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-500 shadow-lg shadow-yellow-500/25 btn-glow group-hover:animate-pulse">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 animate-fade-in-up animate-delay-800">
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">30-Day Money Back Guarantee</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're so confident in our programs that if you don't see results in 30 days, we'll refund your entire investment.
          </p>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 text-center transform hover:scale-105 transition-all duration-500 animate-fade-in-left animate-delay-900">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-black" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Personalized Approach</h4>
            <p className="text-gray-400 text-sm">Every program is tailored to your specific goals, fitness level, and lifestyle</p>
          </div>
          
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 text-center transform hover:scale-105 transition-all duration-500 animate-fade-in-up animate-delay-1000">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-6 h-6 text-black" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Expert Guidance</h4>
            <p className="text-gray-400 text-sm">Regular video calls and form checks with certified trainers</p>
          </div>
          
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 text-center transform hover:scale-105 transition-all duration-500 animate-fade-in-right animate-delay-1100">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Proven Results</h4>
            <p className="text-gray-400 text-sm">Science-backed methodologies with measurable progress tracking</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;