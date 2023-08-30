import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
    };

    return (
        <motion.div
            className="bg-gradient-to-t from-cyan-500 to-blue-500 text-white p-8 font-light  text-center relative"
            style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/close-up-various-pieces-iron-heating-inside-forge-furnace-burning-fire-with-steel-preparation-metal-processing_7502-9480.jpg?size=626&ext=jpg&ga=GA1.2.388493421.1693318435&semt=ais')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            id='products'
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
        >
            <h1 className="text-2xl text-red-700 font-bold pt-12 sm:text-5xl mb-8">
                OUR <span className='text-white'>PRODUCTS</span>
            </h1>
            <div className="mx-auto lg:pt-5">
                <p className="text-orange-400 text-center sm:text-lg lg:text-5xl lg:font-bold">
                    We manufacture more than <span className='text-white'>90%</span> of
                    mechanical spare parts required by any plant. Thousands of custom made
                    products like cylinders, bushes, screws, segments etc.
                </p>
                <p className="text-red-500 sm:text-lg lg:text-4xl lg:font-bold lg:pt-10">
                    For More Details on our Products,{' '}
                    <a href="/products" className='text-gray-400 hover:text-blue-500 underline'>
                        click here
                    </a>
                </p>
            </div>
        </motion.div>
    );
};

export default Products;
