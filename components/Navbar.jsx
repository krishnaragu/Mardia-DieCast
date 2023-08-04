'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll'; // Import the Link component

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className="fixed z-10 w-full flex justify-between pt-3 bg-black scroll-smooth">
            <div>
                <Link to="home" spy={true} smooth={true}>
                    <Image
                        width={150}
                        height={150}
                        className="w-[80%] pl-5 pb-2 sm:w-full"
                        src="/assets/me_logo.png"
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className="m-2  bg-black lg:hidden" onClick={handleNav}>
                {navOpen ? (
                    <AiOutlineClose size={35} color='#ffff' />
                ) : (
                    <AiOutlineMenu size={35} color='#ffff' />
                )}
            </div>
            {navOpen && (
                <div className="absolute  top-16 right-0 mt-2 w-full bg-black p-3 z-50 shadow-lg">
                    <ul className="flex flex-col space-y-2 ">
                        <li className='p-5' onClick={handleNav}>
                            <Link to="home" spy={true} smooth={true} className="text-white">Home</Link>
                        </li>
                        <li className='p-5' onClick={handleNav}>
                            <Link to="about" spy={true} smooth={true} className="text-white">About</Link>
                        </li>
                        <li className='p-5' onClick={handleNav}>
                            <Link to="clientele" spy={true} smooth={true} className="text-white">Clientele</Link>
                        </li>
                        <li className='p-5' onClick={handleNav}>
                            <Link to="products" spy={true} smooth={true} className="text-white">Products</Link>
                        </li>
                        <li className='p-5' onClick={handleNav}>
                            <Link to="quality" spy={true} smooth={true} className="text-white">Quality Assurance</Link>
                        </li>
                        <li className='p-5' onClick={handleNav}>
                            <Link to="infra" spy={true} smooth={true} className="text-white">Infrastructure</Link>
                        </li>
                        <li className='p-5' onClick={handleNav}>
                            <Link to="whyus" spy={true} smooth={true} className="text-white">Why us?</Link>
                        </li>

                        <li className='p-5' onClick={handleNav}>
                            <Link to="contact" spy={true} smooth={true} className="text-white">Contact</Link>
                        </li>
                    </ul>
                </div>
            )}
            <section id="links" className='hidden lg:block'>
                <ul className="flex">
                    <li className='p-5 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="home" spy={true} smooth={true} className="">Home</Link>
                    </li>
                    <li className='p-5  hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="about" spy={true} smooth={true} className="">About</Link>
                    </li>
                    <li className='p-5  hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="clientele" spy={true} smooth={true} className="">Clientele</Link>
                    </li>
                    <li className='p-5  hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="products" spy={true} smooth={true} className="">Products</Link>
                    </li>
                    <li className='p-5  hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="quality" spy={true} smooth={true} className="">Quality Assurance</Link>
                    </li>
                    <li className='p-5  hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="infra" spy={true} smooth={true} className="">Infrastructure</Link>
                    </li>
                    <li className='p-5  hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="whyus" spy={true} smooth={true} className="">Why us?</Link>
                    </li>

                    <li className='p-5  hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="contact" spy={true} smooth={true} className="">Contact</Link>
                    </li>
                </ul>
            </section>
        </nav>
    );
};

export default Navbar;
