import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const CourseCard = ({course}) => {
    console.log(course)
    return (
        <Card>
            <div>
                <Image 
                src={course.image}
                alt={course.title}
                height={100}
                width={100}
                >

                </Image>
            </div>
        </Card>
    );
};

export default CourseCard;