import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const stagger = {
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="relative">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('https://img.freepik.com/free-photo/close-up-metalworking-machine_176420-4718.jpg?size=626&ext=jpg&ga=GA1.1.388493421.1693318435&semt=ais')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(10px)', // Adding blur to the background image
                }}
            />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="relative backdrop-filter backdrop-blur-3xl backdrop-opacity-10 text-white pt-24 p-8 font-light text-center"
                id="about"
            >
                <motion.h1 className="text-2xl text-red-700 font-bold sm:text-5xl mb-8" variants={fadeInUp}>
                    ABOUT <span className="text-white">US</span>
                </motion.h1>
                <motion.p
                    className="text-orange-400 tracking-wide p-4 bg-gradient-radial from-zinc-950 rounded-3xl text-center sm:text-lg lg:text-4xl lg:font-bold"
                    variants={fadeInUp}
                >
                    Mardia Group of Companies started its business five
                    decades ago with a non-ferrous foundry. Over the years,
                    it has established as one of the leading manufacturers of
                    spare parts in Pressure Die Casting
                    industry and Hydraulic Cylinders in India and across the
                    globe. We have a fully equipped in- house facility of
                    casting and machining to manufacture wide range of
                    spare parts for pressure die casting industries.
                    <span className='text-'> We specialize in Self Lubricating Bushes, Tie Bars and Nuts,
                        Toggle Pin, Extruder screw, Bronze Bushes, shot sleeve,
                        toggle mechanism, shoe plates, bed plates, repair and
                        new of fixed platen, moving platen and end platens .</span>
                    <motion.p
                        className="text-white  p-2 mt-3 sm:text-lg lg:text-3xl lg:font-bold"
                        variants={fadeInUp}>
                        90% of the M/s Zitai and M/s HMT machines, spare parts we have ready stock.
                    </motion.p>
                    <motion.p
                        className="text-orange-500 text-center tracking-wide mt-4 sm:text-lg lg:text-2xl lg:font-bold"
                        variants={fadeInUp}
                    >
                        To know more about On-Site Machining of the Platten, please <a href="/PMM" className=' text-blue-600 underline'>click here</a>
                    </motion.p>

                </motion.p>
                <figure className='flex justify-center '>
                    <Image src={"/assets/pmm/before-machining1.jpg"} width={300} height={300} alt='before-machining' className='rounded-xl ml-2 w-[35%] lg:w-fit hover:scale-105' />
                    <Image src={"/assets/pmm/after-machining.jpg"} width={300} height={300} alt='after-machining' className='rounded-xl ml-2 w-[35%] lg:w-fit hover:scale-105' />
                </figure>
                {/* <motion.p
                    className="text-orange-500 text-center tracking-wide mt-4 sm:text-lg lg:text-2xl lg:font-bold"
                    variants={fadeInUp}
                >
                    To know more about On-Site Machining of the Platten, please <a href="/PMM" className=' text-blue-600 underline'>click here</a>
                </motion.p> */}
                <div className="mx-auto lg:grid lg:grid-cols-2 lg:pt-5">
                    <motion.p
                        className="text-orange-500 bg-gradient-radial tracking-wide from-zinc-950 rounded-2xl p-1 sm:text-lg lg:text-4xl lg:font-bold lg:pt-24"
                        variants={fadeInUp}
                    >
                        With a rich experience of over
                        <span className="text-white"> 5 years</span> in the field.
                        A name synonymous with high quality & precision products
                        that cater to <span className="text-red-800"> Engineering Industry Spare Parts</span>
                    </motion.p>
                    <motion.div
                        className="flex justify-center"
                        variants={fadeInUp}
                    >
                        <Image src='/assets/whoweare.png' alt="Whoweare" height={500} width={500} />
                    </motion.div>

                </div>
            </motion.div>
        </div>
    );
};

export default About;