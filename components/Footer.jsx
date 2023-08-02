import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col items-center text-center p-2 bg-black text-white'>
            <figure className='w-fit h-auto  rounded-full  m-1 p-1'>
                <Image src="/../public/assets/me_logo.png" alt='footer' width={50} height={50} />
            </figure>
            <div id="socials" className='flex justify-evenly m-1 p-2'>
                <a href="https://www.facebook.com/" className='m-1 p-2'>
                    <Image src="/../public/assets/icons/facebook.png" alt='facebook' width={50} height={50} />
                </a>
                <a href="https://www.twitter.com/" className='m-1 p-2'>
                    <Image src="/../public/assets/icons/twitter.png" alt='twitter' width={50} height={50} />
                </a>
                <a href="https://plus.google.com/" className='m-1 p-2'>
                    <Image src="/../public/assets/icons/google-plus.png" alt='google-plus' width={50} height={50} />
                </a>
            </div>

            <p className=' font-mono'>“ THE LIGHT WITHIN US BOWS TO THE LIGHT WITHIN YOU. ”</p>
            <p className='text-sm'>©2017 MARDIA ENGINEERING. ALL RIGHTS RESERVED</p>
        </div>
    )
}

export default Footer