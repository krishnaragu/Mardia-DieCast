'use client'
import React, { useState, useEffect } from 'react';
import Link, { Link as NextLink } from 'next/link';
import { useRouter } from 'next/navigation';
import { FaHome, FaUser, FaUsers, FaCogs, FaIndustry, FaQuestion, FaEnvelope } from 'react-icons/fa'; // Import icons from React Icons
import Image from 'next/image';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('');
    const router = useRouter();

    const handleNav = () => {
        setNavOpen(!navOpen);
    };

    useEffect(() => {
        setCurrentPage(router.pathname);
    }, [router.pathname]);

    return (
        <nav className=" lg:sticky md:flex md:justify-between top-0 z-50 w-full bg-gray-700 backdrop-filter backdrop-blur-[50px] bg-opacity-40 text-black scroll-smooth">
            <div className='p-2'>
                <Link href="/" className='flex md:flex-none md:justify-normal justify-center' passHref>
                    <Image
                        width={40}
                        height={40}
                        className="pl-2 w-fit cursor-pointer"
                        src="/assets/me-logo.png"
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className="lg:hidden p-5">
                <div className="flex justify-around p-2">
                    <Link href="/#home" passHref>
                        <span className={`icon-button ${currentPage === '/' ? 'highlighted' : ''}`}><FaHome color='white' /></span>
                    </Link>
                    <Link href="/about" passHref>
                        <span className={`icon-button ${currentPage === '/about' ? 'highlighted' : ''}`}><FaUser color='white' /></span>
                    </Link>
                    <Link href="/clientele" passHref>
                        <span className={`icon-button ${currentPage === '/clientele' ? 'highlighted' : ''}`}><FaUsers color='white' /></span>
                    </Link>
                    <Link href="/product" passHref>
                        <span className={`icon-button ${currentPage === '/products' ? 'highlighted' : ''}`}><FaCogs color='white' /></span>
                    </Link>
                    <Link href="/quality" passHref>
                        <span className={`icon-button ${currentPage === '/quality' ? 'highlighted' : ''}`}><FaIndustry color='white' /></span>
                    </Link>
                    <Link href="/whyus" passHref>
                        <span className={`icon-button ${currentPage === '/whyus' ? 'highlighted' : ''}`}><FaQuestion color='white' /></span>
                    </Link>
                    <Link href="/contact" passHref>
                        <span className={`icon-button ${currentPage === '/contact' ? 'highlighted' : ''}`}><FaEnvelope color='white' /></span>
                    </Link>
                </div>
            </div>
            <section id="links" className='hidden lg:block'>
                <ul className="flex">
                    <li className={`p-6 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl ${currentPage === '/' ? 'highlighted' : ''}`}>
                        <Link href="/#home" passHref>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className={`p-6 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl ${currentPage === '/about' ? 'highlighted' : ''}`}>
                        <Link href="/about" passHref>
                            <span>About</span>
                        </Link>
                    </li>
                    <li className={`p-6 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl ${currentPage === '/clientele' ? 'highlighted' : ''}`}>
                        <Link href="/clientele" passHref>
                            <span>Clientele</span>
                        </Link>
                    </li>
                    <li className={`p-6 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl ${currentPage === '/products' ? 'highlighted' : ''}`}>
                        <Link href="/product" passHref>
                            <span>Products</span>
                        </Link>
                    </li>
                    <li className={`p-6 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl ${currentPage === '/quality' ? 'highlighted' : ''}`}>
                        <Link href="/quality" passHref>
                            <span>Quality Assurance</span>
                        </Link>
                    </li>
                    <li className={`p-6 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl ${currentPage === '/whyus' ? 'highlighted' : ''}`}>
                        <Link href="/whyus" passHref>
                            <span>Why us?</span>
                        </Link>
                    </li>
                    <li className={`p-6 hover:bg-red-500 hover:cursor-pointer text-white hover:underline hover:rounded-xl ${currentPage === '/contact' ? 'highlighted' : ''}`}>
                        <Link href="/contact" passHref>
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    );
};

export default Navbar;
