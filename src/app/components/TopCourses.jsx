import CourseCard from "./CourseCard";

const TopCourses = async () => {
    const res = await fetch(
        "https://assignment-08-lilac.vercel.app/data.JSON",
        { cache: "no-store" }
    );
    const courses = await res.json();

    // Top 3 by rating (better than slice)
    const topCourses = courses
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <section className="w-full py-14 bg-gray-50">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                        🔥 Popular Courses
                    </h2>

                    <button className="text-sm text-blue-600 hover:underline">
                        View All
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TopCourses;