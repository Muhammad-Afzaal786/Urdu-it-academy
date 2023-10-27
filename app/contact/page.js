import { Fragment } from "react";
import Image from "next/image";
import Breadcrumb from "@/ui/Breadcrumb";

// export const metadata = {
//   title: "Contact Us - Urdu It Academy",
// };

export default function Contact() {
  return (
    <Fragment>
      <Breadcrumb
        pages={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      {/* contact us*/}
      <section className="lg:pt-[50px] pt-6">
        {/* section header */}
        <div className="flex flex-col space-y-4 md:space-y-8">
          <h2 className="font-bold md:text-left text-center lg:text-4xl md:text-2xl text-xl text-[#000000]">
            Contact Us
          </h2>
          <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C]">
            We love to hear from you, we welcome your feedback and contribution
            to Urdu IT Academy.
            <br />
            Please find the resources on this page to contact us.
          </p>
        </div>
        {/* contact content */}
        <div className="flex flex-col space-y-8 md:space-y-16 pt-6 md:pt-12">
          {/* email */}
          <div className="flex flex-col md:max-w-[1099]">
            <h3 className="text-[#000000] font-bold md:text-2xl text-lg flex items-center mb-6">
              <Image
                src="/envelope_icon.png"
                alt="Email Icon"
                width={32}
                height={32}
                className="mr-4"
              />
              Email
            </h3>
            <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C]">
              Due to high Volume of emails, we try our level best to reply
              within 48-72 hours, Monday through Friday{" "}
              <span className="font-bold text-[#0063F6]">
                admin@urduitacademy.com
              </span>
            </p>
            <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C] mt-4">
              Please note this email address of for suggestion, Volunteer work
              and feedback only , If you have any technical question please post
              it on Facebook page or Urdu IT Discussion forum on our webpage.
            </p>
          </div>
          {/* career advice */}
          <div className="flex flex-col md:max-w-[1099]">
            <h3 className="text-[#000000] font-bold md:text-2xl text-lg flex items-center mb-6">
              <Image
                src="/compass_icon.png"
                alt="Compass Icon"
                width={32}
                height={32}
                className="mr-4"
              />
              Free Career Advice
            </h3>
            <div className="space-y-4">
              <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C]">
                Are you looking for a job? Planning a career change? Or just
                wanting to learn something new? Most great things begin with a
                plan. Your career should be no different. A plan will give you
                something to work towards. It'll also help you make the most of
                the opportunities that come your way.
              </p>
              <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C]">
                Free Career advice for everyone , If you have any question
                related to your career / new start-up business / Interviewing
                please feel free to send us an email on the address below.
              </p>
              <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C]">
                Please mention your full name location and questions you have in
                detailed and brief email, so we can guide you properly.{" "}
                <span className="font-bold text-[#0063F6]">
                  careeradvice@urduitacademy.com
                </span>
              </p>
            </div>
          </div>
          {/* volunteer */}
          <div className="flex flex-col md:max-w-[1099]">
            <h3 className="text-[#000000] font-bold md:text-2xl text-lg flex items-center mb-6">
              <Image
                src="/handpalm_icon.png"
                alt="HandPalm Icon"
                width={32}
                height={32}
                className="mr-4"
              />
              Volunteer
            </h3>
            <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C]">
              For volunteer work and help to record and develop more advanced
              series , just drop email with subject title of Volunteer. Email at{" "}
              <span className="font-bold text-[#0063F6]">
                admin@urduitacademy.com
              </span>
            </p>
          </div>
          {/* CV Review */}
          <div className="flex flex-col md:max-w-[1099]">
            <h3 className="text-[#000000] font-bold md:text-2xl text-lg flex items-center mb-6">
              <Image
                src="/files_icon.png"
                alt="Files Icon"
                width={32}
                height={32}
                className="mr-4"
              />
              CV Review
            </h3>
            <p className="md:text-left text-center font-normal text-sm sm:text-base text-[#1C1C1C]">
              We'll work with you to create the perfect CV to help you secure
              your dream role. Just drop email with attach CV and subject title
              of CV Review. Email at{" "}
              <span className="font-bold text-[#0063F6]">
                review@urduitacademy.com
              </span>
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
