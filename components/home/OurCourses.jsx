"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
import { apiBaseUrl } from "@/lib/constants";
import Loader from "@/ui/Loader";
import { SC } from "@/app/Apicall/ServerCall";
import { OurCourse } from "@/app/Apicall/endPoints";


const OurCourses = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {

  //   const fetchCourses = async () => {
  //     try {
  //       const payload = {
  //         latestRecordCount: 4,
  //       };

  //       const response = await fetch(`${apiBaseUrl}/api/courses`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(payload),
  //       });

  //       if (!response.ok) {
  //         throw new Error("Request failed");
  //       }

  //       const jsonData = await response.json();

  //       setData(jsonData);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //       setError(error.message);
  //     }
  //   };

  //   fetchCourses();
  // }, []);

  useEffect(() => {
    loadCourse();
  }, []);

  const loadCourse = () => {
    SC.postCall(OurCourse).then((res) => {
      if (res) {
        setData(res.data.data);
        
        setIsLoading(false);
      }
    });
  };

  if (isLoading) {
    return (
      <section className="lg:pt-20 pt-16">
        {/* section title */}
        <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
          Our Courses
        </h2>
        <Loader className="mt-6" />
      </section>
    );
  }

  if (data?.length === 0) {
    return (
      <div className="flex md:flex-nowrap flex-wrap justify-center -mx-2 mt-9 lg:mt-12">
        <div className="p-10">No records found.</div>
      </div>
    );
  }

  return (
    <section className="lg:pt-20 pt-16">
      {/* section title */}
      <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
        Our Courses
      </h2>
      {/* courses content */}
      <div className="flex md:flex-nowrap flex-wrap justify-center -mx-2 mt-9 lg:mt-12 sm:px-0 xs:px-20 px-0">
        {data !== null &&
          !isLoading &&
          data?.slice(0, 4).map((course) => (
            <Link
              key={course.vendorId}
              className="flex items-center justify-center w-full sm:w-[280px] lg:w-full h-[170px] lg:h-[223px] mx-2 my-2 border border-[#E8E8E8] bg-[#FDFDFD] rounded p-2"
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
          ))}
      </div>
      {/* all courses button */}
      <div className="flex justify-center">
        <Link
          href="/courses"
          className="lg:text-lg md:text-base text-sm font-bold mt-7 lg:mt-10 flex items-center">
          See all courses <ArrowSmallRightIcon className="w-6 mt-1" />
        </Link>
      </div>
    </section>
  );
};

export default OurCourses;
