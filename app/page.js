// import Image from "next/image";
// import logo from '../public/me_logo.png';
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
export default function Home() {
  const images = [
    '/sliderImages/image1.jpg',
    '/sliderImages/image2.jpg',
    '/sliderImages/image3.jpg',
    '/sliderImages/image4.jpg',
    // Add more image paths here as needed
  ];
  return (
    <div className="scroll-smooth">
      <Navbar />
      <ImageSlider images={images} />
      <Introduction />
      <About />
      <Clientele />
      <Products />
      <QualityAssurance />
      <Infrastructure />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  )
}
