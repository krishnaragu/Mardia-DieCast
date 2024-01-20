import React from 'react';
import ProductCatalog from '../../components/ProductCatalog';
import products from '../../components/data/products';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
    // bg-stone-400 : 
    return (
        <div className=" w-full h-full bg-slate-400 scroll-smooth">
            <div className='w-full flex p-6 '>
                <Link href="../"><Image src={'/assets/icons/left-chevron.png'} alt='back arrow' height={50} width={50} /></Link>
            </div>
            <h1 className="text-3xl lg:text-5xl p-3 text-black  text-center font-semibold mb-4">Product Catalog</h1>
            <ProductCatalog products={products} />
        </div>
    );
};

export default Home;
