import Image from 'next/image'
import React from 'react'

const QualityAssurance = () => {
    return (
        <div id='quality'>
            <Image src={'/../public/assets/midban.png'} alt={'Quality Assurance'} width={1920} height={500} />
            <div className='bg-black p-10 text-orange-500'>
                <h1 className='text-white text-3xl text-center p-5'>QUALITY CONTROL</h1>
                <p className='text-center text-2xl p-2 m-2'>With regular quality check audits and a self-sufficient quality control team, at Mardia Engineering, the quality of our products and service is maintained as per the best international standards</p>
                <Image src={'/../public/assets/certificate.png'} alt={'Certificate'} width={1920} height={500} />
            </div>
        </div>
    )
}

export default QualityAssurance