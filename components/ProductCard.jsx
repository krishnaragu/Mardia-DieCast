'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const ProductCard = ({ product }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="product-card flex flex-col items-center">
            <div
                className="cursor-pointer"
                onClick={toggleExpand}
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    width={product.width}
                    height={product.height}
                />
            </div>
            {expanded && (
                <div className="lightbox-overlay flex flex-col" onClick={toggleExpand}>
                    <div className="lightbox-content ">
                        <Image
                            src={product.image}
                            alt={product.name}
                            layout="responsive"
                            width={product.width}
                            height={product.height}
                        />
                    </div>
                    <h3 className="product-name text-center">{product.name}</h3>
                </div>
            )}
            <h3 className="product-name m-2 text-center">{product.name}</h3>
        </div>
    );
};

export default ProductCard;
