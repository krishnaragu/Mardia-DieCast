import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <div className='bg-cover bg-center' style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/cnc-milling-hardened-steel-with-sparks-closeup-with-selective-focus-blur_636705-679.jpg?size=626&ext=jpg&ga=GA1.2.388493421.1693318435&semt=ais' }}>
            <div className='w-full flex'>
                <Link href="../" className='p-4 w-fit'>
                    <Image src={'/assets/icons/left-chevron.png'} alt='back arrow' height={50} width={50} />
                </Link>
            </div>
            <div className="container mx-auto p-4">
                <h1 className="text-6xl lg:text-8xl text-white font-bold mb-4 text-center mt-3 "><span className='text-red-600'>Portable Milling Machine</span> (PMM)</h1>
                <p className="mb-4 text-white font-extrabold mt-5 text-3xl">
                    In Pressure Die Casting machine and Plastic Injection Molding machine, there are fixed platen and moving
                    platen which over a period of time surface gets damaged and dents are formed. So, this <span className='text-red-600'>Portable Milling
                        Machine(PMM)</span>, will be fixed on the die casting machine and it will machine the platen at the client{"'"}s site.
                    Without dismantling the platen within 24 hours the job gets completed.
                </p>
                <ul className="list-disc text-white font-extrabold pl-6 mb-8 text-3xl">
                    <li>Machining can be done at your site.</li>
                    <li>Requires none or minimal dismantling of large equipment{"’"}s.</li>
                    <li>Eliminates the need for transport, hence saves on time and costs.</li>
                    <li>Overall time and cost reduced, without compromising on quality.</li>
                    <li>Geometrical accuracy achievable within 0.2mm parallelism.</li>
                    <li>It can remove all kinds of dents on the surface of fixed platen and moving platen.</li>
                    <li>Repair activity we can do it within 24 hours on a single platen.</li>
                    <li>T-slot repairing can be taken up, if required addition to slot{"’"}s also can be made.</li>
                    <li>We can do this job up to 1100-ton machine.</li>
                    <li>Fixing of false or sub platen can be done on site.</li>
                </ul>
                <figure className='flex  justify-around mb-4'>
                    <div>
                        <Image src={"/assets/pmm/prototype-machine1.jpg"} width={642} height={666} alt='prototype-machine1' className='rounded-xl hover:scale-105' />
                        <p className='text-2xl p-3 text-center '>Prototype Machine</p>
                    </div>
                    <Image src={"/assets/pmm/prototype-machine2.jpg"} width={350} height={350} alt='prototype-machine2' className='rounded-xl hover:scale-105' />
                </figure>

                <div className='pt-5 mt-10'>
                    <figure className='grid grid-cols-3 gap-10  justify-between'>
                        <p className='text-2xl p-3 align-middle text-center mt-auto mb-auto'>T-Slot broken</p>
                        <Image src={"/assets/pmm/t-slot-broken1.jpg"} width={316} height={240} alt='t-slot-broken1' className='rounded-xl ml-3 hover:scale-105' />
                        <Image src={"/assets/pmm/t-slot-broken2.jpg"} width={316} height={240} alt='t-slot-broken2' className='rounded-xl sm:h-60 h-24 hover:scale-105' />
                    </figure>
                </div>
                <div className='pt-5 mt-10'>
                    <figure className='grid grid-cols-3 gap-10 justify-between'>
                        <p className='text-2xl p-3 align-middle text-center mt-auto mb-auto'>Welding of T-slot</p>
                        <Image src={"/assets/pmm/welding-of-t-slot1.jpg"} width={316} height={240} alt='welding-of-t-slot1' className='rounded-xl ml-3 hover:scale-105' />
                        <Image src={"/assets/pmm/welding-of-t-slot2.jpg"} width={316} height={240} alt='welding-of-t-slot2' className='rounded-xl sm:h-60 h-24 hover:scale-105' />
                    </figure>
                </div>
                <div className='pt-5 mt-10'>
                    <figure className='grid grid-cols-3 gap-10 justify-between'>
                        <p className='text-2xl p-3 align-middle text-center mt-auto mb-auto'>Machining of T-slot</p>
                        <Image src={"/assets/pmm/machining-of-t-slot1.jpg"} width={323} height={247} alt='machining-of-t-slot1' className='rounded-xl ml-3 hover:scale-105' />
                        <Image src={"/assets/pmm/machining-of-t-slot2.jpg"} width={289} height={247} alt='machining-of-t-slot2' className='rounded-xl ml-2 hover:scale-105' />
                    </figure>
                </div>
                <div className='pt-5 mt-10'>
                    <figure className='grid grid-cols-3 gap-10 justify-between'>
                        <p className='text-2xl p-3 align-middle text-center mt-auto mb-auto'>Dent or Depression Marks on Platen</p>
                        <Image src={"/assets/pmm/dent-depression-marks-on-platen1.jpg"} width={323} height={247} alt='dent-depression-marks-on-platen1' className='rounded-xl ml-3 hover:scale-105' />
                        <Image src={"/assets/pmm/dent-depression-marks-on-platen2.jpg"} width={289} height={162} alt='dent-depression-marks-on-platen2' className='rounded-xl ml-2 hover:scale-105' />
                    </figure>
                </div>
                <div className='pt-5 mt-10'>
                    <figure className='grid grid-cols-3 gap-10 justify-between '>
                        <p className='text-2xl p-3 align-middle text-center mt-auto mb-auto'>After Surface Machining</p>
                        <Image src={"/assets/pmm/after-surface-machining1.jpg"} width={323} height={247} alt='after-surface-machining1' className='rounded-xl ml-3 hover:scale-105' />
                        <Image src={"/assets/pmm/after-surface-machining2.jpg"} width={289} height={162} alt='after-surface-machining2' className='rounded-xl ml-2 hover:scale-105' />
                    </figure>
                </div>
                <div className='pt-5 mt-10'>
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
