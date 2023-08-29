import React from 'react';
const Products = () => {
    return (
        <div className=" bg-gradient-to-t from-cyan-500 to-blue-500  text-white  p-8  font-light hover: sm:p-16 text-center" id='products'>
            <h1 className="text-2xl text-red-700 font-bold pt-12 sm:text-5xl mb-8">OUR <span className='text-white'>PRODUCTS</span></h1>
            <div className="mx-auto lg:pt-5">
                <p className=" text-green-100  text-center sm:text-lg lg:text-5xl lg:font-bold ">
                    We manufacture more than <span className='text-white'>90%</span> of
                    mechanical spare parts required
                    by any plant.Thousands of custom made
                    products like cylinders, bushes,
                    screws, segments etc .
                </p>
                <p className=" text-red-500 sm:text-lg lg:text-4xl lg:font-bold lg:pt-10">
                    For More Details on our Products, <a href="/products" className=' text-black underline'>click here</a>
                </p>

            </div>

        </div >
    );
};

export default Products;
