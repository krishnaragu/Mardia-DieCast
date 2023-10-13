import ProductCatalog from '@/components/ProductCatalog'
import products from '../../components/data/products';
import Products from '@/components/Products'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <Products />
            <div className=" w-full h-full  scroll-smooth">
                <ProductCatalog products={products} />
            </div>
        </div>
    )
}

export default page