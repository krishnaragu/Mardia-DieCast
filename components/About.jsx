import React from 'react';
import whoweare from '../public/assets/whoweare.png';
import Image from 'next/image';
const About = () => {
    return (
        <div className="bg-black  text-white pt-16 p-8  font-light hover: sm:p-16 text-center" id='about'>
            <h1 className="text-2xl text-red-700 font-bold sm:text-5xl mb-8">ABOUT <span className='text-white'>US</span></h1>
            <div className="mx-auto lg:grid lg:grid-cols-2 lg:pt-5">
                <p className=" text-orange-500 p-1 pb-5 sm:text-lg lg:text-4xl lg:font-bold lg:pt-24">
                    With a rich experience of over
                    <span className=' text-white'> 52 years</span> in the field
                    A name synonymous to
                    high quality & precision products,
                    that cater to <span className='text-white'> Engineering Industry Spare Parts</span>
                </p>
                <div className='flex justify-center'>
                    <Image src={whoweare} alt='Whoweare' height={500} width={500} />
                </div>
            </div>

        </div>
    );
};

export default About;
