import Image from 'next/image'
import React from 'react'

const QualityAssurance = () => {
    return (
        <div id='quality'>
            <div className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 p-10 pt-16 lg:pb-0 text-orange-500'>
                <h1 className='text-2xl m-10  text-red-700 font-bold text-center lg:text-5xl'>QUALITY <span className='text-white'>CONTROL</span></h1>
                <div className='lg:grid lg:grid-cols-2 lg:pt-10'>
                    <Image src={'/assets/certificate.png'} alt={'Certificate'} width={347} height={470} className='sm:w-full sm:h-fit lg:h-[75%]' />
                    <p className='text-center text-2xl p-2 m-2 lg:text-4xl lg:pt-44 lg:p-10'>With regular quality check audits and a self-sufficient quality control team, at Mardia Engineering, the quality of our products and service is maintained as per the best international standards</p>
                </div>
            </div >
        </div >
    )
}

export default QualityAssurance