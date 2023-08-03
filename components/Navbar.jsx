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
        <nav className="fixed z-10 w-full flex justify-between pt-3 bg-white scroll-smooth">
            <div>
                <a href="#">
                    <Image
                        width={150}
                        height={150}
                        className="w-[80%] pl-5 pb-2 sm:w-full"
                        src="/../public/assets/me_logo.png"
                        alt="Logo"
                    />
                </a>
            </div>
            <div className="m-2  bg-white lg:hidden" onClick={handleNav}>
                {navOpen ? (
                    <AiOutlineClose size={35} />
                ) : (
                    <AiOutlineMenu size={35} />
                )}
            </div>
            {navOpen && (
                <div className="absolute  top-24 right-0 mt-2 w-full bg-black p-3 z-50 shadow-lg">
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
                    </ul>
                </div>
            )}
            <section id="links" className='hidden lg:block'>
                <ul className="flex">
                    <li className='p-5 hover:bg-lime-300 hover:text-white hover:underline hover:rounded-xl'>
                        <a href="#home" className="">Home</a>
                    </li>
                    <li className='p-5  hover:bg-lime-300 hover:text-white hover:underline hover:rounded-xl'>
                        <a href="#about" className="">About</a>
                    </li>
                    <li className='p-5  hover:bg-lime-300 hover:text-white hover:underline hover:rounded-xl'>
                        <a href="#clientele" className="">Clientele</a>
                    </li>
                    <li className='p-5  hover:bg-lime-300 hover:text-white hover:underline hover:rounded-xl'>
                        <a href="#quality" className="">Quality Assurance</a>
                    </li>
                    <li className='p-5  hover:bg-lime-300 hover:text-white hover:underline hover:rounded-xl'>
                        <a href="#products" className="">Products</a>
                    </li>
                    <li className='p-5  hover:bg-lime-300 hover:text-white hover:underline hover:rounded-xl'>
                        <a href="#contact" className="">Contact</a>
                    </li>
                </ul>
            </section>
        </nav>
    );
};

export default Navbar;
