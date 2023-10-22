"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { basePathApi } from "../Apicall/basePathApi";
import Loader from "@/ui/Loader";
import ReactPlayer from "react-player/lazy";
import { relatedLectures } from "../Apicall/endPoints";
import { SC } from "../Apicall/ServerCall";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "next-share";

const AllLectures = ({ searchParams }) => {
  //console.log(searchParams.get("video_Name"), "Lectures Search params");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLecture, setSelectedLecture] = useState(data);

  const currentURL = window.location.href;

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
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetchLectures();
  }, []);
  console.log(data, "all lec data");
  useEffect(() => {
    if (data) {
      const selected = data.find(
        (lecture) => lecture.videoId === parseInt(searchParams.get("videoId"))
      );
      setSelectedLecture(selected);
      console.log(selected, "selected");
    }
  }, [searchParams, data]);

  const handleLectureClick = (lecture) => {
    setSelectedLecture(lecture);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  console.log(selectedLecture, "seee");
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
              (data && data.video_Url)
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
        <div className="flex flex-col divide-y mt-6 lg:mt-8">
          {data !== null &&
            !isLoading &&
            data?.map((lecture, i) => (
              <Link
                href={{
                  pathname: "/lectures",
                  query: {
                    videoId: lecture.videoId,
                    examId: searchParams?.get("examId"),
                    vendorName: searchParams?.get("vendorName"),
                    certificationId: searchParams?.get("certificationId"),
                    certification_Name: searchParams?.get("certification_Name"),
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
                    : ""
                }`}
                onClick={() => handleLectureClick(lecture)}>
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

export default AllLectures;

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// import Loader from "@/ui/Loader";
// import ReactPlayer from "react-player/lazy";
// //import { basePathApi } from "../Apicall/basePathApi";
// import { relatedLectures } from "../Apicall/endPoints";
// import { SC } from "../Apicall/ServerCall";

// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   LinkedinShareButton,
// } from "next-share";

// const AllLectures = ({ searchParams }) => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const currentURL = window.location.href;

//   useEffect(() => {
//     const payload = {
//       examId: searchParams?.get("examId"),
//     };
//     SC.postCall(relatedLectures, payload).then((res) => {
//       setData(res.data.data);
//       setIsLoading(false);
//     });
//     //fetchLectures();
//   }, []);

//   // const fetchLectures = async () => {
//   //   try {
//   //     const payload = {
//   //       examId: searchParams?.get("examId"),
//   //     };
//   //     console.log(payload, "all")

//   //     const response = await fetch(`${basePathApi}related_lectures`, {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(payload),
//   //     });

//   //     if (!response.ok) {
//   //       throw new Error("Request failed");
//   //     }
//   //     const jsonData = await response.json();

//   //     setData(jsonData.data);
//   //     setIsLoading(false);
//   //   } catch (error) {
//   //     setIsLoading(false);
//   //     setError(error.message);
//   //   }
//   // };

//   useEffect(() => {
//     if (data && searchParams.get("videoId")) {
//       const selected = data.find(
//         (lecture) => lecture.videoId === parseInt(searchParams.get("videoId"))
//       );
//       setSelectedLecture(selected);
//     }
//   }, [data, searchParams.get("videoId")]); // Include data dependency

//   const handleLectureClick = (lecture) => {
//     setSelectedLecture(lecture);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   if (isLoading) {
//     return (
//       <section className="lg:pt-20 pt-16">
//         {/* section title */}
//         <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
//           {searchParams?.get("certification_Name")}
//         </h2>
//         <Loader className="mt-6" />
//       </section>
//     );
//   }

//   if (data?.length === 0) {
//     return (
//       <div className="flex md:flex-nowrap flex-wrap justify-center -mx-2 mt-9 lg:mt-12">
//         <div className="p-10">No records found.</div>
//       </div>
//     );
//   }
//   console.log(data, selectedLecture, "lecture");
//   return (
//     <section className="lg:pt-[50px] pt-6 pb-4 md:pb-11">
//       {/* section header */}
//       <div className="flex flex-col space-y-4 md:space-y-8">
//         <div className="space-y-4">
//           <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
//             {searchParams?.get("certification_Name")} :{" "}
//             {searchParams?.get("exam_Name")}
//           </h2>
//           <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C]">
//             {searchParams?.get("detail")}
//           </p>
//         </div>
//       </div>
//       <div className="mt-10">
//                 <div className="space-y-4">
//                   <h3 className="font-bold text-black text-lg xl:text-2xl">
//                     { searchParams?.get("video_Name")}
//                   </h3>
//                   <p className="text-black text-lg font-normal">
//                     { searchParams.video_Description}
//                   </p>
//                 </div>
//               </div>
//       {/* video player */}
//       {data &&
//         data.map((val, idx) => {
//           return (
//             <>

//               <div div className="flex flex-col  mt-8" key={idx}>
//                 <div className="h-[270px] sm:h-[350px] md:h-[540px] player-wrapper">
//                   <ReactPlayer
//                     width="100%"
//                     controls
//                     muted={false}
//                     height="100%"
//                     className="react-player"
//                     url={val && val.video_Url}
//                   />
//                   {/* <div className="product-des  mb-5" dangerouslySetInnerHTML={{ __html:val && val.video_Url }}></div> */}
//                 </div>
//                 {/* share */}
//                 <div className="flex items-center justify-between  mt-10">
//                   {/* social */}
//                   <div className="flex items-center space-x-2 lg:space-x-4">
//                     <span className="text-black text-sm md:text-lg lg:text-2xl font-normal">
//                       Share
//                     </span>
//                     <TwitterShareButton
//                       url={currentURL}
//                       title={val && val.video_Name}>
//                       <img
//                         src="/twitter_icon.png"
//                         alt="Twitter Icon"
//                         width="24"
//                         height="24"
//                         className="w-5 lg:w-6 h-auto"
//                       />
//                     </TwitterShareButton>
//                     <FacebookShareButton
//                       url={val && val.video_Url}
//                       title={val && val.video_Name}>
//                       <img
//                         src="/FacebookLogo(1).png"
//                         alt="Facebook Icon"
//                         width="24"
//                         height="24"
//                         className="w-5 lg:w-6 h-auto"
//                       />
//                     </FacebookShareButton>
//                     <LinkedinShareButton
//                       url={val && val.video_Url}
//                       title={val && val.video_Name}>
//                       <img
//                         src="/linkedin_icon.png"
//                         alt="LinkedIn Icon"
//                         width="24"
//                         height="24"
//                         className="w-5 lg:w-6 h-auto"
//                       />
//                     </LinkedinShareButton>
//                   </div>
//                   {/* useful links */}
//                   <div className="flex items-center gap-2">
//                     <span className="text-black text-sm md:text-lg lg:text-2xl font-normal">
//                       Useful Links
//                     </span>
//                     <Image
//                       src="/link_icon.png"
//                       alt="Link Icon"
//                       width="0"
//                       height="0"
//                       sizes="100vw"
//                       className="lg:w-8 w-5 h-auto"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </>
//           );
//         })}

//       {/* more lectures */}
//       <div className="flex flex-col mt-8 md:mt-12 lg:mt-20">
//         <h3 className="font-bold text-black text-lg xl:text-2xl">
//           More lectures in this series
//         </h3>
//         {/* other lectures */}
//         <div className="flex flex-col divide-y mt-6 lg:mt-8">
//           {data !== null &&
//             !isLoading &&
//             data?.map((lecture, i) => (
//               <Link
//                 href={{
//                   pathname: "/lectures",
//                   query: {
//                     videoId: lecture.videoId,
//                     examId: searchParams?.get("examId"),
//                     vendorName: searchParams?.get("vendorName"),
//                     certificationId: searchParams?.get("certificationId"),
//                     certification_Name: searchParams?.get("certification_Name"),
//                     status: searchParams?.get("status"),
//                     exam_Name: searchParams?.get("exam_Name"),
//                     detail: searchParams?.get("detail"),
//                   },
//                 }}
//                 key={lecture.videoId || i}
//                 type="button"
//                 className={`cursor-pointer ${
//                   selectedLecture?.videoId === lecture.videoId
//                     ? "bg-gray-100 px-2"
//                     : ""
//                 }`}
//                 onClick={() => handleLectureClick(lecture)}>
//                 <div
//                   className={`text-black font-normal text-sm lg:text-base py-3 ${
//                     i === 0 && "border-t"
//                   } ${i === data.length - 1 && "border-b"}`}>
//                   {" "}
//                   {lecture.video_Name} - {lecture.video_PresentaionName}
//                 </div>
//               </Link>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllLectures;
