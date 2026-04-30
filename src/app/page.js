import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-1  bg-zinc-50  dark:bg-black">
      <Hero></Hero>
    </div>
  );
}
