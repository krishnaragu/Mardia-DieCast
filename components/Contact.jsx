import Image from 'next/image';
import React from 'react';

const Contact = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-gray-500 via-slate-800 to-gray-400 flex flex-col p-4 pt-16 text-white' id='contact'>
                <div className='container m-auto sm:w-2/3 w-full'>
                    <h1 className='text-2xl font-bold m-3 text-center lg:text-5xl text-red-700'> <span className='text-white'>CONTACT US</span></h1>
                    <form className='flex flex-col' method='post' id='contact'>
                        <div id='detail-name' className='flex flex-col sm:flex-none sm:m-3'>
                            <label htmlFor="name" className='align-middle'>Name</label>
                            <input type="text" name="name" placeholder='Enter your name' className='text-black p-2 rounded-md' id="name" />
                        </div>
                        <div id='detail-email' className='flex flex-col sm:flex-none sm:m-3'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder='Enter your email' className='text-black p-2 rounded-md' id="email" />
                        </div>
                        <div id='Your message' className='flex flex-col sm:flex-none sm:m-3'>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" placeholder='Enter your message' className='text-black p-2 rounded-md' cols="20" rows="5"></textarea>
                        </div>
                        <div id='submit' className='bg-red-500 text-white w-32 m-auto text-center p-2 hover:shadow-lg hover:shadow-blue-300 rounded mt-4'>
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
                <br />
                <Image src={'/assets/midban.png'} alt={'Quality Assurance'} width={1920} height={500} />
            </div>
            <div id="google-maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.860855670388!2d77.552493!3d12.990058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc7513b43261668ff!2sMardia+Engineering!5e0!3m2!1sen!2sin!4v1499517519837" className='w-full h-auto border-0'></iframe>
            </div>
            <div className='bg-black flex flex-col sm:grid sm:grid-cols-3 p-4 -4 items-center text-white'>
                <div id="address" className='flex flex-col pt-4 sm:pt-24 lg:pt-16 text-center items-center'>
                    <figure className='bg-white border  rounded-full'>
                        <Image src="/assets/icons/earth-globe.png" alt='earth' width={50} height={50} />
                    </figure>
                    <h1 className=''>Visit Us</h1>
                    <div>
                        <a href='http://www.mardiaindia.com/'>http://www.mardiaengg.com</a>
                        <p className=''>Mardia Engineering, # 19/1, KSSIDC Industrial Estate, Rajajinagar, Bangalore- 560044.</p>
                        <p className='p-2'>Phone: +91-80-23509638 / 39</p>
                    </div>
                </div>
                <div id="mail" className='flex flex-col pt-4 text-center items-center'>
                    <figure className='bg-white border rounded-full'>
                        <Image src="/assets/icons/mail.png" className='p-1' alt='mail' width={50} height={50} />
                    </figure>
                    <h1 className='pt-2'>Mail Us</h1>
                    <p>ankit@mardiaindia.com</p>
                    <p>mardia@mardiaengg.com</p>
                </div>
                <div id="call" className='flex flex-col pt-4 text-center items-center'>
                    <figure className='bg-white border rounded-full'>
                        <Image src="/assets/icons/cell-phone.png" className='p-1' alt='phone' width={50} height={50} />
                    </figure>
                    <h1 className='pt-2'>Call Us</h1>
                    <p>Mobile: (+91) 9448497791</p>
                    <p>WhatsApp: (+91) 8792365305</p>
                </div>
            </div>
        </>
    );
};

export default Contact;
