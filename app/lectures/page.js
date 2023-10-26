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
          {
            name: searchParams.get("vendorName"),
            href: `/certificates?vendorId=${searchParams.get(
              "vendorId"
            )}&vendorName=${searchParams.get("vendorName")}`,
          },
          {
            name: searchParams.get("certification_Name"),
            href: `/available-exams?certificationId=${searchParams.get(
              "certificationId"
            )}&certification_Name=${searchParams.get(
              "certification_Name"
            )}&examId=${searchParams.get(
              "examId"
            )}&exam_Name=${searchParams.get(
              "exam_Name"
            )}&vendorId=${searchParams.get(
              "vendorId"
            )}&vendorName=${searchParams.get(
              "vendorName"
            )}&status=${searchParams.get("status")}`,
          },

          { name: searchParams.get("exam_Name"), href: "#" },
        ]}
      />
      <AllLectures searchParams={searchParams} />

      <DiscoverMore />
    </Fragment>
  );
}
