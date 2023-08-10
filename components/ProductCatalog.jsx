import React from 'react';
import ProductCard from './ProductCard';

const ProductCatalog = ({ products }) => {
    return (
        <div className="product-catalog grid p-2 lg:p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductCatalog;
