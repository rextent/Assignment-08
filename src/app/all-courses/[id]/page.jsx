import Image from "next/image";
import { FaStar, FaClock, FaLayerGroup, FaUser } from "react-icons/fa";

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://assignment-08-lilac.vercel.app/data.JSON");
    const courses = await res.json();

    const course = courses.find((p) => p.id === Number(id));

    if (!course) {
        return <div className="text-center py-20 text-xl">Course not found</div>;
    }

    return (
        <section className="w-full py-10 bg-gray-50">
            <div className="max-w-[1200px] mx-auto px-4">

                {/* Top Section */}
                <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow">

                    {/* Image */}
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                        <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-between">

                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                                {course.title}
                            </h1>

                            <p className="text-gray-600 mb-4">
                                {course.description}
                            </p>

                            {/* Instructor */}
                            <div className="flex items-center gap-2 text-sm text-gray-700 mb-3">
                                <FaUser className="text-blue-500" />
                                <span>{course.instructor}</span>
                            </div>

                            {/* Info Row */}
                            <div className="flex flex-wrap gap-4 text-sm">

                                <div className="flex items-center gap-1 text-gray-700">
                                    <FaClock className="text-green-500" />
                                    <span>{course.duration}</span>
                                </div>

                                <div className="flex items-center gap-1 text-gray-700">
                                    <FaLayerGroup className="text-purple-500" />
                                    <span>{course.level}</span>
                                </div>

                                <div className="flex items-center gap-1 text-yellow-500">
                                    <FaStar />
                                    <span>{course.rating}</span>
                                </div>

                                {/* Extra Content */}

                                <div className=" w-full mt-8 bg-gradient-to-br from-blue-100/60 via-white to-indigo-100/60 backdrop-blur-sm p-6 rounded-xl shadow">
                                    <h2 className="text-xl font-semibold mb-3 text-gray-800">
                                        What you will learn
                                    </h2>

                                    <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600 list-disc pl-5">
                                        <li>Real-world practical skills</li>
                                        <li>Industry-level knowledge</li>
                                        <li>Hands-on projects</li>
                                        <li>Career-ready concepts</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        {/* CTA */}
                        <button className="mt-6 w-full md:w-fit bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm transition">
                            Enroll Now
                        </button>

                    </div>
                </div>

                <div className="w-full mt-8 bg-gradient-to-r from-blue-50 via-white to-purple-50 p-6 rounded-xl shadow">

                    <h2 className="text-xl font-semibold mb-3 text-gray-800">
                        About This Course
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        This course is designed to help you build real-world skills and gain practical knowledge
                        in {course.category}. Whether you are a beginner or looking to advance your expertise,
                        you will learn industry-relevant concepts with hands-on experience.
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        By the end of this course, you will be confident in applying your skills in real projects,
                        improving your career opportunities, and staying ahead in the competitive market.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default CourseDetailsPage;