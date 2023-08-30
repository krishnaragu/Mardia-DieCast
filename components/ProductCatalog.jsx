'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductCatalog = ({ products }) => {
    const stagger = {
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <div
            className="product-catalog-bg "
        // style={{
        //     backgroundImage: `url('https://img.freepik.com/free-photo/man-is-working-with-giant-drill-busy-metal-factory_613910-17166.jpg?size=626&ext=jpg&ga=GA1.1.388493421.1693318435&semt=ais')`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        // }}
        >
            <motion.div
                className="product-catalog text-black font-extrabold grid p-2 lg:p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                animate="visible"
                variants={stagger}
            >
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        className="flex justify-center"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ProductCatalog;
