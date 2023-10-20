"use client"
import { Fragment } from "react";
import DiscoverMore from "@/components/home/DiscoverMore";
import AllLectures from "./AllLectures";
import Breadcrumb from "@/ui/Breadcrumb";
import { useSearchParams } from 'next/navigation'

export const metadata = {
  title: "Lectures - Urdu It Academy",
};

export default function Lectures() {
  const searchParams = useSearchParams();
  console.log(searchParams.get("vendorName"), ".....................")
  
  console.log(searchParams, " Search params data")
  return (
    <Fragment>
      <Breadcrumb
        pages={[
          { name: "Home", href: "/" },
          { name: "Courses", href: "/couese" },
          { name: searchParams.get('vendorName'), href: "#" },
          {
            name: searchParams.get('certification_Name'),
            href: `/available-exams?certificationId=${searchParams.certificationId}&vendorName=${searchParams.vendorName}&certification_Name=${searchParams.certification_Name}&status=${searchParams.status}`,
          },
        
          { name: searchParams.get('exam_Name'), href: "#" },
        ]}
      />
      <AllLectures searchParams={searchParams} />

      <DiscoverMore />
    </Fragment>
  );
}
