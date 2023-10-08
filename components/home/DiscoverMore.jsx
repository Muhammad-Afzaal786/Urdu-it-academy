import React from "react";
import Link from "next/link";

const data = [
  {
    id: "1",
    title: "Test your knowledge, play the quiz",
    backgroundURL: "discover_img_1.png",
    href: "https://www.urduitacademy.com/quiz/",
    external: true,
  },
  {
    id: "2",
    title: "Check out our Community Forum",
    backgroundURL: "discover_img_2.png",
    href: "https://www.facebook.com/urduitacademy/",
    external: true,
  },
  {
    id: "3",
    title: "Meet the team behind UITA",
    backgroundURL: "discover_img_3.png",
    href: "/about",
  },
];

const DiscoverMore = () => {
  return (
    <section className="lg:pt-20 pt-16">
      {/* section title */}
      <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
        Discover More
      </h2>
      {/* content */}
      <div className="flex md:flex-nowrap flex-wrap justify-center -mx-2 mt-9 lg:mt-12 sm:px-0 xs:px-20 px-0">
        {data.map((item) => (
          <div
            className="w-full flex flex-col sm:w-[280px] lg:w-full mx-2 my-2 md:mb-0 mb-4"
            key={item.id}
          >
            <div
              className="w-full h-[170px] lg:h-[223px] relative"
              style={{
                backgroundImage: `url(${item.backgroundURL})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#D9D9D9",
              }}
            >
              {/* overlay */}
              <Link
                href={item.href}
                target={item.external ? "_" : ""}
                className="absolute inset-0 flex items-end lg:p-8 p-4"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 4.77%, #000000 107.08%)",
                }}
              >
                <h3 className="cursor-pointer font-bold lg:text-2xl md:text-lg text-base text-white lg:max-w-[270px]">
                  {item.title}
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverMore;
