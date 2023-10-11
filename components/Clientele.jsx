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
        "/clients/toyota logo.jpeg",
        "/clients/craftsman-logo.webp",
        "/clients/honda logo.jpeg",
        "/clients/Endurance logo.png",
        "/clients/Rico logo.jpg",
        "/clients/uno minda.png",
        "/clients/rockman logo.png",
        "/clients/scl logo.jpeg",
    ];

    return (
        <div id='clientele' className='relative pt-20 text-black'>
            <div className='flex flex-col items-center relative z-10'>
                <motion.h1
                    className='text-3xl m-10 text-red-700 font-bold lg:text-5xl'
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    OUR <span className='text-white'>CLIENTELE</span>
                </motion.h1>
                <motion.div
                    id="container"
                    className='md:grid grid-cols-2 gap-10'
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <motion.div
                        className="h-80 md:w-full ml-10 mr-10 m-2 carousel-vertical rounded-box"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        {clients.map((client) => (
                            <motion.div
                                className="carousel-item w-full h-full"
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
                        className='text-orange-400 p-5 pt-20 text-center text-xl lg:text-4xl'
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
