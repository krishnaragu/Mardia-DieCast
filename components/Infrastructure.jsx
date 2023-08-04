'use client'

import Image from 'next/image'
import React from 'react';
import { motion } from 'framer-motion';

const Infrastructure = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className='bg-black' id='infra'>
            <motion.h1
                className='text-3xl text-center p-4 text-red-700 font-bold lg:text-5xl'
                variants={fadeInUp}
            >
                OUR <span className='text-white'>INFRASTUCTURE</span>
            </motion.h1>
            <motion.p
                className='p-10 text-center text-2xl lg:text-3xl lg:pl-40 lg:pr-40 font-bold text-orange-400'
                variants={fadeInUp}
            >
                Fully Equipped Foundry for Casting
                CNC / VMC Machinery Set Up
                In-house CMM Machine
                Fully equipped in-House Testing
                Area with latest Instruments.
            </motion.p>
            <motion.div
                className='p-10'
                variants={fadeInUp}
            >
                <figure className='lg:flex md:grid md:grid-cols-2 justify-between'>
                    <Image src={'/../public/assets/infra/1.jpg'} alt='pic 1' className='p-10' width={921} height={693} />
                    <Image src={'/../public/assets/infra/5.jpg'} alt='pic 2' className='p-10 lg:w-[50%]' width={444} height={733} />
                </figure>
                <figure className='lg:flex md:grid md:grid-cols-3 justify-between'>
                    <div className=''>
                        <Image src={'/../public/assets/infra/3.jpg'} alt='pic 3' className='p-10 ' width={364} height={604} />
                    </div>
                    <div className='lg:pt-40'>
                        <Image src={'/../public/assets/infra/4.jpg'} alt='pic 4' className='p-10' width={372} height={581} />
                    </div>
                    <figure className='lg:pt-80'>
                        <Image src={'/../public/assets/infra/2.jpg'} alt='pic 5' className='p-10' width={327} height={537} />
                    </figure>
                </figure>
            </motion.div>
        </div>
    );
}

export default Infrastructure;
