'use client'

import { useState } from "react";
import CourseCard from "./CourseCard";

const AllCoursesClient = ({ courses }) => {
    const [search, setSearch] = useState("");

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {/* Search */}
            <div className="mb-6 flex justify-between items-center">
                <h3 className="text-xl">Welcome to our all courses section. Browser our course and choose your best</h3>
                <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full md:w-80 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    filteredCourses.length > 0 ? (
                        filteredCourses.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))
                    ) : (
                        <p className="text-gray-500">No courses found</p>
                    )
                }
            </div>

        </div>
    );
};

export default AllCoursesClient;