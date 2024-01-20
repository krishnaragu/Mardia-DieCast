import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const QualityAssurance = () => {
    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
    };

    return (
        <motion.div
            id='quality'
            className='p-10 pt-16 lg:pb-0 bg-zinc-600 text-orange-500 relative'
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
        >
            <h1 className='text-2xl m-10 text-red-700 font-bold text-center lg:text-5xl'>
                <span className='text-white'>QUALITY CONTROL</span>
            </h1>
            <div className='lg:grid lg:grid-cols-2 lg:pt-10 '>
                <Image
                    src={'/assets/certificate.png'}
                    alt={'Certificate'}
                    width={347}
                    height={470}
                    className='sm:w-full w-full  sm:ml-0 sm:h-fit lg:h-[75%]'
                />
                <p className='text-left lg:text-orange-400 bg-gradient-radial from-zinc-900 rounded-xl tracking- md:bg-none font-extrabold text-2xl p-2 m-2 lg:text-5xl  lg:pt-4 lg:p-10'>
                    With regular quality check audits and a self-sufficient quality control team, at
                    Mardia Engineering, the quality of our products and service is maintained as per
                    the best international standards.
                </p>
            </div>
        </motion.div>
    );
};

export default QualityAssurance;
