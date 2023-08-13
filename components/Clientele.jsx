'use client'
import Image from 'next/image'
import React from 'react';
import { motion } from 'framer-motion';

const Clientele = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    const clients = ["Continental", "Yokohama", "Titan", "Federal Mogul", "Wipro", "BFW", "San Engineering",
        "Sundaram Clayton", "TVS Group", "Ashok Leyland", "Tata group", "Birla group", "BEML", "KCPLtd", "Honda Lt"]
    return (
        <div id='clientele' className='bg-black pt-20 text-white'>
            <div className='flex flex-col items-center'>
                <motion.h1
                    className='text-3xl m-10 text-red-700 font-bold lg:text-5xl'
                    variants={fadeInUp}
                >
                    OUR <span className='text-white'>CLIENTELE</span>
                </motion.h1>
                <motion.div
                    id="container"
                    variants={fadeInUp}
                >
                    <p className='text-orange-400 p-5 text-center text-xl lg:text-4xl'>
                        We supply spares and products to some of the world{"\'"}s largest companies.
                    </p>
                    <motion.ul
                        className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:p-10'
                        variants={fadeInUp}
                    >
                        {clients.map((client, index) => (
                            <motion.li
                                className='bg-red-800 m-4 p-6 hover:shadow-lg hover:scale-105 hover:cursor-pointer rounded-lg hover:shadow-zinc-600'
                                key={index}
                            >
                                <div className='text-xl text-white lg:text-3xl text-center'>
                                    {client}
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <p className='text-orange-400 p-5 lg:p-10 text-center text-xl lg:text-4xl'>
                        & many more engineering companies around the world.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default Clientele;
