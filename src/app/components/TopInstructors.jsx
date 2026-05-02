import Image from "next/image";
import { FaStar } from "react-icons/fa";

const TopInstructors = () => {
    const instructors = [
        {
            name: "John Doe",
            role: "Web Development",
            image: "/instructor1.png",
            rating: 4.9,
        },
        {
            name: "Sarah Johnson",
            role: "UI/UX Design",
            image: "/instructor2.png",
            rating: 4.8,
        },
        {
            name: "David Wilson",
            role: "Data Science",
            image: "/instructor3.png",
            rating: 4.7,
        },
    ];

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
                    🏆 Top Instructors
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {instructors.map((ins, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition duration-300"
                        >

                            {/* Image */}
                            <div className="relative w-24 h-24 mx-auto mb-4">
                                <Image
                                    src={ins.image}
                                    alt={ins.name}
                                    fill
                                    className="object-cover rounded-full"
                                />
                            </div>

                            {/* Name */}
                            <h3 className="text-lg font-semibold text-gray-800">
                                {ins.name}
                            </h3>

                            {/* Role */}
                            <p className="text-sm text-gray-500 mb-3">
                                {ins.role}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center justify-center gap-1 text-yellow-500">
                                <FaStar />
                                <span className="text-gray-700 text-sm">
                                    {ins.rating}
                                </span>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default TopInstructors;