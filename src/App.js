import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import AttendCards from './AttendCards';
import Hero from './Hero';

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* Navbar */}
      {/*  Product*/}
      <Hero />

      <AttendCards />
      {/* The slideshow dogs */}
      <ImageSlider />
      <Footer />
    </div >
  );
}

export default App;
