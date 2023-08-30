'use client'
import React from 'react';
import { invariant, motion } from 'framer-motion';
import Image from 'next/image';

const Introduction = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <>
            <Image src={'/hero-background.webp'}
                alt='background Image'
                height={333}
                width={500}
                id="home"
                className='w-full h-[25%] -z-10' />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="absolute right-10 top-20   lg:top-80 backdrop-filter backdrop-blur-3xl backdrop-opacity-50 rounded-2xl lg:pt-28 lg:p-8 font-bold  text-center"
            >
                <motion.div
                    variants={fadeIn}
                    className="lg:text-7xl text-2xl p-10 lg:p-0"
                >
                    <span className="text-red-700 p-0 tracking-widest font-serif">
                        MARDIA <span className="text-white  font-mono">ENGINEERING</span>
                    </span>
                </motion.div>
                <motion.p
                    variants={fadeIn}
                    className="text-orange-500 tracking-wide p-2 text-center sm:text-lg lg:text-4xl lg:font-bold lg:pt-5 lg:p-5"
                >
                    Your One-Stop Destination for all Machinery Mechanical Spare Parts
                </motion.p>
            </motion.div>
        </>
    );
};

export default Introduction;
