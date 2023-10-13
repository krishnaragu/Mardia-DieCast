'use client'
import About from "@/components/About";
import Clientele from "@/components/Clientele";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Infrastructure from "@/components/Infrastructure";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import QualityAssurance from "@/components/QualityAssurance";
import WhyChooseUs from "@/components/WhyChooseUs";
import React, { useState, useEffect } from 'react';
import './globals.css'


export default function Home() {
  return (
    <div className="scroll-smooth">
      <Introduction />
    </div>
  )
}
