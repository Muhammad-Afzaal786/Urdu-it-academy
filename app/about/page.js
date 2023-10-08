import React, { Fragment } from "react";
import Image from "next/image";
import DiscoverMore from "@/components/home/DiscoverMore";
import Breadcrumb from "@/ui/Breadcrumb";
import Team from "./Team";

export const metadata = {
  title: "About Us - Urdu It Academy",
};

export default function About() {
  return (
    <Fragment>
      <Breadcrumb
        pages={[
          { name: "Home", href: "/" },
          { name: "About", href: "#" },
        ]}
      />

      {/* about us */}
      <section className="lg:pt-[50px] pt-6">
        {/* section header */}
        <div className="flex flex-col space-y-4 md:space-y-8">
          <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
            About Us
          </h2>
          <div className="flex items-center gap-5 md:flex-row flex-col">
            {/* about content */}
            <div className="md:w-[579px]">
              <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C]">
                Urdu IT Academy is an e-learning website. It’s time for students
                to take command of their learning without using a classroom.
                Internet is a source that is convinenient and easy to
                accessible. UITA gives an increadible opportunity to students
                who wants to polish their skills in Technology. At UITA we help
                people from all over the world enabling them to learn and earn
                living from what they love.
              </p>
              <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C]">
                “ At Urdu IT Academy we seek to empower people. By providing
                high quality computer based training, we believe that we are
                enabling people to further educate themselves with our free
                online computer based training series ”<br /> <br /> Kashif
                Iqbal | Founder
              </p>
            </div>
            {/* about image */}
            <div className="relative">
              <Image src="/about.png" width={580} height={268} alt="About Us" />
              <div className="flex items-center justify-center absolute inset-0">
                <Image
                  src="/image.png"
                  width={65.25}
                  height={54.38}
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our team */}
      <Team />
      <DiscoverMore />
    </Fragment>
  );
}
