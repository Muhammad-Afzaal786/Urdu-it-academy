"use client";
import { useState, useEffect } from "react";
import Breadcrumb from "@/ui/Breadcrumb";
import axios from "axios";
import Link from "next/link";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("./cards"), {
  loading: () => <p>Loading...</p>,
});

export default function Blog({ searchParams, dataP }) {
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.page) || 1
  );
  const [totalPages, setTotalPages] = useState(1);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Fetch the initial data and update the productData state
    async function fetchData() {
      const response = await axios.post(
        "https://dinovaux.ai/uitasite/public/api/blogpost"
      );
      setProductData(response.data.data.data);
      setTotalPages(response.data.data.last_page); // Set total pages based on API response
    }

    fetchData();
  }, []);

  const getPageLink = (page) => {
    return `/blogs?page=${page}`;
  };

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
        ;
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
            <Card productData={productData} />
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