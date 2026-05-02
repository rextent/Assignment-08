import CourseCard from "../components/CourseCard";

const AllCoursesPage = async () => {
    const res = await fetch('https://assignment-08-lilac.vercel.app/data.JSON')
    const courses = await res.json();
    console.log(courses);
    return (
        <div className="w-full py-14 bg-gray-50">
            <div className="max-w-[1400px] mx-auto px-6">
                <h2>All Courses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCoursesPage;