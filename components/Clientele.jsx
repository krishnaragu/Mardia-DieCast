import Image from 'next/image'
import React from 'react'
import continental from '../public/assets/clientele/client-1.png'
import apollo from '../public/assets/clientele/client-2.png'
import yokohama from '../public/assets/clientele/client-5.png'
import ceat from '../public/assets/clientele/client-6.png'
import goodyear from '../public/assets/clientele/client-7.png'
import bridgestone from '../public/assets/clientele/client-8.png'
import jktyre from '../public/assets/clientele/client-9.png'
import michelin from '../public/assets/clientele/client-11.png'
import mrf from '../public/assets/clientele/client-12.png'
import bkt from '../public/assets/clientele/client-13.png'
import tvs from '../public/assets/clientele/client-14.png'
import rico from '../public/assets/clientele/client-16.png'
import endurance from '../public/assets/clientele/client-17.png'
import rockman from '../public/assets/clientele/client-18.png'
import oswal from '../public/assets/clientele/client-19.png'
import sundaram from '../public/assets/clientele/client-20.png'
import aurangabadelectricals from '../public/assets/clientele/client-21.png'
import sunbeam from '../public/assets/clientele/client-22.png'
const Clientele = () => {
    const clients = [
        {
            client: 1,
            name: 'Continental',
            url: continental
        },
        {
            client: 2,
            name: 'Apollo',
            url: apollo
        },
        {
            client: 3,
            name: 'Yokohama',
            url: yokohama
        },
        {
            client: 4,
            name: 'Ceat',
            url: ceat
        },
        {
            client: 5,
            name: 'Goodyear',
            url: goodyear
        },
        {
            client: 6,
            name: 'Bridgestone',
            url: bridgestone
        },
        {
            client: 7,
            name: 'JK Tyre',
            url: jktyre
        },
        {
            client: 8,
            name: 'Michelin',
            url: michelin
        },
        {
            client: 9,
            name: 'MRF',
            url: mrf
        },
        {
            client: 10,
            name: 'BKT',
            url: bkt
        },
        {
            client: 11,
            name: 'TVS',
            url: tvs
        },
        {
            client: 12,
            name: 'Rico',
            url: rico
        },
        {
            client: 13,
            name: 'Endurance',
            url: endurance
        },
        {
            client: 14,
            name: 'Rockman',
            url: rockman
        },
        {
            client: 15,
            name: 'Oswal',
            url: oswal
        },
        {
            client: 16,
            name: 'Sundaram',
            url: sundaram
        },
        {
            client: 17,
            name: 'Aurangabad Electricals',
            url: aurangabadelectricals
        },
        {
            client: 18,
            name: 'Sunbeam',
            url: sunbeam
        }
    ]
    return (
        <div id='clientele' className=' bg-black text-white' >
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl m-10 font-bold'>OUR CLIENTELE</h1>
                <div id="container">
                    <ul className='grid'>
                        {clients.map((client => {
                            return (
                                <li key={client.client} className=' bg-lime-400 m-4 p-1 hover:shadow-xl hover:shadow-lime-400'>
                                    <figure>
                                        <Image src={client.url} alt={client.name} />
                                        <figcaption className='hidden'>
                                            <h3>{client.name}</h3>
                                        </figcaption>
                                    </figure>
                                </li>
                            )
                        }))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Clientele