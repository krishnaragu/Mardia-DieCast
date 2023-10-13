'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
    };

    return (
        <motion.div
            className=" text-white p-8 font-light  text-center relative"
            // style={{
            //     backgroundImage: `url('https://img.freepik.com/free-photo/close-up-various-pieces-iron-heating-inside-forge-furnace-burning-fire-with-steel-preparation-metal-processing_7502-9480.jpg?size=626&ext=jpg&ga=GA1.2.388493421.1693318435&semt=ais')`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            // }}
            id='products'
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
        >
            <h1 className="text-2xl text-red-700 font-bold pt-12 sm:text-5xl mb-8">
                <span className='text-white'>OUR PRODUCTS</span>
            </h1>
            <div className="mx-auto lg:pt-5">
                <p className="text-orange-500 lg:p-10 text-center sm:text-lg lg:text-6xl lg:font-bold">
                    We manufacture more than <span className='text-white'>90% of
                        mechanical spare parts required by any plant.</span> Thousands of custom-made
                    products like cylinders, bushes, screws, segments, etc.
                </p>

            </div>
        </motion.div>
    );
};

export default Products;
