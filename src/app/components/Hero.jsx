import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className='w-full h-[80vh] relative'>
            <Image
            src="/Hero.png"
            alt='Hero Image'
            fill
            className='object-cover'
            priority
            >

            </Image>
        </div>
    );
};

export default Hero;