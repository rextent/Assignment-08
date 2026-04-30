import { Button } from '@heroui/react';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto px-4 py-5'>
            <div>
                <Image 
                src="/SkillSphere-logo.png"
                alt='SkillSphere-logo'
                width={150}
                height={60}
                ></Image>
            </div>
            <div>
                <ul className='flex gap-5'>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>My Profile</li>
                </ul>
            </div>
            <div>
                <Button>Login</Button>
            </div>
        </div>
    );
};

export default Navbar;