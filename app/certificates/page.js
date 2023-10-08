export const dynamic = "force-dynamic";

import React, { Fragment } from "react";
import DiscoverMore from "@/components/home/DiscoverMore";
import Breadcrumb from "@/ui/Breadcrumb";
import AllCertificates from "./AllCertificates";

export const metadata = {
  title: "Certificates - Urdu It Academy",
};

export default function Certificates({ searchParams }) {
  return (
    <Fragment>
      <Breadcrumb
        pages={[
          { name: "Home", href: "/" },
          { name: "Courses", href: "/courses" },
          { name: searchParams.vendorName, href: "#" },
        ]}
      />
      <AllCertificates searchParams={searchParams} />
      <DiscoverMore />
    </Fragment>
  );
}
