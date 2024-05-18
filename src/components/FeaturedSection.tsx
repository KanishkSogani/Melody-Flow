import Link from "next/link";

function FeaturedSection() {
  return (
    <div className="py-12 bg-gray-900">
      <div className=" text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>
      <div></div>
      <div>
        <Link href={"/courses"}></Link>
      </div>
    </div>
  );
}

export default FeaturedSection;
