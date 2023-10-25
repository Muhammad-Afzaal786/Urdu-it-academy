
import { Fragment, useLocation } from "react";
import DiscoverMore from "@/components/home/DiscoverMore";
import Breadcrumb from "@/ui/Breadcrumb";
import AllCourses from "./AllCourses";

export const metadata = {
  title: "All Courses - Urdu It Academy",
};

export default function Courses() {
  
 
  return (
    <Fragment>
      <Breadcrumb
        pages={[
          { name: "Home", href: "/" },
          { name: "Courses", href: "/courses" },
          
        ]}
      />
      <AllCourses />
      <DiscoverMore />
    </Fragment>
  );
}
