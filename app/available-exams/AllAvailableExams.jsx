"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loader from "@/ui/Loader";
import { baseBathApi } from "../Apicall/basePathApi";
import { availableExam } from "../Apicall/endPoints";
import { SC } from "../Apicall/ServerCall";
const AllAvailableExams = ({ searchParams }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const payload = {
      certificationId: searchParams.get("certificationId"),
    };
    SC.postCall(availableExam, payload).then((res) => {
      setData(res.data.data);
      setIsLoading(false);
    });
    //fetchAvailbleExams();
  }, []);
  // const fetchAvailbleExams = async () => {
  //   try {
  //     const payload = {
  //       certificationId: searchParams.get("certificationId"),
  //     };

  //     const response = await fetch(`${baseBathApi}available_exam`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Request failed");
  //     }
  //     const jsonData = await response.json();

  //     setData(jsonData.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(false);
  //     setError(error.message);
  //   }
  // };

  if (isLoading) {
    return (
      <section className="lg:pt-20 pt-16">
        {/* section title */}
        <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
          {searchParams.get("certification_Name")}
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

  console.log(data, "videoooooooooo");
  return (
    <section className="lg:pt-[50px] pt-6 pb-4 md:pb-11">
      {/* section header */}
      <div className="flex justify-center flex-col space-y-4 md:space-y-8">
        <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000] ">
          {searchParams.get("certification_Name")}
          <sup className="">
            <span className="ml-4 border border-black px-5 text-center py-[6px] font-normal text-black text-xs rounded uppercase">
              {searchParams.get("status")}
            </span>
          </sup>
        </h2>
        <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C]">
          {searchParams.get("detail")}
        </p>
        <h3 className="font-bold text-black text-lg xl:text-2xl">
          Available exam courses
        </h3>
      </div>
      {/* courses content */}
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-8 lg:mt-6">
        {data !== null &&
          !isLoading &&
          data?.map((c) => (
            <Link
              href={{
                pathname: "/lectures",
                query: {
                  vendorName: searchParams.get("vendorName"),
                  vendorId: searchParams.get("vendorId"),
                  certification_Name: searchParams.get("certification_Name"),
                  certificationId: searchParams.get("certificationId"),
                  examId: c.examId,
                  exam_Name: c.exam_Name,
                  video_name: c.video_Name,
                  status: searchParams.get("status"),
                  detail: searchParams.get("detail"),
                },
              }}
              className="flex flex-col mb-5 lg:mb-[50px]"
              key={c.examId}>
              <div className="flex items-center justify-center h-32 xs:h-36 sm:h-36 md:h-[170px] lg:h-[223px] border border-[#E8E8E8] bg-[#FDFDFD] rounded p-2">
                <img src="/image.png" alt="" />
              </div>
              {/* title */}
              <h3 className="font-bold lg:text-lg mt-4 md:text-base text-sm text-[#000000]">
                {c.exam_Name}
              </h3>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default AllAvailableExams;
