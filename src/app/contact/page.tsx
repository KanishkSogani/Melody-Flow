"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../../components/ui/aurora-background";
import Link from "next/link";
function page() {
  // function handleSubmit(e) {
  //   e.preventDefault();
  // }
  return (
    <AuroraBackground>
      <div className=" z-10 flex flex-col justify-center items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-center">
            Contact Us
          </h1>
          <p className="text-neutral-500 mt-5 max-w-lg mx-auto my-2 text-sm text-center text-[1rem]">
            We&apos;re here to help with any questions about our courses,
            programs, or events. Reach out and let us know how we can assist you
            in your musical journey.
          </p>
        </div>
        <div>
          <form action="/">
            <Link href="#">
              <button className="bg-black cursor-pointer dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                Submit Form
              </button>
            </Link>
          </form>
        </div>
      </div>
    </AuroraBackground>
  );
}

export default page;
