"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import Loader from "@/ui/Loader";

import { basePathApi } from "../Apicall/basePathApi";

const SearchResults = ({ searchParams }) => {
  console.log(searchParams, "Search");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchSearch = async () => {
      try {
        const payload = {
          search: searchParams?.get('query'),
        };

        const response = await fetch(`${basePathApi}search`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }
        const jsonData = await response.json();

        setData(jsonData.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetchSearch();
  }, [searchParams.get('query')]);

  if (isLoading) {
    return (
      <section className="lg:pt-20 pt-16">
        {/* section title */}
        <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
          Lectures:
        </h2>
        <Loader className="mt-6" />
      </section>
    );
  }

  if (data?.length === 0) {
    return (
      <>
        <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000] lg:pt-20 pt-16">
          Lectures:
        </h2>
        <div className="flex md:flex-nowrap flex-wrap mt-6 lg:mt-8">
          <div className="">No records found.</div>
        </div>
      </>
    );
  }

  return (
    <section className="lg:pt-[50px] pt-6 pb-4 md:pb-11">
      {/* section header */}
      <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
        Lectures:
      </h2>

      {/* more lectures */}
      <div className="flex flex-col mt-2">
        {/* other lectures */}
        <div className="flex flex-col divide-y mt-4 lg:mt-6">
          {data !== null &&
            !isLoading &&
            data?.map((lecture, i) => (
              <Link
                href={{
                  pathname: "/lectures",
                  query: {
                    videoId: lecture.videoId,
                    examId: lecture.examId,
                    vendorName: lecture.vendor_Name,
                    certificationId: lecture.certificationId,
                    certification_Name: lecture.certification_Name,
                    status: lecture.status,
                    exam_Name: lecture.exam_Name,
                    detail: lecture.detail,
                  },
                }}
                key={lecture.videoId}
                type="button"
                className={`cursor-pointer `}>
                <div
                  className={`text-black font-normal text-sm lg:text-base py-3 ${
                    i === 0 && "border-t"
                  } ${i === data.length - 1 && "border-b"}`}>
                  {" "}
                  {lecture.video_Name} - {lecture.video_PresentaionName}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
