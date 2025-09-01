import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Lost 15kg in 4 months with GoldFit! The personalized nutrition plan and workout routine were exactly what I needed. The trainers are incredibly supportive and knowledgeable.',
      result: 'Lost 15kg in 4 months'
    },
    {
      name: 'Rahul Patel',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'As a busy entrepreneur, I thought I\'d never have time for fitness. GoldFit\'s flexible approach helped me build muscle and lose fat while managing my hectic schedule.',
      result: 'Gained 8kg muscle, lost 12kg fat'
    },
    {
      name: 'Anita Desai',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The transformation has been incredible! Not just physically, but mentally too. I feel more confident and energetic than ever. The community support is amazing.',
      result: 'Complete body transformation'
    },
    {
      name: 'Vikram Singh',
      role: 'Professional Athlete',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The Athlete Development Package took my performance to the next level. My strength increased by 40% and my endurance improved dramatically. Highly recommend!',
      result: '40% strength increase'
    },
    {
      name: 'Meera Joshi',
      role: 'Doctor',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Working long hours in the hospital, I needed a program that fit my irregular schedule. GoldFit delivered beyond expectations with flexible timing and excellent results.',
      result: 'Lost 18kg, improved health markers'
    },
    {
      name: 'Arjun Kumar',
      role: 'Student',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Started as a complete beginner and now I\'m deadlifting 180kg! The strength program is scientifically designed and the progression is perfectly planned.',
      result: 'Deadlifting 180kg from 60kg'
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-5 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-10 animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-5 w-24 h-24 border-2 border-yellow-500/20 rounded-lg transform rotate-45 animate-spin-slow"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">SUCCESS</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              STORIES
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real transformations from real people who trusted GoldFit with their fitness journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`group relative bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden animate-fade-in-up animate-delay-${(index + 1) * 100}`}
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Quote icon */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center opacity-20">
                  <Quote className="w-4 h-4 text-black" />
                </div>

                {/* Profile */}
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500/30 mr-4 group-hover:border-yellow-500/60 transition-all duration-500"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-500">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Result badge */}
                <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full px-4 py-2 border border-yellow-500/30">
                  <p className="text-yellow-400 font-semibold text-sm text-center">
                    {testimonial.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-yellow-500/20 animate-fade-in-up animate-delay-800">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Own Success Story?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied members who have transformed their lives with GoldFit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-8 py-4 rounded-full text-black font-bold text-lg hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/25 btn-glow">
              Start Free Trial
            </button>
            <button className="border-2 border-yellow-500 px-8 py-4 rounded-full text-yellow-500 font-bold text-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105">
              Book Consultation
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60 animate-fade-in-up animate-delay-1000">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-500">4.9/5</div>
            <div className="text-gray-400 text-sm">Average Rating</div>
          </div>
          <div className="w-px h-8 bg-gray-600"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-500">5000+</div>
            <div className="text-gray-400 text-sm">Happy Members</div>
          </div>
          <div className="w-px h-8 bg-gray-600"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-500">3 Years</div>
            <div className="text-gray-400 text-sm">Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;