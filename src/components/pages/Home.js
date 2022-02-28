import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Features from '../Features';

function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Features/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
