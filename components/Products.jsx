import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
    const slideInVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
    };

    return (
        <motion.div
            className=" text-white p-8 bg-zinc-800 bg-opacity-50 font-light  text-center relative"
            // style={{
            //     backgroundImage: `url('https://img.freepik.com/premium-photo/forge-workshop-table-smithy-manual-production-worker-bends-metal-rod-wrought-iron_572828-6299.jpg?size=626&ext=jpg&ga=GA1.1.388493421.1693318435&semt=ais')`,
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
            <div className="mx-auto lg:pt-5 bg-gradient-radial from-zinc-600 to-zinc-900 rounded-xl p-2">
                <p className="text-orange-500 lg:p-10  text-center sm:text-lg lg:text-6xl lg:font-bold">
                    We manufacture more than <span className=''>90% of
                        mechanical spare parts required by any plant.</span> Thousands of custom-made
                    products like cylinders, bushes, screws, segments, etc.
                </p>
                <p className="text-orange-500 sm:text-lg lg:text-4xl lg:font-bold lg:pt-10">
                    For More Details on our Products,{' '}
                    <a href="/products" className='text-white  hover:text-blue-500 underline'>
                        click here
                    </a>
                </p>
            </div>
        </motion.div>
    );
};

export default Products;
