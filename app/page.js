import { Fragment } from "react";
import OurCourses from "@/components/home/OurCourses";
import Hero from "@/components/home/Hero";
import Disclaimer from "@/components/home/Disclaimer";
import NewUploads from "@/components/home/NewUploads";
import Blog from "@/components/home/Blog";
import DiscoverMore from "@/components/home/DiscoverMore";
import Testimonials from "@/components/home/Testimonials";
//import HelpPage from "./help/page";
//import Blogs from "@/components/Blogs";

export const metadata = {
  title: "Home - Urdu It Academy",
};

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <OurCourses />
      <Disclaimer />
      <NewUploads />
      <Blog />
    
      <DiscoverMore />
    
      <Testimonials />
    </Fragment>
  );
}
