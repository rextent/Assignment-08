import CourseCard from "./CourseCard";

const TopCourses = async () => {
    const res = await fetch('https://assignment-08-lilac.vercel.app/data.JSON')
    const courses = await res.json()
    const topCourses = courses.slice(0,3)
    // console.log(topCourses)
    return (
        <div className="container mx-auto my-5">
            <h2 className="text-2xl font-bold my-5">Top Courses</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    topCourses.map(course => <CourseCard key={course.id} course={course} ></CourseCard>)
                }
            </div>
        </div>
    );
};

export default TopCourses;