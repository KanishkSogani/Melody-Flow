"use client";
import Link from "next/link";
import CourseData from "../data/courses_data.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedSection() {
  const Featuredcourses = CourseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div id="feature" className="py-12 bg-gray-900">
      <div className=" text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>
      <div className="  mt-[5rem] mx-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {Featuredcourses.map((course: Course) => (
            <div key={course.id} className="justify-center flex text-white">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className=" mt-8  text-md text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link className=" mt-5" href={`#`}>
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-20 text-center">
        <Link href={"/"}>
          <button className="inline-flex items-center justify-center px-3 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedSection;
