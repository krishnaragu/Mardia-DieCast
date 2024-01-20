import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Clientele = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const clients = [
        // "/clients/Chamundi logo.png",
        "/clients/honda logo.jpeg",
        "/clients/craftsman-logo.webp",
        "/clients/Endurance logo.png",
        "/clients/Rico logo.jpg",
        "/clients/uno minda.png",
        "/clients/sunbeam logo.jpg",
        "/clients/rockman logo.png",
        "/clients/scl logo.jpeg",
        "/clients/toyota logo.jpeg",
    ];

    return (
        <div id='clientele' className='relative p-5 md:pt-20 md:pb-40 bg-zinc-600 text-black'>
            <div className='flex flex-col items-center relative z-10'>
                <motion.h1
                    className='text-3xl m-10 text-red-700 font-bold lg:text-5xl'
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <span className='text-white'>OUR CLIENTELE</span>
                </motion.h1>
                <motion.div
                    id="container"
                    className='md:grid grid-cols-2 gap-10'
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <motion.div
                        className="h-80 md:w-full  ml-10 mr-10 m-2 carousel-vertical rounded-box"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        {clients.map((client) => (
                            <motion.div
                                className="carousel-item bg-black w-fit sm:w-full h-full"
                                key={client}
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                            >
                                <Image src={client} height={1080} width={1920} alt={client} />
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.p
                        className='text-orange-400 p-5 pt-20 text-left text-xl lg:text-4xl'
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        We supply spares and products to some of the world&apos;s largest companies, and many more engineering companies around the world.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}

export default Clientele;
