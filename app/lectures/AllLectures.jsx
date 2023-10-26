"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { basePathApi } from "../Apicall/basePathApi";
import Loader from "@/ui/Loader";
import ReactPlayer from "react-player/lazy";
//import { relatedLectures } from "../Apicall/endPoints";
//import { SC } from "../Apicall/ServerCall";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "next-share";

const AllLectures = ({ searchParams }) => {
  //console.log(searchParams.get("vendorId"), "Lectures Search params");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLecture, setSelectedLecture] = useState(data);

  const currentURL = window.location.href;

  // console.log(videoFirstUrl, "Show First url");

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const payload = {
          examId: searchParams?.get("examId"),
        };

        const response = await fetch(`${basePathApi}related_lectures`, {
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
        setSelectedLecture(jsonData.data);
        setIsLoading(false);

        console.log(videoFirstUrl, "First url");
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetchLectures();
  }, []);

  useEffect(() => {
    if (data) {
      const selected = data.find(
        (lecture) => lecture.videoId === parseInt(searchParams.get("videoId"))
      );
      setSelectedLecture(selected);
    }
  }, [searchParams, data]);

  const handleLectureClick = (lecture) => {
    setSelectedLecture(lecture);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <section className="lg:pt-20 pt-16">
        {/* section title */}
        <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
          {searchParams?.get("certification_Name")}
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
    <section className="lg:pt-[50px] pt-6 pb-4 md:pb-11">
      {/* section header */}
      <div className="flex flex-col space-y-4 md:space-y-8">
        <div className="space-y-4">
          <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
            {searchParams?.get("certification_Name")} :{" "}
            {searchParams?.get("exam_Name")}
          </h2>
          <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C]">
            {searchParams?.get("detail")}
          </p>
        </div>
        {
          <div className="space-y-4">
            <h3 className="font-bold text-black text-lg xl:text-2xl">
              {(selectedLecture && selectedLecture.video_Name) ||
                data[0].video_Name}
            </h3>
            <p className="text-black text-lg font-normal">
              {(selectedLecture && selectedLecture.video_Description) ||
                data[0].video_Description}
            </p>
          </div>
        }
      </div>
      {/* video player */}
      <div className="flex flex-col  mt-8">
        <div className="h-[270px] sm:h-[350px] md:h-[540px] player-wrapper">
          <ReactPlayer
            width="100%"
            controls
            muted={false}
            height="100%"
            className="react-player"
            url={
              (selectedLecture && selectedLecture.video_Url) ||
              (data && data[0].video_Url)
            }
          />
        </div>
        {/* share */}
        <div className="flex items-center justify-between  mt-10">
          {/* social */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <span className="text-black text-sm md:text-lg lg:text-2xl font-normal">
              Share
            </span>
            <TwitterShareButton
              url={currentURL}
              title={selectedLecture && selectedLecture.video_Name}>
              <img
                src="/twitter_icon.png"
                alt="Twitter Icon"
                width="24"
                height="24"
                className="w-5 lg:w-6 h-auto"
              />
            </TwitterShareButton>
            <FacebookShareButton
              url={selectedLecture && selectedLecture.video_Url}
              title={selectedLecture && selectedLecture.video_Name}>
              <img
                src="/FacebookLogo(1).png"
                alt="Facebook Icon"
                width="24"
                height="24"
                className="w-5 lg:w-6 h-auto"
              />
            </FacebookShareButton>
            <LinkedinShareButton
              url={selectedLecture && selectedLecture.video_Url}
              title={selectedLecture && selectedLecture.video_Name}>
              <img
                src="/linkedin_icon.png"
                alt="LinkedIn Icon"
                width="24"
                height="24"
                className="w-5 lg:w-6 h-auto"
              />
            </LinkedinShareButton>
          </div>
          {/* useful links */}
          <div className="flex items-center gap-2">
            <span className="text-black text-sm md:text-lg lg:text-2xl font-normal">
              Useful Links
            </span>
            <Image
              src="/link_icon.png"
              alt="Link Icon"
              width="0"
              height="0"
              sizes="100vw"
              className="lg:w-8 w-5 h-auto"
            />
          </div>
        </div>
      </div>

      {/* more lectures */}
      <div className="flex flex-col mt-8 md:mt-12 lg:mt-20">
        <h3 className="font-bold text-black text-lg xl:text-2xl">
          More lectures in this series
        </h3>
        {/* other lectures */}
        <div className="flex flex-col divide-y mt-6 lg:mt-8 ">
          {data !== null &&
            !isLoading &&
            data?.map((lecture, i) => {
              return (
                <>
                  <Link
                    href={{
                      pathname: "/lectures",
                      query: {
                        videoId: lecture.videoId,
                        examId: searchParams?.get("examId"),
                        vendorName: searchParams?.get("vendorName"),
                        vendorId: searchParams?.get("vendorId"),
                        certificationId: searchParams?.get("certificationId"),
                        certification_Name:
                          searchParams?.get("certification_Name"),
                        status: searchParams?.get("status"),
                        exam_Name: searchParams?.get("exam_Name"),
                        detail: searchParams?.get("detail"),
                      },
                    }}
                    key={lecture.videoId}
                    type="button"
                    className={`cursor-pointer ${
                      selectedLecture?.videoId === lecture.videoId
                        ? "bg-gray-100 px-2"
                        : ` `
                    }`}
                    onClick={() => handleLectureClick(lecture)}>
                    <div
                      // style={ i ===0 ? {backgroundColor:"red"} : {}}
                      className={`text-black font-normal text-sm lg:text-base py-3 ${
                        i === 0 && selectedLecture?.videoId == null
                          ? "bg-gray-100 px-2"
                          : ""
                      } ${i === 0 && "border-t"} ${
                        i === data.length - 1 && "border-b"
                      } `}>
                      {lecture.video_Name} - {lecture.video_PresentaionName}
                    </div>
                  </Link>
                </>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default AllLectures;
