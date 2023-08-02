import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
    return (
        <div className='bg-black flex flex-col p-5 items-center  text-white'>
            <h1 className='text-2xl font-bold'>Why Choose Us?</h1>
            <section id='iso' className='flex flex-col justify-center p-10'>
                <div className='flex flex-col text-center items-center p-8' >
                    <Image src="/../public/assets/why-choose-us/iso.png" alt='iso' width={100} height={100} />
                    <div>ISO 9001 : 2008 certified company Speaks of the <span className=' text-orange-500'>quality</span> we deliver</div>
                </div>
                <div className='flex flex-col text-center items-center p-8' >
                    <Image src="/../public/assets/why-choose-us/iso-1.png" alt='iso-1' width={100} height={100} />
                    <div>Expertise & experience delivering the <span className=' text-orange-500'>widest range</span> of engineering spares in the world!</div>
                </div>
                <div className='flex flex-col text-center items-center p-8' >
                    <Image src="/../public/assets/why-choose-us/iso-2.png" alt='iso-2' width={100} height={100} />
                    <div><span className=' text-orange-500'>Supplying</span> to over 100 Tire Plants across the globe</div>
                </div>
                <div className='flex flex-col text-center items-center p-8' >
                    <Image src="/../public/assets/why-choose-us/iso-3.png" alt='iso-3' width={100} height={100} />
                    <div>We <span className=' text-orange-500'>customize</span> spares as per your specific requirements & achieve the functionality of a machinery</div>
                </div>

                <div className='flex flex-col text-center items-center p-8' >
                    <Image src="/../public/assets/why-choose-us/iso-4.png" alt='iso-4' width={100} height={100} />
                    <div >Tire <span className=' text-orange-500'>specialists</span> : We cover 90% of engineering spares of a tire industry</div>
                </div>
                <div className='flex flex-col text-center items-center p-8' >
                    <Image src="/../public/assets/why-choose-us/iso-5.png" alt='iso-5' width={100} height={100} />
                    <div>Part of the fastest growing economies in the world ensures greater support in <span className=' text-orange-500'>global trade</span></div>
                </div>
            </section>
        </div>
    )
}

export default WhyChooseUs
