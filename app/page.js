'use client'
import About from "@/components/About";
import Clientele from "@/components/Clientele";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import Infrastructure from "@/components/Infrastructure";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import QualityAssurance from "@/components/QualityAssurance";
import WhyChooseUs from "@/components/WhyChooseUs";
import React, { useState, useEffect } from 'react';
import './globals.css'


export default function Home() {

  const images = [
    '/sliderImages/image1.jpg',
    '/sliderImages/image2.jpg',
    '/sliderImages/image3.jpg',
    '/sliderImages/image4.jpg',
    // Add more image paths here as needed
  ];
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="scroll-smooth font-serif">
      <Introduction />
      <Navbar />
      {/* <ImageSlider images={images} /> */}
      <About />
      <Clientele />
      <Products />
      <QualityAssurance />
      <Infrastructure />
      <WhyChooseUs />
      <Contact />
      <Footer />
      {showScrollButton && (
        <button className="scroll-to-top animate-bounce" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  )
}
