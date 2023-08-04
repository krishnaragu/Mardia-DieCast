'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-black text-white lg:pt-28 lg:p-8 top-20 font-bold  text-center"
            id="introduction"
        >
            <motion.div
                variants={fadeIn}
                className="lg:text-8xl text-2xl p-10 lg:p-0"
            >
                <span className="text-red-700">
                    MARDIA <span className="text-white">ENGINEERING</span>
                </span>
            </motion.div>
            <motion.p
                variants={fadeIn}
                className="text-orange-500 p-10 text-center sm:text-lg lg:text-4xl lg:font-bold lg:pt-5 lg:p-5"
            >
                Your One-Stop Destination for all Machinery Mechanical Spare Parts
            </motion.p>
        </motion.div>
    );
};

export default Introduction;
