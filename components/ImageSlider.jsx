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
        <div className="w-full h-auto lg:h-[50%] pt-16 lg:pt-16 relative" id='home'>
            {images.map((image, index) => (
                <Image
                    height={591}
                    width={1351}
                    loading='eager'
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={` object-cover w-full h-full  ${index === currentIndex ? 'block' : 'hidden'}`}
                />
            ))}
        </div>
    );
};

export default ImageSlider;
