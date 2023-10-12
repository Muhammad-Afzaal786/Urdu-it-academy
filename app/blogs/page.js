"use client";
import { useState, useEffect } from "react";
import Breadcrumb from "@/ui/Breadcrumb";
import Link from "next/link";
import dynamic from "next/dynamic";
import { blogData } from "../Apicall/endPoints";
import { SC } from "../Apicall/ServerCall";
import Card from "./cards";
import { useSearchParams } from 'next/navigation'
// const Card = dynamic(() => import("./cards"), {
//   loading: () => <p>Loading...</p>,
// });

// export async function getServerSideProps(context) {
//   const { query } = context;
//   const currentPage = Number(query.page) || 1;

//   try {
//     const res = await SC.postCall(blogData);
//     console.log(res, "API response");

//     if (res && res.data) {
//       const productData = res.data.data.data;
//       const totalPages = res.data.data.last_page;

//       return {
//         props: {
//           productData,
//           currentPage,
//           totalPages,
//         },
//       };
//     } else {
//       console.error("API response does not contain expected data.");
//     }
//   } catch (error) {
//     console.error("API call failed:", error);
//   }

//   return {
//     notFound: true,
//   };
// }


export default function Blog() {
  const searchParams = useSearchParams()
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page')) || 1
  );
  const [totalPages, setTotalPages] = useState(1);
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchData();

  }, []);

  const fetchData = () => {
    SC.postCall(blogData).then((res) => {
      if (res) {
        setProductData(res.data.data.data);
        setTotalPages(res.data.data.last_page);
        setLoading(false);
      } else {
        console.log("Something went wrong");
      }
    });
  };

  const getPageLink = (page) => {
    return `/blogs?page=${page}`;
  };

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Generate an array of page numbers to display
  const pageNumber = [];
  for (
    let i = Math.max(1, currentPage - 1);
    i <= Math.min(totalPages, currentPage + 1);
    i++
  ) {
    pageNumber.push(i);
  }

  return (
    <>
      <Breadcrumb
        pages={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blogs" },
        ]}
      />
      <section className="lg:pt-20 pt-16">
        <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
          Blogs
        </h2>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {loading ? (
              <div>
                <h1 className="text-xl text-blue-500">Loading...</h1>
              </div>
            ) : (
              <Card productData={productData} />
            )}
          </div>
        </div>

        <div className="pagination">
          <Link
            href={getPageLink(prevPage)}
            className={`pagi ${prevPage < 1 ? "disabled" : ""}`}
            disabled={prevPage < 1}>
            &laquo; Previous
          </Link>

          {pageNumber.map((page) => (
            <Link
              key={page}
              href={getPageLink(page)}
              className={`pagi ${page === currentPage ? "active" : ""}`}
              onClick={() => handlePageChange(page)}>
              {page}
            </Link>
          ))}

          <Link
            href={getPageLink(nextPage)}
            className={`pagi ${nextPage > totalPages ? "disabled" : ""}`}
            disabled={nextPage > totalPages}>
            Next &raquo;
          </Link>
        </div>
      </section>
    </>
  );
}
