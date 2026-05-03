import AllCoursesClient from "../components/AllCoursesClient";

export const metadata = {
  title: "All Courses | SkillSphere",
  description: "Browse all courses and improve your skills",
};

const AllCoursesPage = async () => {
  const res = await fetch('https://assignment-08-lilac.vercel.app/data.JSON');
  const courses = await res.json();

  return (
    <div className="w-full py-14 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 animate__animated animate__fadeInUp">
        <h2 className="text-4xl font-bold mb-6">All Courses</h2>
        <AllCoursesClient courses={courses} />

      </div>
    </div>
  );
};

export default AllCoursesPage;