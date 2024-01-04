'use client'

import React from 'react';
import { motion } from 'framer-motion'; // Importing motion from framer-motion.
import Image from 'next/image';

const Introduction = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <>
            {/* Background Image */}
            <Image
                src={'/hero-background.webp'}
                alt='background Image'
                height={333}
                width={500}
                id="home"
                className='w-full h-[25%] -z-10'
            />

            {/* Introduction Content */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="absolute  top-24 left-10 right-10 lg:top-80 backdrop-filter backdrop-blur-3xl backdrop-opacity-50 rounded-2xl lg:pt-28 lg:p-8 font-bold text-center"
            >
                {/* Company Name */}
                <motion.div variants={fadeIn} className="lg:text-8xl text-2xl p-5 lg:p-0">
                    <span className="text-white text-center font-bold  p-2 tracking-wide">
                        MARDIA ENGINEERING
                    </span>
                </motion.div>

                {/* Company Slogan */}
                <motion.p
                    variants={fadeIn}
                    className="text-orange-500 lg:tracking-wide text-center text-xs sm:text-lg lg:text-4xl lg:font-bold lg:pt-5 lg:p-5"
                >
                    Your One-Stop Destination.{' '}
                    <p className='pl-2 lg:pl-0'>
                        For All Pressure Die Casting Machinery Spare Parts.
                    </p>
                </motion.p>
            </motion.div>
        </>
    );
};

export default Introduction;
