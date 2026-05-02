import { Card } from "@heroui/react";
import Image from "next/image";
import { FaStar, FaClock, FaLayerGroup } from "react-icons/fa";

const CourseCard = ({ course }) => {
  return (
    <Card className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white">

      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {course.title}
        </h2>

        {/* Instructor */}
        <p className="text-sm text-gray-500">
          By {course.instructor}
        </p>

        {/* Info Row */}
        <div className="flex items-center justify-between text-sm text-gray-600">

          <div className="flex items-center gap-1">
            <FaClock className="text-blue-500" />
            <span>{course.duration}</span>
          </div>

          <div className="flex items-center gap-1">
            <FaLayerGroup className="text-purple-500" />
            <span>{course.level}</span>
          </div>

        </div>

        {/* Rating */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="text-gray-700 text-sm">
              {course.rating}
            </span>
          </div>

          {/* Button */}
          <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition">
            Details
          </button>

        </div>

      </div>
    </Card>
  );
};

export default CourseCard;