import React from 'react';
import ProductCatalog from '../../components/ProductCatalog';
import products from '../../components/data/products'; // Create a file to store your product data


const Home = () => {
    return (
        <div className=" w-full h-full">
            <h1 className="text-3xl lg:text-5xl p-3  text-center font-semibold mb-4"><span className='text-red-700'>Product</span> Catalog</h1>
            <ProductCatalog products={products} />
        </div>
    );
};

export default Home;
