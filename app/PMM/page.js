import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4"><span className=' text-red-600'>Portable Milling Machine</span> (PMM)</h1>
            <p className="mb-4">
                In Pressure Die Casting machine and Plastic Injection Molding machine, there are fixed platen and moving
                platen which over a period of time surface gets damaged and dents are formed. So, this portable milling
                machine(PMM), will be fixed on the die casting machine and it will machine the platen at the client{"'"}s site.
                Without dismantling the platen within 24 hours the job gets completed.
            </p>
            <ul className="list-disc pl-6 mb-4">
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
            <figure className='flex justify-between'>
                <div>
                    <Image src={"/assets/pmm/prototype-machine1.jpg"} width={642} height={648} alt='prototype-machine1' />
                    <p className='text-xl p-3'>Prototype Machine</p>
                </div>
                <Image src={"/assets/pmm/prototype-machine2.jpg"} width={374} height={666} alt='prototype-machine2' />
            </figure>
            <div className='pt-5'>
                <figure className='grid grid-cols-3 justify-between'>
                    <p className='text-xl p-3 align-middle'>T-Slot broken</p>
                    <Image src={"/assets/pmm/t-slot-broken1.jpg"} width={316} height={240} alt='t-slot-broken1' />
                    <Image src={"/assets/pmm/t-slot-broken2.jpg"} width={316} height={153} alt='t-slot-broken2' />
                </figure>
            </div>
            <div className='pt-5'>
                <figure className='grid grid-cols-3 justify-between'>
                    <p className='text-xl p-3 align-middle'>Welding of T-slot</p>
                    <Image src={"/assets/pmm/welding-of-t-slot1.jpg"} width={323} height={247} alt='welding-of-t-slot1' />
                    <Image src={"/assets/pmm/welding-of-t-slot2.jpg"} width={289} height={162} alt='welding-of-t-slot2' />
                </figure>
            </div>
            <div className='pt-5'>
                <figure className='grid grid-cols-3 justify-between'>
                    <p className='text-xl p-3 align-middle'>Machining of T-slot</p>
                    <Image src={"/assets/pmm/machining-of-t-slot1.jpg"} width={323} height={247} alt='machining-of-t-slot1' />
                    <Image src={"/assets/pmm/machining-of-t-slot2.jpg"} width={289} height={162} alt='machining-of-t-slot2' />
                </figure>
            </div>
            <div className='pt-5'>
                <figure className='grid grid-cols-3 justify-between'>
                    <p className='text-xl p-3 align-middle'>Dent/Depression Marks on Platen</p>
                    <Image src={"/assets/pmm/dent-depression-marks-on-platen1.jpg"} width={323} height={247} alt='dent-depression-marks-on-platen1' />
                    <Image src={"/assets/pmm/dent-depression-marks-on-platen2.jpg"} width={289} height={162} alt='dent-depression-marks-on-platen2' />
                </figure>
            </div>
            <div className='pt-5'>
                <figure className='grid grid-cols-3 justify-between'>
                    <p className='text-xl p-3 align-middle'>After Surface Machining</p>
                    <Image src={"/assets/pmm/after-surface-machining1.jpg"} width={323} height={247} alt='after-surface-machining1' />
                    <Image src={"/assets/pmm/after-surface-machining2.jpg"} width={289} height={162} alt='after-surface-machining2' />
                </figure>
            </div>
        </div>
    );
};

export default page;
