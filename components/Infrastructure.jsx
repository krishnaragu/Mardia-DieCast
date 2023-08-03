import Image from 'next/image'
import React from 'react'

const Infrastructure = () => {
    return (
        <div className='bg-black'>
            <h1 className='text-3xl text-center p-4  text-red-700 font-bold lg:text-5xl'>OUR <span className='text-white'>INFRASTUCTURE</span></h1>
            <p className='p-10 text-center text-2xl lg:text-3xl lg:pl-40 lg:pr-40 font-bold text-orange-400'>
                Fully Equipped Foundry for Casting
                CNC / VMC Machinery Set Up
                In-house CMM Machine
                Fully equipped in-House Testing
                Area with latest Instruments.
            </p>
            <div className='p-10'>
                <figure className='lg:flex md:grid md:grid-cols-2 justify-between'>
                    <Image src={'/../public/assets/infra/1.jpg'} className='p-10' width={921} height={693} />
                    <Image src={'/../public/assets/infra/5.jpg'} className='p-10' width={444} height={733} />
                </figure>
                <figure className='lg:flex md:grid md:grid-cols-3 justify-between'>
                    <div className=''>
                        <Image src={'/../public/assets/infra/3.jpg'} className='p-10 ' width={364} height={604} />
                    </div>
                    <div className='lg:pt-40'>
                        <Image src={'/../public/assets/infra/4.jpg'} className='p-10' width={372} height={581} />
                    </div>
                    <figure className='lg:pt-80'>
                        <Image src={'/../public/assets/infra/2.jpg'} className='p-10' width={327} height={537} />
                    </figure>
                </figure>
            </div>
        </div>
    )
}

export default Infrastructure