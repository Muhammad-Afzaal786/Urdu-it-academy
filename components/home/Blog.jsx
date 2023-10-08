"use client";
import React, { useEffect, useState } from "react";
import { apiBaseUrl } from "@/lib/constants";
import Loader from "@/ui/Loader";

const Blog = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/api/blogs`, {
          headers: {
            "Content-Type": "application/json",
            // Include any other headers you need
          },
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }
        const jsonData = await response.json();
        // Sort the data based on 'created_at' field in descending order
        const sortedData = jsonData.data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

        // Select the first four elements to get the last inserted blogs
        const lastInsertedBlogs = sortedData.slice(0, 4);

        setData(lastInsertedBlogs);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) {
    return (
      <section className="lg:pt-20 pt-14">
        <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
          Blog
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
    <section className="lg:pt-20 pt-14">
      {/* section title */}
      <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
        Blog
      </h2>
      {/* blog content */}
      <div className="flex md:flex-nowrap flex-wrap justify-center -mx-2 mt-9 lg:mt-12 sm:px-0 xs:px-20 px-0">
        {data !== null &&
          !isLoading &&
          data?.map((a) => (
            <a
              href={a.link_address}
              target="_blank"
              rel="noopener noreferrer" // For security reasons
              key={a.vendorId}
              className="w-full flex flex-col sm:w-[280px] lg:w-full mx-2 my-2"
            >
              <div
                className="w-full h-[170px] lg:h-[223px]"
                style={{
                  backgroundImage: `url(${a.backgroundURL || "/article4.png"})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#D9D9D9",
                }}
              />
              <h3 className="font-bold lg:text-lg md:text-base text-sm text-[#000000] mt-6 leading-[21.78px]">
                {a.link_description}
              </h3>
            </a>
          ))}
      </div>
    </section>
  );
};

export default Blog;
