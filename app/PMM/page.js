import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <div className='bg-cover bg-center' >
            <div className='w-full flex'>
                <Link href="../" className='p-4 w-fit'>
                    <Image src={'/assets/icons/left-chevron.png'} alt='back arrow' height={50} width={50} />
                </Link>
            </div>
            <h1 className="text-4xl lg:text-5xl text-white font-bold mb-4 text-center mt-3 tracking-wider  "><span className='text-red-600'>Portable Milling Machine</span> (PMM)</h1>
            <div className="container mx-auto p-4 bg-gradient-to-t from-slate-300 to-blue-50 rounded-xl">
                <p className="p-4   rounded-xl text-black md:font-extrabold mt-9 text-3xl">
                    In Pressure Die Casting machine and Plastic Injection Molding machine, there are fixed platen and moving
                    platen which over a period of time surface gets damaged and dents are formed. So, this <span className='text-red-600'>Portable Milling
                        Machine(PMM)</span>, will be fixed on the die casting machine and it will machine the platen at the client{"'"}s site.
                    Without dismantling the platen within 48 hours the job gets completed.
                </p>
                <ul className="list-disc list-in mt-10 leading-10 text-black rounded-xl p-10 font-extrabold text-2xl lg:text-3xl">
                    <li>Machining can be done at your site.</li>
                    <li>Requires none or minimal dismantling of large equipment{"’"}s.</li>
                    <li>Eliminates the need for transport, hence saves on time and costs.</li>
                    <li>Overall time and cost reduced, without compromising on quality.</li>
                    <li>The Geometrical accuracy is within + or - 0.15 mm.</li>
                    <li>It can remove all kinds of dents on the surface of fixed platen and moving platen.</li>
                    <li>Repair activity we can do it within 48 hours on a single platen.</li>
                    <li>T-slot repairing can be taken up, if required addition to slot{"’"}s also can be made.</li>
                    <li>We can do this job up to 1700-ton machine.</li>
                    <li>Fixing of false or sub plate can be done on site.</li>
                </ul>
                <figure className='flex text-black  justify-around mb-4'>
                    <div>
                        <Image src={"/assets/pmm/prototype-machine1.jpg"} width={642} height={666} alt='prototype-machine1' className='rounded-xl hover:scale-105' />
                        <p className='text-2xl p-3 text-center '>Prototype Machine</p>
                    </div>
                    <Image src={"/assets/pmm/prototype-machine2.jpg"} width={350} height={350} alt='prototype-machine2' className='rounded-xl hover:scale-105' />
                </figure>

                <div className='pt-5 mt-10 text-black'>
                    <figure className='grid grid-cols-3 gap-10  justify-between'>
                        <p className='text-2xl p-3 align-middle text-center mt-auto mb-auto'>T-Slot broken</p>
                        <Image src={"/assets/pmm/t-slot-broken1.jpg"} width={316} height={240} alt='t-slot-broken1' className='rounded-xl ml-3 hover:scale-105' />
                        <Image src={"/assets/pmm/t-slot-broken2.jpg"} width={316} height={240} alt='t-slot-broken2' className='rounded-xl sm:h-60 h-24 hover:scale-105' />
                    </figure>
                </div>
                <div className='pt-5 mt-10 text-black'>
                    <figure className='grid grid-cols-3 gap-10 justify-between'>
                        <p className='text-2xl p-3 align-middle text-center mt-auto mb-auto'>Welding of T-slot</p>
                        <Image src={"/assets/pmm/welding-of-t-slot1.jpg"} width={316} height={240} alt='welding-of-t-slot1' className='rounded-xl ml-3 hover:scale-105' />
                        <Image src={"/assets/pmm/welding-of-t-slot2.jpg"} width={316} height={240} alt='welding-of-t-slot2' className='rounded-xl sm:h-60 h-24 hover:scale-105' />
                    </figure>
                </div>
                <div className='pt-5 mt-10 text-black'>
                    <figure className='grid grid-cols-3 gap-10 justify-between'>
                        <p className='text-2xl p-3 align-middle text-center mt-auto mb-auto'>Machining of T-slot</p>
                        <Image src={"/assets/pmm/machining-of-t-slot1.jpg"} width={323} height={247} alt='machining-of-t-slot1' className='rounded-xl ml-3 hover:scale-105' />
                        <Image src={"/assets/pmm/machining-of-t-slot2.jpg"} width={289} height={247} alt='machining-of-t-slot2' className='rounded-xl ml-2 hover:scale-105' />
                    </figure>
                </div>
                <div className='pt-5 mt-10 text-black'>
                    <figure className='grid grid-cols-3 gap-10 justify-between'>
                        <p className='text-2xl p-3 align-middle text-center mt-auto mb-auto'>Dent or Depression Marks on Platen</p>
                        <Image src={"/assets/pmm/dent-depression-marks-on-platen1.jpg"} width={323} height={247} alt='dent-depression-marks-on-platen1' className='rounded-xl ml-3 hover:scale-105' />
                        <Image src={"/assets/pmm/dent-depression-marks-on-platen2.jpg"} width={289} height={162} alt='dent-depression-marks-on-platen2' className='rounded-xl ml-2 hover:scale-105' />
                    </figure>
                </div>
                <div className='pt-5 mt-10 text-black'>
                    <figure className='grid grid-cols-3 gap-10 justify-between '>
                        <p className='text-2xl p-3 align-middle text-center mt-auto mb-auto'>After Surface Machining</p>
                        <Image src={"/assets/pmm/after-surface-machining1.jpg"} width={323} height={247} alt='after-surface-machining1' className='rounded-xl ml-3 hover:scale-105' />
                        <Image src={"/assets/pmm/after-surface-machining2.jpg"} width={289} height={162} alt='after-surface-machining2' className='rounded-xl ml-2 hover:scale-105' />
                    </figure>
                </div>
                <div className='pt-5 mt-10 text-black'>
                    <figure className='grid grid-cols-3 gap-10 justify-between '>
                        <p className='text-2xl p-3 align-middle text-center mt-auto mb-auto'>Before Machining</p>
                        <Image src={"/assets/pmm/Machining before A.jpg"} width={1920} height={1080} alt='before-machining' className='rounded-xl ml-2 hover:scale-105' />
                        <Image src={"/assets/pmm/Machining before B.jpg"} width={1920} height={1080} alt='after-machining' className='rounded-xl ml-2 hover:scale-105' />
                    </figure>
                </div>
                <div className='pt-5 mt-10 text-black'>
                    <figure className='grid grid-cols-3 gap-10 justify-between '>
                        <p className='text-2xl p-3 align-middle text-center mt-auto mb-auto'> After Machining</p>
                        <Image src={"/assets/pmm/Before machining C.jpg"} width={1920} height={1080} alt='before-machining' className='rounded-xl ml-2 hover:scale-105' />
                        <Image src={"/assets/pmm/AFTER MACHINING PLATEN.jpg"} width={1920} height={1080} alt='after-machining' className='rounded-xl ml-2 hover:scale-105' />
                    </figure>
                </div>
                <div className='pt-5 mt-10 text-black'>
                    <figure className='grid grid-cols-3 gap-10 justify-between '>
                        <p className='text-2xl p-3 align-middle text-center mt-auto mb-auto'>Before and After Machining</p>
                        <Image src={"/assets/pmm/before-machining1.jpg"} width={1280} height={1280} alt='before-machining' className='rounded-xl ml-2 hover:scale-105' />
                        <Image src={"/assets/pmm/after-machining.jpg"} width={1280} height={1280} alt='after-machining' className='rounded-xl ml-2 hover:scale-105' />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Page;
