"use client";
import React, { Fragment } from "react";
import DiscoverMore from "@/components/home/DiscoverMore";
import Breadcrumb from "@/ui/Breadcrumb";
import AllAvailableExams from "./AllAvailableExams";
import { useSearchParams } from "next/navigation";

// export const metadata = {
//   title: "Available Exams - Urdu It Academy",
// };

export default function AvailbleExams() {
  const searchParams = useSearchParams();
  return (
    <Fragment>
      <Breadcrumb
        pages={[
          { name: "Home", href: "/" },
          { name: "Courses", href: "/courses" },
          {
            name: searchParams.get("vendorName"),
            href: `/certificates?vendorId=${searchParams.get(
              "vendorId"
            )}&vendorName=${searchParams.get("vendorName")}`,
          },
          { name: searchParams.get("certification_Name"), href: "#" },
        ]}
      />
      <AllAvailableExams searchParams={searchParams} />
      <DiscoverMore />
    </Fragment>
  );
}
