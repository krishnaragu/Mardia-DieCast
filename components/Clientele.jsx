'use client'
import Image from 'next/image'
import React from 'react';
import { motion } from 'framer-motion';
import ImageSlider from './ImageSlider';

const Clientele = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    // const clients = ["/assets/clients/Chamundi logo.png", "/assets/clients/craftsman-logo.webp", "/assets/clients/Endurance logo.png", "/assets/clients/Rico logo.jpg", "/assets/clients/rockman logo.png", "/assets/clients/scl logo.jpeg", "/assets/clients/uno minda.png"]
    const clients = ["/clients/Chamundi logo.png", "/clients/craftsman-logo.webp", "/clients/Endurance logo.png", "/clients/Rico logo.jpg", "/clients/rockman logo.png", "/clients/scl logo.jpeg", "/clients/uno minda.png"]
    return (
        <div id='clientele' className=' bg-black pt-20 text-black'>

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
                    {/* <motion.ul
                        className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:p-10'
                        variants={fadeInUp}
                    >
                        {clients.map((client, index) => (
                            <motion.li
                                className='bg-black m-4 p-6 hover:shadow-lg hover:scale-105 hover:cursor-pointer rounded-lg hover:shadow-zinc-600'
                                key={index}
                            >
                                <Image src={client} alt='Clientele' width={1920} height={1080} className='text-xl w-full text-white lg:text-3xl text-center'>
                                </Image>
                            </motion.li>
                        ))}
                    </motion.ul> */}
                    {/* <ImageSlider images={clients} /> */}
                    <motion.div className="h-96 carousel carousel-vertical rounded-box">
                        {clients.map((client) => (
                            <div className="carousel-item w-fit h-full" key={client}>
                                <Image src={client} height={1080} width={1920} alt={client} />
                            </div>
                        ))}
                    </motion.div>
                    <p className='text-orange-400 p-5 lg:p-10 text-center text-xl lg:text-4xl'>
                        & many more engineering companies around the world.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default Clientele;
