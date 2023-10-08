"use client";
import React, { useEffect, useState } from "react";
import { addFaqData } from "../Apicall/endPoints";
import { SC } from "../Apicall/ServerCall";
import Breadcrumb from "@/ui/Breadcrumb";

function Faq() {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    getFaqData();
  }, []);
  const getFaqData = () => {
    SC.getCall(addFaqData).then((res) => {
      setFaqData(res.data.data);
    });
  };
  return (
    <>
      <Breadcrumb
        pages={[
          { name: "Home", href: "/" },
          { name: "FAQs", href: "/faq" },
        ]}
      />

      <section className="lg:pt-15 pt-16 ">
        <h2 className="font-bold md:text-start text-center lg:text-4xl md:text-2xl text-xl text-[#000] mb-10">
          FAQs
        </h2>

        {faqData &&
          faqData.map((val, id) => {
            return (
              <>
                <div div className="mb-10 ">
                  <h3 className="font-bold lg:text-2xl py-3">{val.question}</h3>
                  <p>{val.answer}</p>
                </div>
              </>
            );
          })}
      </section>
    </>
  );
}

export default Faq;
