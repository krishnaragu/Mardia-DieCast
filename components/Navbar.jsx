'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className="fixed sm:relative z-10 sm:z-0 w-full flex justify-between p-6 bg-black md:justify-center sm:p-28">
            <div className="m-2">
                <Image
                    width={100}
                    height={100}
                    className="w-[50%] sm:pt-10 sm:w-full"
                    src="/../public/assets/me_logo.png"
                    alt="Logo"
                />
            </div>
            <div className="m-2  bg-black md:hidden" onClick={handleNav}>
                {navOpen ? (
                    <AiOutlineClose size={35} color="#fff" />
                ) : (
                    <AiOutlineMenu size={35} color="#fff" />
                )}
            </div>
            {navOpen && (
                <div className="absolute top-24 right-0 mt-2 w-full bg-black p-3 z-50 shadow-lg">

                    {/* Add your navigation links here */}
                    <ul className="flex flex-col space-y-2 ">
                        <li className='p-5' onClick={handleNav}>
                            <a href="#home" className="text-white">Home</a>
                        </li>
                        <li className='p-5' onClick={handleNav}>
                            <a href="#about" className="text-white">About</a>
                        </li>
                        <li className='p-5' onClick={handleNav}>
                            <a href="#clientele" className="text-white">Clientele</a>
                        </li>
                        <li className='p-5' onClick={handleNav}>
                            <a href="#quality" className="text-white">Quality Assurance</a>
                        </li>
                        <li className='p-5' onClick={handleNav}>
                            <a href="#products" className="text-white">Products</a>
                        </li>
                        <li className='p-5' onClick={handleNav}>
                            <a href="#contact" className="text-white">Contact</a>
                        </li>
                        {/* Add more navigation links as needed */}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
