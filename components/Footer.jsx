import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col items-center text-center p-2 bg-black text-white'>
            <figure className='w-fit h-auto rounded-full m-1 p-1'>
                <Image src="/assets/me-logo.png" alt='footer' width={50} height={50} />
            </figure>
            <p className=''>“ THE LIGHT WITHIN US BOWS TO THE LIGHT WITHIN YOU. ”</p>
            <p className='text-sm'>© {new Date().getFullYear()} MARDIA ENGINEERING. ALL RIGHTS RESERVED</p>
        </div>
    );
};

export default Footer;
