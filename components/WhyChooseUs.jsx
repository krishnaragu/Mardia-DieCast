'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
    };

    return (
        <motion.div variants={slideInVariants} initial="hidden"
            animate="visible" className='bg-gradient-to-r from-gray-700 to-gray-900 pt-24 flex flex-col p-5 items-center text-white' id='whyus'>
            <h1 className='text-2xl font-bold lg:text-5xl text-red-700'>
                <span className='text-white'>WHY US?</span>
            </h1>

            <section id='iso' className=' grid md:grid-cols-2 justify-center p-10'>
                <div className='flex flex-col text-center items-center p-8'>
                    <Image src="/assets/why-choose-us/iso-0.png" alt='iso3' width={100} height={100} />
                    <div className='p-1 md:pl-40 md:pr-40 m-2'>ISO 9001 : 2015 certified company Speaks of the <span className='text-orange-500'>quality</span> we deliver</div>
                </div>
                <div className='flex flex-col text-center items-center p-8'>
                    <Image src="/assets/why-choose-us/iso-4.png" alt='iso-1' width={100} height={100} />
                    <div className='p-1 md:pl-40 md:pr-40 m-2'>Expertise & experience delivering the <span className='text-orange-500'>widest range</span> of engineering spares in the world!</div>
                </div>
                <div className='flex flex-col text-center items-center p-8'>
                    <Image src="/assets/why-choose-us/iso.png" alt='iso' width={100} height={100} />
                    <div className='p-1 md:pl-40 md:pr-40 m-2'>We <span className='text-orange-500'>customize</span> spares as per your specific requirements & achieve the functionality of a machinery</div>
                </div>
                <div className='flex flex-col text-center items-center p-8'>
                    <Image src="/assets/why-choose-us/iso-2.png" alt='iso-2' width={100} height={100} />
                    <div className='p-1 md:pl-40 md:pr-40 m-2'>Part of the fastest growing economies in the world ensures greater support in <span className='text-orange-500'>global trade</span></div>
                </div>
            </section>
        </motion.div>
    );
};

export default WhyChooseUs;
