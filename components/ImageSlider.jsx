// components/ImageSlider.js
'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const sliderInterval = setInterval(goToNextSlide, 3000);

        return () => clearInterval(sliderInterval);
    }, []);

    return (
        <motion.div className="w-fit h-fit  pt-12 lg:pt-16 relative" id='slider'>
            {images.map((image, index) => (
                <Image
                    height={1080}
                    width={1920}
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={` object-cover w-full h-full  ${index === currentIndex ? 'block' : 'hidden'}`}
                />
            ))}
        </motion.div>
    );
};

export default ImageSlider;
