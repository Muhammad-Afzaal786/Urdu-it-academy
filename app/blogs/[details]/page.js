"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumb from "@/ui/Breadcrumb";
import axios from "axios";

function Details({ params }) {
  const router = useRouter();
  const id = params.details;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .post(
          `https://dinovaux.ai/uitasite/public/api/blogpost_single_blog?id=${id}`
        )
        .then((response) => {
          setData(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <>
      <Breadcrumb
        pages={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blogs" },
        ]}
      />

      {loading ? (
        <div className="mt-5">
          <h1 className="text-xl text-blue-500">Loading...</h1>
        </div>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : data ? (
        <section className="lg:pt-16 pt-16">
          {/ section title /}
          <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
            {data.Title}
          </h2>
          <div className="main_card">
            <div className="p-2">
              <div className="rounded overflow-hidden shadow-sm">
                <img
                  className="w-full"
                  src={data.feature_image}
                  alt="Mountain"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{data.Title}</div>
                </div>
                <div className="px-6 pt-4 pb-2 para">
                  <p>{data.Detail}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h1>No Data</h1>
      )}
    </>
  );
}

export default Details;
