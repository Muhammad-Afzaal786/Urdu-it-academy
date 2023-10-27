"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { logoImg } from "./../public/logo.png";
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Courses", href: "/courses", current: false },
  {
    name: "Quiz",
    href: "https://www.urduitacademy.com/quiz/",
    current: false,
    external: true,
  },
  { name: "About", href: "/about", current: false },
  { name: "Help", href: "/help", current: false },
  { name: "Blog", href: "/blogs", current: false },
  { name: "FAQs", href: "/faq", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [query, setQuery] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      router.push(`/search-result?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <Disclosure as="nav" className="border-b border-[#EEEEEE] bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-[1215px] px-4">
              <div className="flex h-[88px] justify-between pt-4">
                <div className="flex">
                  <div className="flex items-center">
                    <Link href="/">
                      <Image
                        src={"./Logo-2.png"}
                        alt="Urdu IT Academy"
                        width={144}
                        height={38}
                        className="cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="hidden lg:-my-px lg:ml-[45px] lg:flex lg:space-x-[30px]">
                    {navigation.map((item) => (
                      <React.Fragment key={item.name}>
                        {item.external ? ( // Check if the link is external
                          <a
                            href={item.href}
                            target="_blank" // Open the Quiz link in a new tab
                            rel="noopener noreferrer" // For security reasons
                            className={classNames(
                              item.current
                                ? "border-[#0063F6] text-gray-900 font-bold"
                                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                              "inline-flex items-center border-b-4 px-1 pt-1 text-base font-normal cursor-pointer"
                            )}>
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              pathname === item.href
                                ? "border-[#0063F6] text-gray-900 font-bold"
                                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                              "inline-flex items-center border-b-4 px-1 pt-1 text-base font-normal cursor-pointer"
                            )}
                            aria-current={
                              pathname === item.href ? "page" : null
                            }>
                            {item.name}
                          </Link>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="-mr-2 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* search */}
                <div className="mdlg:w-[380px] hidden lg:flex items-center">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="w-full relative text-gray-400 focus-within:text-gray-600">
                    <div className="cursor-pointer absolute inset-y-0 left-0 flex items-center pl-3">
                      <Link
                        className={`${
                          query === "" ? "cursor-not-allowed" : "cursor-pointer"
                        }`}
                        onClick={(e) => {
                          if (query === "") {
                            e.preventDefault();
                          }
                        }}
                        href={{
                          pathname: "/search-result",
                          query: {
                            query,
                          },
                        }}>
                        <MagnifyingGlassIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                    <input
                      id="search"
                      className="block w-full rounded-md border border-[#E8E8E8] bg-white py-1.5 pl-10 pr-3 text-gray-900 sm:text-sm sm:leading-6 outline-none"
                      placeholder="Search"
                      type="search"
                      name="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* mobile navigation */}
            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? "border-[#0063F6] bg-indigo-50 text-[#0063F6]"
                        : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                      "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              {/* mobile search */}
              <div className="flex lg:hidden items-center">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="w-full relative text-gray-400 focus-within:text-gray-600">
                  <Link
                    className={`${
                      query === "" ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    onClick={(e) => {
                      if (query === "") {
                        e.preventDefault();
                      }
                    }}
                    href={{
                      pathname: "/search-results",
                      query: {
                        query,
                      },
                    }}>
                    <div className="cursor-pointer absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                  <input
                    id="search"
                    className="block w-full rounded-md border border-[#E8E8E8] bg-white py-1.5 pl-10 pr-3 text-gray-900 sm:text-sm sm:leading-6 outline-none"
                    placeholder="Search"
                    type="search"
                    name="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
