import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Clientele = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const clients = [
        "/clients/Chamundi logo.png",
        "/clients/craftsman-logo.webp",
        "/clients/Endurance logo.png",
        "/clients/Rico logo.jpg",
        "/clients/rockman logo.png",
        "/clients/scl logo.jpeg",
        "/clients/uno minda.png"
    ];

    return (
        <div id='clientele' className='relative bg-black pt-20 text-black'>
            {/* <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('https://img.freepik.com/free-photo/close-up-metalworking-machine_176420-4718.jpg?size=626&ext=jpg&ga=GA1.1.388493421.1693318435&semt=ais')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(10px)', // Adding blur to the background image
                }}
            /> */}
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
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <motion.p
                        className='text-orange-400 p-5 text-center text-xl lg:text-4xl'
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        We supply spares and products to some of the world&apos;s largest companies.
                    </motion.p>
                    <motion.div
                        className=" h-96 ml-10 mr-10 m-2 carousel carousel-vertical rounded-box"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        {clients.map((client) => (
                            <motion.div
                                className="carousel-item w-fit h-full"
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
                        className='text-orange-400 p-5 lg:p-10 text-center text-xl lg:text-4xl'
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        & many more engineering companies around the world.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}

export default Clientele;
