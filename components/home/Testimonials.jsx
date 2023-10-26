"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
//import { apiBaseUrl } from "@/lib/constants";
import Loader from "@/ui/Loader";
import { Testimonial } from "@/app/Apicall/endPoints";
import { SC } from "@/app/Apicall/ServerCall";
const articles = [
  {
    id: "1",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorum dolor alias, odit accusamus eaque animi! Quam facilis maxime doloribus ab magnam quaerat totam, nihil esse error quod culpa doloremque.",
    name: "Talha Nisar",
  },
  {
    id: "2",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorum dolor alias, odit accusamus eaque animi! Quam facilis maxime doloribus.",
    name: "Sameer",
  },
];

const Testimonials = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     try {
  //       const response = await fetch(`${apiBaseUrl}/api/customer_reviews`, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           // Include any other headers you need
  //         },
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

  //   fetchReviews();
  // }, []);
  useEffect(() => {
    loadCourse();
  }, []);

  const loadCourse = () => {
    SC.getCall(Testimonial).then((res) => {
      if (res) {
        setData(res.data.data);

        setIsLoading(false);
      }
    });
  };

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : data?.data.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < data?.length - 1 ? prevSlide + 1 : 0
    );
  };

  return (
    <section className="lg:pt-20 pt-14">
      {/* content */}
      <div className="flex justify-center items-center gap-5 lg:gap-[55px]">
        <button onClick={handlePrevClick}>
          <ChevronLeftIcon className="text-[#B6B6B6] h-6" />
        </button>
        <div
          className="w-full overflow-hidden flex flex-col justify-center items-center lg:w-[780px] text-center py-4 min-h-[300px] sm::min-h-[200px]  lg:py-[37px] px-4 lg:px-[62px] border border-[#E8E8E8] rounded-lg testimonial-slider"
          numberofslides={data?.length}>
          {data?.length === 0 && (
            <div className="flex md:flex-nowrap flex-wrap justify-center -mx-2 mt-9 lg:mt-12">
              <div className="p-10">No records found.</div>
            </div>
          )}
          {isLoading && <Loader className="mt-6" />}

          {data !== null &&
            !isLoading &&
            data?.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-item flex flex-col justify-between ${
                  index === currentSlide && "active"
                }`}>
                <p className="font-normal text-sm md:text-base pb-4">
                  {testimonial.customer_remarks}
                </p>
                <span className="font-bold text-sm md:text-lg">
                  {testimonial.customer_name}
                </span>
              </div>
            ))}
        </div>
        <button onClick={handleNextClick}>
          <ChevronRightIcon className="text-[#B6B6B6] h-6" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
