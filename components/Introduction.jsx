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
                className="absolute lg:left-36 top-16   lg:top-80 backdrop-filter backdrop-blur-3xl backdrop-opacity-50 rounded-2xl lg:pt-28 lg:p-8 font-bold  text-center"
            >
                <motion.div
                    variants={fadeIn}
                    className="lg:text-7xl text-2xl p-5 lg:p-0"
                >
                    <span className="text-red-700 p-2 tracking-widest">
                        MARDIA <span className="text-white">ENGINEERING</span>
                    </span>
                </motion.div>
                <motion.p
                    variants={fadeIn}
                    className="text-orange-500 lg:tracking-wide text-center text-xs sm:text-lg lg:text-4xl lg:font-bold lg:pt-5 lg:p-5"
                >
                    Your One-Stop Destination. <p className='pl-2 lg:pl-0'>For All Pressure Die Casting Machinery Spare Parts.</p>                 </motion.p>
            </motion.div>
        </>
    );
};

export default Introduction;
