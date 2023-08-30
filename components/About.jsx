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
                className="relative backdrop-filter backdrop-blur-3xl backdrop-opacity-50 text-white pt-24 p-8 font-light text-center"
                id="about"
            >
                <motion.h1 className="text-2xl text-red-700 font-bold sm:text-5xl mb-8" variants={fadeInUp}>
                    ABOUT <span className="text-white">US</span>
                </motion.h1>
                <motion.p
                    className="text-orange-500 p-4  text-center sm:text-lg lg:text-4xl lg:font-bold"
                    variants={fadeInUp}
                >
                    Mardia Group of Companies started its business five
                    decades ago with a non-ferrous foundry. Over the years,
                    it has established as one of the leading manufacturers of
                    spare parts in Pressure Die Casting
                    industry and Hydraulic Cylinders in India and across the
                    globe. We have a fully equipped in- house facility of
                    casting and machining to manufacture wide range of
                    spares for pressure die casting industries.
                    We specialize in Self Lubricating Bushes, Tie Bars and Nuts,
                    Toggle Pin, Extruder screw, Bronze Bushes, shot sleeve,
                    toggle mechanism, shoe plates, bed plates, repair and
                    new of fixed platen, moving platen and end platens .
                    <motion.p
                        className="text-white  p-2 sm:text-lg lg:text-3xl lg:font-bold"
                        variants={fadeInUp}>
                        90% of the M/s Zitai and M/s HMT machines, spare parts we have ready stock.
                    </motion.p>
                </motion.p>
                <motion.p
                    className="text-orange-500  pb-20 text-center sm:text-lg lg:text-4xl lg:font-bold"
                    variants={fadeInUp}
                >
                    To know more about Portable milling machine, please <a href="/PMM" className=' text-blue-600 underline'>click here</a>
                </motion.p>
                <div className="mx-auto lg:grid lg:grid-cols-2 lg:pt-5">
                    <motion.p
                        className="text-orange-500 p-1 pb-5 sm:text-lg lg:text-4xl lg:font-bold lg:pt-24"
                        variants={fadeInUp}
                    >
                        With a rich experience of over
                        <span className="text-white"> 52 years</span> in the field.
                        A name synonymous with high quality & precision products
                        that cater to <span className="text-white"> Engineering Industry Spare Parts</span>
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
