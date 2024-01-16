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
            style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/tools-materials-sanitary-works_93675-131724.jpg?size=626&ext=jpg&ga=GA1.2.388493421.1693318435&semt=ais')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='bg-black bg-opacity-50'>
                <motion.h1
                    className='text-3xl pt-24 text-center p-4 text-red-700 font-bold lg:text-5xl'
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                >
                    <span className='text-white'>OUR INFRASTUCTURE</span>
                </motion.h1>
                <motion.ol
                    className='p-10 text-2xl list-disc lg:text-5xl bg-gradient-radial from-zinc-950 lg:pl-40 lg:pr-40 font-bold text-orange-400'
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                >
                    <li className='p-1'>Fully Equipped Foundry for Casting
                        CNC / VMC Machinery</li>
                    <li className='p-1'>In-house Set Up CMM Machine</li>
                    <li className='p-1'>Fully equipped In-House Testing
                        Area with the latest Instruments.</li>

                </motion.ol>
                <motion.div
                    className='p-10'
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                >
                    <figure className='grid lg:grid-cols-2 gap-20 p-6 justify-center items-center'>
                        <figure className=''>
                            <Image src={'/assets/infra/14.jpg'} alt='pic 5' className='rounded-xl p-1' width={1140} height={1080} />
                        </figure>
                        <figure className=''>
                            <Image src={'/assets/infra/10.jpg'} alt='pic 5' className='rounded-xl p-1' width={1140} height={1080} />
                        </figure>
                        <figure className=''>
                            <Image src={'/assets/infra/15.jpg'} alt='pic 5' className='rounded-xl p-1' width={1140} height={1080} />
                        </figure>
                        <figure className=''>
                            <Image src={'/assets/infra/16.jpg'} alt='pic 5' className='rounded-xl p-1' width={1140} height={1080} />
                        </figure>
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
                    <div className='lg:flex  justify-between items-center'>
                        <figure className='lg:flex justify-between items-center'>
                            <div className=' p-5'>
                                <Image src={'/assets/infra/6.png'} alt='pic 3' className='rounded-xl ' width={577} height={433} />
                            </div>
                            <figure className='md:w-[40%] p-5'>
                                <Image src={'/assets/infra/13.png'} alt='pic 4' className='rounded-xl' width={864} height={1152} />
                            </figure>
                        </figure>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default Infrastructure;
