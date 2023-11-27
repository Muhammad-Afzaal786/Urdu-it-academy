"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { basePathApi } from "../Apicall/basePathApi";

import Loader from "@/ui/Loader";
import { SessionModal } from "./SessionModal";
import { SC } from "../Apicall/ServerCall";
import { OurTeam } from "../Apicall/endPoints";

const Team = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await fetch(`${basePathApi}team`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          // Include any other headers you need
        },
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

  return (
    <>
      <SessionModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedUser={selectedUser}
      />
      <section className="pt pt-10 md:pt-24">
        <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
          Meet Our Team
        </h2>
        <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C] mt-4 md:w-[1079px]">
          Meet the amazing team behind the UITA and its courses. Our instructors
          are working professionals in their respective fields and they not only
          bring the hands on knowledge in their courses. You can now also book a
          One on One consulting session with our instructors.
          <br />
          <br />
          1. Check the availability by looking at this icon next to instructor
          name.
          <br />
          2. Click on the instructor name and click on Book{" "}
          <span className="bg-[#0063F6] px-2 rounded text-white">1:1</span>{" "}
          Session.
          <br />
          3. You will be taken to the booking page.
          <br />
          4. Confirmation will be sent to you over your email.
        </p>

        {data?.length === 0 && (
          <div className="flex md:flex-nowrap flex-wrap justify-center -mx-2 mt-9 lg:mt-12">
            <div className="p-10">No records found.</div>
          </div>
        )}
        {isLoading && <Loader className="mt-6" />}
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 mt-9 lg:mt-12">
          {data !== null &&
            !isLoading &&
            data.data?.map((t) => (
              <div
                className="flex flex-col mb-5 lg:mb-[50px] group"
                key={t.id}
                onClick={() => setSelectedUser(t)}>
                <div className="flex items-center overflow-hidden justify-center h-[140px] sm:h-[170px] lg:h-[223px] border border-[#E8E8E8] bg-[#FDFDFD] rounded p-2">
                  <Image
                    src={`https://www.urduitacademy.com/team/${t.pic}`}
                    width={200}
                    height={200}
                    alt={t.name}
                    className="object-contain w-auto lg:max-h-[190px] sm:max-h-[150px] max-h-[130px]"
                  />
                </div>
                {/* info */}
                <div className="flex justify-between">
                  <h3 className="font-bold lg:text-lg mt-4 md:text-base text-sm text-[#000000]">
                    {t.name}
                  </h3>
                  {/* 1:1 */}
                  <button
                    onClick={() => setIsOpen(true)}
                    className="bg-[#0063F6] px-4 hover:cursor-pointer rounded text-white self-start mt-4 hidden group-hover:block">
                    1:1
                  </button>
                </div>
                <h4 className="font-bold text-[#626262] text-sm mt-2">
                  {t.work}
                </h4>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Team;
