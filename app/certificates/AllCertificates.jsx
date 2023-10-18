"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { basePathApi } from "../Apicall/basePathApi";
import Loader from "@/ui/Loader";
import { SC } from "../Apicall/ServerCall"
import {relatedLectures} from "../Apicall/endPoints"
const AllCertificates = ({ searchParams }) => {
  const [data, setData] = useState(null);
 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
   
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const payload = {
        vendorId: searchParams.get("vendorId"),
      };
      const response = await fetch(`${basePathApi}certificates`, {
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

      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  if (isLoading) {
    return (
      <section className="lg:pt-20 pt-16">
        {/* section title */}
        <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
          {searchParams.get("vendorName")} Courses
        </h2>
        <Loader className="mt-6" />
      </section>
    );
  }

  if (data?.data.length === 0) {
    return (
      <div className="flex md:flex-nowrap flex-wrap justify-center -mx-2 mt-9 lg:mt-12">
        <div className="p-10">No records found.</div>
      </div>
    );
  }
  console.log("vendorName:", searchParams.get('vendorName'));
  console.log("certification_Name:", searchParams.get('certification_Name'));
  console.log("certificationId:", searchParams.get('certificationId'));
  console.log("status:", searchParams.get('status'));
  
  return (
    <section className="lg:pt-[50px] pt-6 pb-4 md:pb-11">
      {/* section header */}
      <div className="flex flex-col space-y-4 md:space-y-8">
        <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
          {searchParams.get("vendorName")} Courses
        </h2>
        <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C]">
          {data?.data[0].courseDetails.detail}
        </p>
      </div>
      {/* courses content */}
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-9 lg:mt-12">
        {data !== null &&
          !isLoading &&
          data?.data.map((c) => {
            
            return (
              <>
               <div
              className="flex flex-col mb-5 lg:mb-[50px]"
              key={c.certificationId}>
              <Link
                className="flex items-center justify-center h-32 xs:h-36 sm:h-36 md:h-[170px] lg:h-[223px] border border-[#E8E8E8] bg-[#FDFDFD] rounded p-2"
                href={{
                  pathname: "/available-exams",
                  query: {
                    certificationId: c.certificationId,
                    certification_Name: c.certification_Name,
                    detail: c.detail,
                    vendorName: searchParams.vendorName,
                    vendorId: searchParams.vendorId,
                    status: c.status,
                  },
                }}
              >
                <img
                  src={
                    c.courseDetails.vendor_ImageLink.startsWith("http://") ||
                    c.courseDetails.vendor_ImageLink.startsWith("http")
                      ? c.courseDetails.vendor_ImageLink
                      : "/image.png"
                  }
                  alt=""
                />
              </Link>
              {/* title */}
              <h3 className="font-bold lg:text-lg mt-4 md:text-base text-sm text-[#000000]">
                <Link
                  href={{
                    pathname: "/available-exams",
                    query: {
                      certificationId: c.certificationId,
                      certification_Name: c.certification_Name,
                      detail: c.detail,
                      vendorName: searchParams.vendorName,
                      examId: searchParams.examId
                    },
                  }}
                >
                  {c.certification_Name}
                </Link>
              </h3>
            </div>
              </>
            )
          })}
      </div>
    </section>
  );
};

export default AllCertificates;
