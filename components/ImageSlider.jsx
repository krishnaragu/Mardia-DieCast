// components/ImageSlider.js
'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

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
        <div className="w-full h-auto pt-24 relative" id='home'>
            {images.map((image, index) => (
                <Image
                    height={50}
                    width={100}
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={`object-contain w-full h-full ${index === currentIndex ? 'block' : 'hidden'}`}
                />
            ))}
        </div>
    );
};

export default ImageSlider;
