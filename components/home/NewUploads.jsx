"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import Link from "next/link";
// import { apiBaseUrl } from "@/lib/constants";
// import Loader from "@/ui/Loader";
import { newUploadData } from "@/app/Apicall/endPoints";
import { SC } from "@/app/Apicall/ServerCall";
import Carousel from "react-elastic-carousel";

const NewUploads = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
  // const breakPoints = [
  //   { width: 4, itemsToShow: 4 },
  //   { width: 550, itemsToShow: 4 },
  //   { width: 768, itemsToShow: 4 },
  //   { width: 1200, itemsToShow: 4 },
  // ];
  // const customLoader = ({ src, width, quality }) => {
  //   return `http://img.youtube.com/vi/${src}/0.jpg`;
  // };
  // useEffect(() => {
  //   const fetchNewUploads = async () => {
  //     try {
  //       const payload = {
  //         latestRecordCount: 4,
  //       };

  //       const response = await fetch(`${apiBaseUrl}/api/lectures`, {
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

  //       setData(jsonData?.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //       setError(error.message);
  //     }
  //   };

  //   fetchNewUploads();
  // }, []);

  // if (isLoading) {
  //   return (
  //     <section className="lg:pt-20 pt-16">
  //       {/* section title */}
  //       <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
  //         New Uploads
  //       </h2>
  //       <Loader className="mt-6" />
  //     </section>
  //   );
  // }

  // if (data?.length === 0) {
  //   return (
  //     <div className="flex md:flex-nowrap flex-wrap justify-center -mx-2 mt-9 lg:mt-12">
  //       <div className="p-10">No records found.</div>
  //     </div>
  //   );
  // }

  return (
    <section className="lg:pt-20 pt-16">
             
      <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
        New Uploads
      </h2>
      {/* courses content */}
      {/* <div className="flex md:flex-nowrap flex-wrap justify-center -mx-2 mt-9 lg:mt-12 sm:px-0 xs:px-20 px-0">
        {data !== null &&
          !isLoading &&
          data.slice(0, 4).map((lecture) => (
            <div
              className="w-full flex flex-col sm:w-[280px] lg:w-full mx-2 mb-6 md:mb-0"
              key={lecture.videoId}
            >
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
              >
                <div
                  className="flex items-center justify-center w-full h-[170px] lg:h-[223px]"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
                    backgroundImage: `url(${"/ccnp.png"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#D9D9D9",
                  }}
                >
                  <Image
                    src="/play.png"
                    width={20}
                    height={24}
                    alt="play-button"
                  />
                </div>
              </Link>
              <h4 className="font-bold uppercase text-[#626262] text-sm mt-4">
                {lecture.cssclass}
              </h4>
              <h3 className="font-bold lg:text-lg md:text-base text-sm text-[#000000]">
                {lecture.video_PresentaionName}
              </h3>
            </div>
          ))}
      </div> */}
    {data && data.length > 0 ? (
  //  <Carousel breakPoints={breakPoints}>
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
  //  </Carousel>
) : (
  <div>
    {/* Render something else or a message when there's no data */}
    No data available.
  </div>
)}
    </section>
  );
};

export default NewUploads;
