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
    // '/../public/sliderImages/image1.jpg',
    'https://drive.google.com/file/d/1L3BE3Ajg89D2X6t1nqMmJxOqrD9I5prh/view?usp=drive_link',
    // '/../public/sliderImages/image2.jpg',
    'https://drive.google.com/file/d/1l7t0XZu3jC8qCBsimjSGFKV38N0HAJt4/view?usp=drive_link',
    // '/../public/sliderImages/image3.jpg',
    'https://drive.google.com/file/d/1_OzgKC-NSiDSCacY5ft4T4sG9yPm_x97/view?usp=drive_link',
    // '/../public/sliderImages/image4.jpg',
    'https://drive.google.com/file/d/1KKUOfgO97om1U4XSEKVALiQ7fMiyRSiA/view?usp=drive_link'
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
