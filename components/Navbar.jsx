import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
    // Define a state variable for handling the navigation menu state
    const [navOpen, setNavOpen] = useState(false);

    // Toggle the navigation menu state
    const handleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className="fixed lg:sticky top-0 z-50 w-full flex justify-between bg-gray-700 backdrop-filter backdrop-blur-[50px] bg-opacity-40 text-black scroll-smooth">
            <div className='p-2'>
                <Link to="home" spy={true} smooth={true}>
                    <Image
                        width={40}
                        height={40}
                        className="pl-2 w-full cursor-pointer"
                        src="/assets/me-logo.png"
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className="m-5 lg:hidden" onClick={handleNav}>
                {navOpen ? (
                    <AiOutlineClose size={35} color='#ffff' />
                ) : (
                    <AiOutlineMenu size={35} color='#ffff' />
                )}
            </div>
            {navOpen && (
                <div className="absolute top-16 right-0 mt-2 w-full bg-gradient-to-b from-slate-200 to-gray-400 text-black backdrop-filter backdrop-opacity-50 p-3 z-50 shadow-lg">
                    <ul className="flex flex-col space-y-2">
                        <li className='p-5' >
                            <Link to="home" onClick={handleNav} spy={true} smooth={true} className="text-black">Home</Link>
                        </li>
                        <li className='p-5' >
                            <Link to="about" onClick={handleNav} spy={true} smooth={true} className="text-black">About</Link>
                        </li>
                        <li className='p-5' >
                            <Link to="clientele" onClick={handleNav} spy={true} smooth={true} className="text-black">Clientele</Link>
                        </li>
                        <li className='p-5' >
                            <Link to="products" onClick={handleNav} spy={true} smooth={true} className="text-black">Products</Link>
                        </li>
                        <li className='p-5' >
                            <Link to="quality" onClick={handleNav} spy={true} smooth={true} className="text-black">Quality Assurance</Link>
                        </li>
                        <li className='p-5' >
                            <Link to="infra" onClick={handleNav} spy={true} smooth={true} className="text-black">Infrastructure</Link>
                        </li>
                        <li className='p-5' >
                            <Link to="whyus" onClick={handleNav} spy={true} smooth={true} className="text-black">Why us?</Link>
                        </li>
                        <li className='p-5' >
                            <Link to="contact" onClick={handleNav} spy={true} smooth={true} className="text-black">Contact</Link>
                        </li>
                    </ul>
                </div>
            )}
            <section id="links" className='hidden lg:block'>
                <ul className="flex">
                    <li className='p-6 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="home" spy={true} smooth={true} className="">Home</Link>
                    </li>
                    <li className='p-6 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="about" spy={true} smooth={true} className="">About</Link>
                    </li>
                    <li className='p-6 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="clientele" spy={true} smooth={true} className="">Clientele</Link>
                    </li>
                    <li className='p-6 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="products" spy={true} smooth={true} className="">Products</Link>
                    </li>
                    <li className='p-6 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="quality" spy={true} smooth={true} className="">Quality Assurance</Link>
                    </li>
                    <li className='p-6 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="infra" spy={true} smooth={true} className="">Infrastructure</Link>
                    </li>
                    <li className='p-6 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="whyus" spy={true} smooth={true} className="">Why us?</Link>
                    </li>
                    <li className='p-6 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl'>
                        <Link to="contact" spy={true} smooth={true} className="">Contact</Link>
                    </li>
                </ul>
            </section>
        </nav >
    );
};

export default Navbar;
