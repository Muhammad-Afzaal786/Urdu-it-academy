"use client";
import React, { useEffect, useState } from "react";
//import Image from "next/image";
// import Link from "next/link";
// import { apiBaseUrl } from "@/lib/constants";
// import Loader from "@/ui/Loader";
import Image from "next/image";
import ReactPlayer from "react-player/lazy";

import { newUploadData } from "@/app/Apicall/endPoints";
import { SC } from "@/app/Apicall/ServerCall";
import Link from "next/link";
//import Carousel from "react-elastic-carousel";

const NewUploads = () => {
  const [data, setData] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const latestRecordCount = {
    latestRecordCount: 4,
  };
  useEffect(() => {
    getFaqData();
  }, []);
  const getFaqData = () => {
    SC.postCall(newUploadData, latestRecordCount).then((res) => {
      setData(res.data.data);
      console.log(res.data.data.video_Url, "new respo");
    });
  };

  return (
    <section className="lg:pt-20 pt-16">
      <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
        New Uploads
      </h2>

      {data && data.length > 0 ? (
        <div className="flex  gap-3 mt-10">
          {data.map((val, idx) => {
            console.log(val, "Data");
            return (
              <div className="flex flex-col sm:w-full lg:w-1/4 my-2" key={idx}>
                <div className="mb-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: val && val.video_Url,
                    }}
                    style={{ width: "100%" }}></div>
                </div>
                <div>
                  <p className="font-bold">{val.video_Description}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex md:flex-nowrap flex-wrap justify-center -mx-2 mt-9 lg:mt-12">
          <div className="p-10">No records found.</div>
        </div>
      )}
    </section>
  );
};

export default NewUploads;
