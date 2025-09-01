import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;