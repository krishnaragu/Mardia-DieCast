import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
    return (
        <div className='bg-black flex flex-col p-5 items-center  text-white' id='whyus'>
            <h1 className='text-2xl font-bold lg:text-5xl text-red-700'>WHY <span className=' text-white'>US?</span></h1>
            <section id='iso' className='flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 justify-center p-10'>
                <div className='flex flex-col text-center items-center p-8' >
                    <Image src="/assets/why-choose-us/iso.png" alt='iso' width={100} height={100} />
                    <div className='p-1 m-2'>ISO 9001 : 2008 certified company Speaks of the <span className=' text-orange-500'>quality</span> we deliver</div>
                </div>
                <div className='flex flex-col text-center items-center p-8' >
                    <Image src="/assets/why-choose-us/iso-1.png" alt='iso-1' width={100} height={100} />
                    <div className='p-1 m-2'>Expertise & experience delivering the <span className=' text-orange-500'>widest range</span> of engineering spares in the world!</div>
                </div>
                <div className='flex flex-col text-center items-center p-8' >
                    <Image src="/assets/why-choose-us/iso-2.png" alt='iso-2' width={100} height={100} />
                    <div className='p-1 m-2'><span className=' text-orange-500'>Supplying</span> to over 100 Tire Plants across the globe</div>
                </div>
                <div className='flex flex-col text-center items-center p-8' >
                    <Image src="/assets/why-choose-us/iso-3.png" alt='iso-3' width={100} height={100} />
                    <div className='p-1 m-2'>We <span className=' text-orange-500'>customize</span> spares as per your specific requirements & achieve the functionality of a machinery</div>
                </div>

                <div className='flex flex-col text-center items-center p-8' >
                    <Image src="/assets/why-choose-us/iso-4.png" alt='iso-4' width={100} height={100} />
                    <div className='p-1 m-2'>Tire <span className=' text-orange-500'>specialists</span> : We cover 90% of engineering spares of a tire industry</div>
                </div>
                <div className='flex flex-col text-center items-center p-8' >
                    <Image src="/assets/why-choose-us/iso-5.png" alt='iso-5' width={100} height={100} />
                    <div className='p-1 m-2'>Part of the fastest growing economies in the world ensures greater support in <span className=' text-orange-500'>global trade</span></div>
                </div>
            </section>
        </div>
    )
}

export default WhyChooseUs