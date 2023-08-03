import React from 'react';
import whoweare from '../public/assets/whoweare.png';
import Image from 'next/image';
const About = () => {
    return (
        <div className="bg-black  text-white pt-16 p-8  font-light hover: sm:p-16 text-center" id='about'>
            <h1 className="text-2xl font-bold sm:text-5xl mb-8">About US</h1>
            <div className="mx-auto lg:grid lg:grid-cols-2 lg:pt-5">
                <p className="text-base text-justify sm:text-lg lg:text-xl mb-6">
                    With a rich experience of over 40 years in the field, Mardia Engineering is a name synonymous to high quality & precision products, that cater to Mechanical Engineering Industry Spare Parts.
                    Mardia Group of Companies started its business four decades ago with a non - ferrous foundry. Over the years, it has established as one of the leading manufacturers of spare parts in Tire Industry, Pressure Die Casting industry and Hydraulic Cylinders in India and South Asian countries. We have a fully equipped in- house facility of casting and machining to manufacture wide range of spares. We specialize in Self Lubricating Bushes, Centre Mechanism Assembly, Hydraulic Cylinders, Gears, Tie Bars and Nuts, Screw Rod and Nut, Toggle Pin, Housing Extruders, Bronze Bushes and so on.
                </p>
                <div className='flex justify-center'>
                    <Image src={whoweare} alt='Whoweare' height={500} width={500} />
                </div>
            </div>

        </div>
    );
};

export default About;
