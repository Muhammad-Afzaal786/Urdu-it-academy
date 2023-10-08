import React from "react";
import Link from "next/link";
//import { useRouter } from 'next/router'
function Card({ productData }) {
 
  return (
    <>
      {productData && productData?.map((item, idx) => {
          return (
            <>
              <div
                key={idx}
                className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3  card_main">
                <article className="overflow-hidden rounded-lg shadow-md">
                  <Link href="#">
                    <img
                      alt="Placeholder"
                      className="block h-auto w-full card_img"
                      src={item.feature_image}
                      style={{ height: "200px" }}
                    />
                  </Link>

                  <header className="flex items-center justify-between leading-tight p-2 md:p-4 ">
                    <h1 className="text-lg">
                      <Link
                        className="no-underline hover:underline text-black"
                        href="#">
                        {item.Title.slice(0, 15)}
                      </Link>
                    </h1>
                  
                  </header>
                  <h2 className="p-5 card_title">{item.Detail.slice(0, 40)}</h2>
                  <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <Link
                      className="flex items-center no-underline  text-black btn_read "
                      
                      href={`/blogs/${item.id}`}>
                      <button class="rounded-lg px-4 py-2 d-flex justify-content-end text-right bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
                        Read More
                      </button>
                    </Link>
                  </footer>
                </article>
              </div>
            </>
          );
        })}
    </>
  );
}

export default Card;
