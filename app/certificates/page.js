"use client"
import React, { Fragment } from "react";
import DiscoverMore from "@/components/home/DiscoverMore";
import Breadcrumb from "@/ui/Breadcrumb";
import AllCertificates from "./AllCertificates";
import { useSearchParams } from 'next/navigation'

export const metadata = {
  title: "Certificates - Urdu It Academy",
};

export default function Certificates() {
  const searchParams = useSearchParams();
  return (
    <Fragment>
      <Breadcrumb
        pages={[
          { name: "Home", href: "/" },
          { name: "Courses", href: "/courses" },
          { name: searchParams.get('vendorName'), href: "#" },
        ]}
      />
      <AllCertificates searchParams={searchParams} />
      <DiscoverMore />
    </Fragment>
  );
}
