import Image from "next/image";
import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <section className="pt-16">
      <div className="flex md:flex-row flex-col items-center lg:gap-[75px] gap-12">
        {/* hero image */}
        <div className="relative md:order-1 order-2">
          <Image alt="hero-img" src="/hero.png" width={580} height={324} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              alt="Urdu It Academy"
              src="/logo-2.png"
              width={266}
              height={70}
            />
          </div>
        </div>
        {/* hero content */}
        <div className="flex flex-col text-center md:text-left md:px-0 px-8 md:w-[437px] text-[#1C1C1C] md:order-2 order-1">
          <h1 className="lg:text-4xl text-xl lg:leading-[43.57px] font-normal">
            <span className="text-[#0063F6] font-bold">Welcome to UITA</span>
            <br /> We are on a mission to provide free education
          </h1>
          <p className="lg:text-base text-sm font-normal mt-4 lg:mt-6">
            40+ Beginner to master level courses. 50K+ Students are learning new
            skills everyday to become IT Professionals and Experts.
          </p>
          <Link
            href="/courses"
            className="lg:text-lg md:text-base text-sm font-bold mt-7 lg:mt-10 md:ml-0 mx-auto flex items-center"
          >
            See all courses <ArrowSmallRightIcon className="w-6 mt-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
