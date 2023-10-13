import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col items-center text-center p-2  text-white'>
            <figure className='w-fit h-auto rounded-full m-1 p-1'>
                <Image src="/assets/me-logo.png" alt='footer' width={50} height={50} />
            </figure>
            {/* Uncomment and update the social media links if needed */}
            {/* <div id="socials" className='flex justify-evenly m-1 p-2'>
                <a href="https://www.facebook.com/" className='m-1 p-2'>
                    <Image src="/assets/icons/facebook.png" alt='facebook' width={50} height={50} />
                </a>
                <a href="https://www.twitter.com/" className='m-1 p-2'>
                    <Image src="/assets/icons/twitter.png" alt='twitter' width={50} height={50} />
                </a>
                <a href="https://plus.google.com/" className='m-1 p-2'>
                    <Image src="/assets/icons/google-plus.png" alt='google-plus' width={50} height={50} />
                </a>
            </div> */}

            <p className=''>“ THE LIGHT WITHIN US BOWS TO THE LIGHT WITHIN YOU. ”</p>
            <p className='text-sm'>©2023 MARDIA ENGINEERING. ALL RIGHTS RESERVED</p>
        </div>
    );
};

export default Footer;
