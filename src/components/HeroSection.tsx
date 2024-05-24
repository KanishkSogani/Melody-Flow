"use client";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { FlipWords } from "./ui/flip-words";

function HeroSection() {
  const words = ["Music"];
  return (
    <div className=" h-auto md:h-[100vh] w-full rounded-md flex flex-col  items-center relative overflow-hidden mx-auto  py-10  md:py-0  justify-center ">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className=" p-4 relative z-10 w-full text-center">
        <h1 className=" mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">
          Master the art of <FlipWords words={words} />
        </h1>
        <p className="mt-12 font-normal text-base md:text-lg text-neutral-300  max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you are a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className=" mt-10">
          <Link href={"/"}>
            <Button
              onClick={() => {
                const element = document.getElementById("feature");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
