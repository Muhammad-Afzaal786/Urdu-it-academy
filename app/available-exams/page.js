export const dynamic = "force-dynamic";

import React, { Fragment } from "react";
import DiscoverMore from "@/components/home/DiscoverMore";
import Breadcrumb from "@/ui/Breadcrumb";
import AllAvailableExams from "./AllAvailableExams";

export const metadata = {
  title: "Available Exams - Urdu It Academy",
};

export default function AvailbleExams({ searchParams }) {
  return (
    <Fragment>
      <Breadcrumb
        pages={[
          { name: "Home", href: "/" },
          { name: "Courses", href: "/courses" },
          {
            name: searchParams.vendorName,
            href: `/certificates?vendorId=${searchParams.vendorId}&vendorName=${searchParams.vendorName}`,
          },
          { name: searchParams.certification_Name, href: "#" },
        ]}
      />
      <AllAvailableExams searchParams={searchParams} />
      <DiscoverMore />
    </Fragment>
  );
}
