"use client";
import { Fragment } from "react";
import DiscoverMore from "@/components/home/DiscoverMore";
import AllLectures from "./AllLectures";
import Breadcrumb from "@/ui/Breadcrumb";
import { useSearchParams } from "next/navigation";

export const metadata = {
  title: "Lectures - Urdu It Academy",
};

export default function Lectures() {
  const searchParams = useSearchParams();
  console.log(searchParams.get("vendorId"));

  return (
    <Fragment>
      <Breadcrumb
        pages={[
          { name: "Home", href: "/" },
          { name: "Courses", href: "/courses" },
          { name: searchParams.get("vendorName"), href: "#" },
          {
            name: searchParams.get("certification_Name"),
            href: `/available-exams?certificationId=${searchParams.get(
              "certificationId"
            )}&vendorId=${searchParams.get(
              "vendorId"
            )}&vendorName=${searchParams.get(
              "vendorName"
            )}&certification_Name=${searchParams.get(
              "certification_Name"
            )}&status=${searchParams.get("status")}&examId=${searchParams.get(
              "examId"
            )}&exam_Name=${searchParams.get("exam_Name")}`,
          },

          { name: searchParams.get("exam_Name"), href: "#" },
        ]}
      />
      <AllLectures searchParams={searchParams} />

      <DiscoverMore />
    </Fragment>
  );
}
