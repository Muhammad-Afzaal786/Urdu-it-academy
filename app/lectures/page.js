export const dynamic = "force-dynamic";

import { Fragment } from "react";
import DiscoverMore from "@/components/home/DiscoverMore";
import AllLectures from "./AllLectures";
import Breadcrumb from "@/ui/Breadcrumb";

export const metadata = {
  title: "Lectures - Urdu It Academy",
};

export default function Lectures({ searchParams }) {
  return (
    <Fragment>
      <Breadcrumb
        pages={[
          { name: "Home", href: "/" },
          { name: "Courses", href: "/courses" },
          { name: searchParams.vendorName, href: "#" },
          {
            name: searchParams.certification_Name,
            href: `/available-exams?certificationId=${searchParams.certificationId}&vendorName=${searchParams.vendorName}&certification_Name=${searchParams.certification_Name}&status=${searchParams.status}`,
          },
          { name: searchParams.exam_Name, href: "#" },
        ]}
      />
      <AllLectures searchParams={searchParams} />

      <DiscoverMore />
    </Fragment>
  );
}
