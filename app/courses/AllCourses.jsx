"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { apiBaseUrl } from "@/lib/constants";
import Loader from "@/ui/Loader";
import { SC } from "../Apicall/ServerCall";
import { coursesLibrary } from "@/app/Apicall/endPoints";
const AllCourses = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCourse();
  }, []);

  const loadCourse = () => {
    SC.getCall(coursesLibrary).then((res) => {
      if (res) {
        setData(res.data.data);
        setIsLoading(false);
      }
    });
  };
  console.log(data, "course Data");
  if (isLoading) {
    return (
      <section className="lg:pt-20 pt-16">
        {/* section title */}
        <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
          Our Courses Library
        </h2>
        <Loader className="mt-6" />
      </section>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex md:flex-nowrap flex-wrap justify-center -mx-2 mt-9 lg:mt-12">
        <div className="p-10">No records found.</div>
      </div>
    );
  }

  return (
    <section className="lg:pt-[50px] pt-6 pb-4 md:pb-11">
      {/* section header */}
      <div className="flex flex-col space-y-4 md:space-y-8">
        <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
          Our Courses Library
        </h2>
        <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C]">
          Explore our library of all the available course topics. Each course
          topic contain related courses within it. Choose your interest and
          explore all the available courses inside that library.
        </p>
      </div>
      {/* courses content */}
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-9 lg:mt-12">
        {data !== null &&
          !isLoading &&
          data?.map((course) => (
            <div
              className="flex flex-col mb-5 lg:mb-[50px]"
              key={course.vendorId}>
              <Link
                className="flex items-center justify-center min-h-[120px] sm:min-h-[170px] md:h-[170px] lg:h-[223px] border border-[#E8E8E8] bg-[#FDFDFD] rounded p-2"
                href={{
                  pathname: "/certificates",
                  query: {
                    vendorId: course.vendorId,
                    vendorName: course.vendor_Name,
                  },
                }}>
                <Image
                  src={`https://www.urduitacademy.com/vendorImages/${course.vendor_ImageLink}`}
                  alt="course image"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-36 h-auto"
                />
              </Link>
              {/* title */}
              <h3 className="font-bold lg:text-lg mt-4 md:text-base text-sm text-[#000000]">
                <Link
                  href={{
                    pathname: "/certificates",
                    query: {
                      vendorId: course.vendorId,

                      vendorName: course.vendor_Name,
                    },
                  }}>
                  {course.vendor_Name}
                </Link>
              </h3>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AllCourses;
