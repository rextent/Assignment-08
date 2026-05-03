import Hero from "./components/Hero";
import TopCourses from "./components/TopCourses";
import LearningTips from "./components/LearningTips";
import TopInstructors from "./components/TopInstructors";

export default function Home() {
  return (
    <div className="flex flex-col flex-1  bg-zinc-50  dark:bg-black">
      <Hero></Hero>
      <TopCourses></TopCourses>
      <LearningTips></LearningTips>
      <TopInstructors></TopInstructors>
    </div>
  );
}
