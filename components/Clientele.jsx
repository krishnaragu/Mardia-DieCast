import Image from 'next/image'
import React from 'react'

const Clientele = () => {
    const clients = ["Continental", "Yokohama", "Titan", "Federal Mogul", "Wipro", "BFW", "San Engineering",
        "Sundaram Clayton", "TVS Group", "Ashok Leyland", "Tata group", "Birla group", "BEML", "KCPLtd", "Honda Lt"]
    return (
        <div id='clientele' className=' bg-black text-white ' >
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl m-10  text-red-700 font-bold lg:text-5xl'>OUR <span className='text-white'>CLIENTELE</span></h1>
                <div id="container">
                    <p className='text-orange-400 p-5 text-center text-xl lg:text-4xl'>
                        We supply spares and products
                        to the some of the world{'\''}s
                        largest companies.</p>
                    <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:p-10'>
                        {clients.map((client => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <li className=' bg-red-800 m-4 p-6 hover:shadow-xl hover:shadow-lime-400'>
                                    <div className='text-xl text-white lg:text-3xl text-center '>
                                        {client}
                                    </div>
                                </li>
                            )
                        }))}
                    </ul>
                    <p className='text-orange-400 p-5 lg:p-10 text-center text-xl lg:text-4xl'>
                        & many more engineering companies
                        around the world.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Clientele