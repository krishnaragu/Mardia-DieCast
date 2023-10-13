'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Infrastructure = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div
            id='infra'
        // style={{
        //     backgroundImage: `url('https://img.freepik.com/free-photo/tools-materials-sanitary-works_93675-131724.jpg?size=626&ext=jpg&ga=GA1.2.388493421.1693318435&semt=ais')`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        // }}
        >
            <div className=' bg-opacity-50'>
                <motion.h1
                    className='text-3xl pt-24 text-center p-4 text-red-700 font-bold lg:text-5xl'
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                >
                    <span className='text-white'>OUR INFRASTUCTURE</span>
                </motion.h1>
                <motion.p
                    className='p-10 text-center text-2xl lg:text-5xl bg-gradient-radial from-zinc-950 lg:pl-40 lg:pr-40 font-bold text-orange-400'
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                >
                    Fully Equipped Foundry for Casting
                    CNC / VMC Machinery Set Up
                    In-house CMM Machine
                    Fully equipped In-House Testing
                    Area with the latest Instruments.
                </motion.p>
                <motion.div
                    className='p-10'
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                >
                    <figure className='lg:grid xl:flex md:grid md:grid-cols-2 justify-between'>
                        <Image src={'/assets/infra/1.jpg'} alt='pic 1' className='p-10' width={921} height={693} />
                        <Image src={'/assets/infra/5.jpg'} alt='pic 2' className='p-10 lg:w-[50%]' width={444} height={733} />
                    </figure>
                    <figure className='lg:flex md:grid md:grid-cols-3 justify-between'>
                        <div className=''>
                            <Image src={'/assets/infra/3.jpg'} alt='pic 3' className='p-10 ' width={364} height={604} />
                        </div>
                        <div className='lg:pt-40'>
                            <Image src={'/assets/infra/4.jpg'} alt='pic 4' className='p-10' width={372} height={581} />
                        </div>
                        <figure className='lg:pt-80'>
                            <Image src={'/assets/infra/2.jpg'} alt='pic 5' className='p-10' width={327} height={537} />
                        </figure>
                    </figure>
                </motion.div>
            </div>
        </div>
    );
};

export default Infrastructure;
