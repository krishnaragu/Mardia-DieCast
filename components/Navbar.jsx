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
        <nav className="fixed z-10 w-full flex justify-between  bg-gray-700 scroll-smooth">
            <div className='p-2'>
                <Link to="home" spy={true} smooth={true}>
                    <Image
                        width={100}
                        height={100}
                        className="pl-2 w-full"
                        src="/assets/me_logo1.png"
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className="m-2  bg-gray-700 lg:hidden" onClick={handleNav}>
                {navOpen ? (
                    <AiOutlineClose size={35} color='#ffff' />
                ) : (
                    <AiOutlineMenu size={35} color='#ffff' />
                )}
            </div>
            {navOpen && (
                <div className="absolute top-11 right-0 mt-2 w-full bg-black p-3 z-50 shadow-lg">
                    <ul className="flex flex-col space-y-2 ">
                        <li className='p-5' >
                            <Link to="home" onClick={handleNav} spy={true} smooth={true} className="text-white">Home</Link>
                        </li>
                        <li className='p-5' >
                            <Link to="about" onClick={handleNav} spy={true} smooth={true} className="text-white">About</Link>
                        </li>
                        <li className='p-5' >
                            <Link to="clientele" onClick={handleNav} spy={true} smooth={true} className="text-white">Clientele</Link>
                        </li>
                        <li className='p-5' >
                            <Link to="products" onClick={handleNav} spy={true} smooth={true} className="text-white">Products</Link>
                        </li>
                        <li className='p-5' >
                            <Link to="quality" onClick={handleNav} spy={true} smooth={true} className="text-white">Quality Assurance</Link>
                        </li>
                        <li className='p-5' >
                            <Link to="infra" onClick={handleNav} spy={true} smooth={true} className="text-white">Infrastructure</Link>
                        </li>
                        <li className='p-5' >
                            <Link to="whyus" onClick={handleNav} spy={true} smooth={true} className="text-white">Why us?</Link>
                        </li>

                        <li className='p-5' >
                            <Link to="contact" onClick={handleNav}
                                spy={true} smooth={true} className="text-white">Contact</Link>
                        </li>
                    </ul>
                </div>
            )}
            <section id="links" className='hidden lg:block'>
                <ul className="flex">
                    <li className='p-6 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="home" spy={true} smooth={true} className="">Home</Link>
                    </li>
                    <li className='p-6  hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="about" spy={true} smooth={true} className="">About</Link>
                    </li>
                    <li className='p-6  hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="clientele" spy={true} smooth={true} className="">Clientele</Link>
                    </li>
                    <li className='p-6  hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="products" spy={true} smooth={true} className="">Products</Link>
                    </li>
                    <li className='p-6  hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="quality" spy={true} smooth={true} className="">Quality Assurance</Link>
                    </li>
                    <li className='p-6  hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="infra" spy={true} smooth={true} className="">Infrastructure</Link>
                    </li>
                    <li className='p-6  hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="whyus" spy={true} smooth={true} className="">Why us?</Link>
                    </li>

                    <li className='p-6  hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="contact" spy={true} smooth={true} className="">Contact</Link>
                    </li>
                </ul>
            </section>
        </nav>
    );
};

export default Navbar;
