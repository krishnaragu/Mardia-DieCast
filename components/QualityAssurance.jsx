import Image from 'next/image'
import React from 'react'

const QualityAssurance = () => {
    return (
        <div id='quality'>
            <Image src={'/../public/assets/midban.png'} alt={'Quality Assurance'} width={1920} height={500} />
            <div className='bg-black p-10 lg:pb-0 text-orange-500'>
                <h1 className='text-white text-3xl text-center p-5'>QUALITY CONTROL</h1>
                <div className='lg:grid lg:grid-cols-2 lg:pt-10'>
                    <p className='text-center text-2xl p-2 m-2 lg:text-4xl lg:pt-44 lg:p-10'>With regular quality check audits and a self-sufficient quality control team, at Mardia Engineering, the quality of our products and service is maintained as per the best international standards</p>
                    <Image src={'/../public/assets/certificate.png'} alt={'Certificate'} width={347} height={470} className='sm:w-full sm:h-fit lg:h-[75%]' />
                </div>
            </div >
        </div >
    )
}

export default QualityAssurance