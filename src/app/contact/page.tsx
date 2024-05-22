"use client";

import React from "react";
import { AuroraBackground } from "../../components/ui/aurora-background";
function page() {
  return (
    <AuroraBackground>
      <div className=" z-10 flex flex-col justify-center items-center mx-8 mb-[10vh] min-w-[80vw]">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-center">
            Contact Us
          </h1>
          <p className="text-neutral-500 mt-5 max-w-lg mx-auto my-2 text-sm text-center text-[18px]">
            We&apos;re here to help with any questions about our courses,
            programs, or events. Reach out and let us know how we can assist you
            in your musical journey.
          </p>
        </div>
        <div className="z-10 mt-4   ">
          <form action="/" onSubmit={(e) => e.preventDefault()}>
            <div className="textInputWrapper min-w-[20rem] md:min-w-[35rem]">
              <input
                type="email"
                placeholder="Your Email Address"
                className="textInput "
              />
            </div>
            <div className="textInputWrapper">
              <textarea
                placeholder="Your Message"
                className=" textInput texta"
              />
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-black cursor-pointer dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuroraBackground>
  );
}

export default page;
