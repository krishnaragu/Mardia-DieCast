import React from 'react';
import ProductCard from './ProductCard';

const ProductCatalog = ({ products }) => {
    return (
        <div className="product-catalog bg-gradient-radial grid p-2 lg:p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductCatalog;
