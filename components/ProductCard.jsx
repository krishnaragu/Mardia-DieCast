'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const ProductCard = ({ product }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="product-card rounded-xl bg-gradient-to-t from-slate-300 to-blue-50 flex flex-col items-center">
            <div
                className="cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                onClick={toggleExpand}
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    width={1920}
                    height={1080}
                />
            </div>
            {expanded && (
                <div className="lightbox-overlay flex flex-col" onClick={toggleExpand}>
                    <div className="lightbox-content ">
                        <Image
                            src={product.image}
                            alt={product.name}
                            layout="responsive"
                            width={1920}
                            height={1080}
                        />
                        <h3 className="product-name text-xl text-center capitalize">{product.name}</h3>
                    </div>
                </div>
            )}
            <h3 className="product-name m-2 text-center  uppercase">{product.name}</h3>
        </div>
    );
};

export default ProductCard;
