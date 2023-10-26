"use client";
import React, { useEffect, useState } from "react";
//import Image from "next/image";
// import Link from "next/link";
// import { apiBaseUrl } from "@/lib/constants";
// import Loader from "@/ui/Loader";
import { newUploadData } from "@/app/Apicall/endPoints";
import { SC } from "@/app/Apicall/ServerCall";
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
      console.log(res.data.data);
    });
  };
 
  return (
    <section className="lg:pt-20 pt-16">
             
      <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
        New Uploads
      </h2>
      
    {data && data.length > 0 ? (
  
    <div className="flex gap-10 mt-10">
      {data.map((val, idx) => {
        console.log(val, "Data");
        return (
          <div className="w-auto h-auto" key={idx}>
            {/* Your carousel content */}
            <div className="product-des  mb-5" dangerouslySetInnerHTML={{ __html: val.video_Url }}></div>
            <span className="font-bold text-2xl">{val.video_PresentaionName}</span>
          </div>
        );
      })}
    </div>
  
) : (
  <div>
    
    No data available.
  </div>
)}
    </section>
  );
};

export default NewUploads;
