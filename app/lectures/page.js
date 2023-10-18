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
  
  console.log(searchParams, " Search params data")
  return (
    <Fragment>
      <Breadcrumb
        pages={[
          { name: "Home", href: "/" },
          { name: "Courses", href: `/courses?vendorId=${searchParams.get("vendorId")}&vendorName=${searchParams.get('vendorName')}` },
          { name: searchParams.get('vendorName') || "Microsoft", href: "#" },
          {
            name: searchParams.get('certification_Name'),
            href: `/available-exams?certificationId=${searchParams.get('certificationId')}&vendorName=${searchParams.get('vendorName')}&certification_Name=${searchParams.get('certification_Name')}&status=${searchParams.get('status')}`,
          },
        
          { name: searchParams.get('exam_Name'), href: "#" },
        ]}
      />
      <AllLectures searchParams={searchParams} />

      <DiscoverMore />
    </Fragment>
  );
}
