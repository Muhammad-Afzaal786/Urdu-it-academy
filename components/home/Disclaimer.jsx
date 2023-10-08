import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";

const Disclaimer = () => {
  return (
    <section className="md:w-full sm:w-[578px] w-full mx-auto sm:py-0 py-2 lg:mt-24 mt-16 disclaimer_bg h-[91px] rounded-[9px] flex items-center justify-center px-4 md:text-left text-center">
      <p className="font-bold md:text-lg text-sm text-white">
        UITA is supported by ads, please disable your adblocker to continue
        supporting UITA
      </p>
    </section>
  );
};

export default Disclaimer;
