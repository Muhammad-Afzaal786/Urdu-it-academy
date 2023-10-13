"use client";
import React, { useEffect, useState } from "react";
//import { basePathApi } from "@/app/Apicall/basePathApi";
//import Loader from "@/ui/Loader";
import { SC } from "@/app/Apicall/ServerCall";
import { blogData } from "@/app/Apicall/endPoints";
import { basePathApi } from "../../app/Apicall/basePathApi"
import BlogPage from "../../app/blogs/cards"
const Blog = () => {
  const [productData, setProductData] = useState([]);
  //const [loading, setLoading] = useState(true);
  // const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const response = await fetch(`${basePathApi}blogs`, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           // Include any other headers you need
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error("Request failed");
  //       }
  //       const jsonData = await response.json();
  //       // Sort the data based on 'created_at' field in descending order
  //       const sortedData = jsonData.data.sort(
  //         (a, b) => new Date(b.created_at) - new Date(a.created_at)
  //       );

  //       // Select the first four elements to get the last inserted blogs
  //       const lastInsertedBlogs = sortedData.slice(0, 4);

  //       setData(lastInsertedBlogs);

  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //       setError(error.message);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);
  useEffect(() => {

    fetchData();

  }, []);

  const fetchData = () => {
    SC.postCall(blogData).then((res) => {
      if (res) {
        setProductData(res.data.data.data);
       
       
      } else {
        console.log("Something went wrong");
      }
    });
  };
console.log(productData, "Pr")
  // if (isLoading) {
  //   return (
  //     <section className="lg:pt-20 pt-14">
  //       <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
  //         Blog
  //       </h2>
  //       {/* <Loader className="mt-6" /> */}
  //     </section>
  //   );
  // }

  // if (productData?.length === 0) {
  //   return (
  //     <div className="flex md:flex-nowrap flex-wrap justify-center -mx-2 mt-9 lg:mt-12">
  //       <div className="p-10">No records found.</div>
  //     </div>
  //   );
  // }

  return (
    <section className="lg:pt-20 pt-14">
      {/* section title */}
      <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
        Blog
      </h2>
      {/* <BlogPage productData={ productData} /> */}
      {/* blog content */}
      <div className="flex md:flex-nowrap flex-wrap  -mx-2 mt-9 lg:mt-12 sm:px-0 xs:px-20 px-0">
        {
          
       productData && productData.slice(0.3)?.map((item) => (
            
            <a
            href={`/blogs/${item.id}`}
           target="_blank"
           rel="noopener noreferrer" // For security reasons
           key={item.vendorId}
           className=" flex justify-start sm:w-full lg:w-1/4 mx-2 my-2" style={{  flexDirection:"column" }}>
              <div
                 className="w-1/4 flex justify-start "
                style={{
                  // backgroundImage: `url(${item.feature_image || "/article4.png"})`,
                 
                
                  backgroundColor: "#D9D9D9",
                }}
           />
            <img
                  alt="Placeholder"
                  className="block h-auto w-full card_img rounded-none"
             src={item.feature_image}
             style={{height:"250px"}}
                 
                />
              <h3 className="font-bold lg:text-lg md:text-base text-sm text-[#000000] mt-6 leading-[21.78px]">
              {item.Title.slice(0, 30)}
              </h3>
            </a>
          //   <div
          //   key={idx}
          //   className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3  card_main">
          //   <article className="overflow-hidden rounded-lg shadow-md">
          //     <Link href="#">
          //       <img
          //         alt="Placeholder"
          //         className="block h-auto w-full card_img"
          //         src={item.feature_image}
          //         style={{ height: "200px" }}
          //       />
          //     </Link>

          //     <header className="flex items-center justify-between leading-tight p-2 md:p-4 ">
          //       <h1 className="text-lg">
          //         <Link
          //           className="no-underline hover:underline text-black"
          //           href="#">
          //           {item.Title.slice(0, 15)}
          //         </Link>
          //       </h1>
              
          //     </header>
          //     <h2 className="p-5 card_title">{item.Detail.slice(0, 40)}</h2>
          //     <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          //       <Link
          //         className="flex items-center no-underline  text-black btn_read "
                  
          //         href={`/blogs/${item.id}`}>
          //         <button class="rounded-lg px-4 py-2 d-flex justify-content-end text-right bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
          //           Read More
          //         </button>
          //       </Link>
          //     </footer>
          //   </article>
          // </div>
          ))}
      </div>
    </section>
  );
};

export default Blog;
