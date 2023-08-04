'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const About = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const stagger = {
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="bg-black text-white pt-16 p-8 font-light  text-center"
            id="about"
        >
            <motion.h1
                className="text-2xl text-red-700 font-bold sm:text-5xl mb-8"
                variants={fadeInUp}
            >
                ABOUT <span className="text-white">US</span>
            </motion.h1>
            <div className="mx-auto lg:grid lg:grid-cols-2 lg:pt-5">
                <motion.p
                    className="text-orange-500 p-1 pb-5 sm:text-lg lg:text-4xl lg:font-bold lg:pt-24"
                    variants={fadeInUp}
                >
                    With a rich experience of over
                    <span className="text-white"> 52 years</span> in the field
                    A name synonymous with high quality & precision products
                    that cater to <span className="text-white"> Engineering Industry Spare Parts</span>
                </motion.p>
                <motion.div
                    className="flex justify-center"
                    variants={fadeInUp}
                >
                    <Image src='/assets/whoweare.png' alt="Whoweare" height={500} width={500} />
                </motion.div>
            </div>
        </motion.div  >
    );
};

export default About;
