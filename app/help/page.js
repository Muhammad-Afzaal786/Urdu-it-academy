"use client";
import Breadcrumb from "@/ui/Breadcrumb";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { addHelpData } from "../Apicall/endPoints";
import { SC } from "../Apicall/ServerCall";
import Link from "next/link";
import { dataButton } from "@/components/helper/helper";

function HelpPage() {
  let vender_Name;
  let index = 0;
  const [data, setData] = useState([]);

  const [vendor, setVendor] = useState("");
  const [filterData, setFilterData] = useState(data);
  const [selectedButton, setSelectedButton] = useState("all");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    SC.getCall(addHelpData).then((res) => {
      setFilterData(res.data.data);
      setData(res.data.data);
      vender_Name = ""; //res.data.data[0].vendor_Name;
    });
  };

  const getButtonValues = (id) => {
    // Set the selected button
    console.log(id, "id");
    if (id === "#") {
      setFilterData(data);
    } else {
      var filterDataas = data;
      filterDataas = data.filter((val) => {
        return val.link_description[0] == id;
      });

      setFilterData(filterDataas);
    }
  };

  return (
    <>
      <Breadcrumb
        pages={[
          { name: "Home", href: "/" },
          { name: "Help", href: "/help" },
        ]}
      />

      <section className="lg:pt-15 pt-16">
        <div className="heading_help">
          <h2 className="font-bold md:text-center text-center lg:text-5xl md:text-2xl text-xl text-[#3399cc]">
            Useful Links
          </h2>
        </div>

        <div className="pt-10">
          {dataButton &&
            dataButton.map((elem, idx) => {
              return (
                <button
                  key={elem.id}
                  onClick={() => getButtonValues(elem.name)}
                  className={`text-gray-900 bg-white border border-gray-100 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2 dark:bg-light-800 dark:text-black dark:border-gray-600 dark:hover:bg-[#ecf0f1]-700 focus:bg-[#ecf0f1]-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 dark:active:ring-gray-700${
                    selectedButton === elem.name ? "bg-[#ecf0f1]-700" : ""
                  }`}>
                  {elem.name}
                </button>
              );
            })}
        </div>
        <div>
          <div className="py-10 ">
            {filterData.map((elem, idx) => {
              if (elem.vendor_Name != vender_Name) {
                index = 1;
                vender_Name = elem.vendor_Name;
                return (
                  <div key={idx}>
                    <h2 className="font-bold md:text-left text-center lg:text-xl md:text-xl text-xl text-[#cc3333] pt-10 pb-2">
                      {vender_Name}
                    </h2>
                    <p className="text-[#337ab7] focus:text-[#cc3333] hover:text-[#cc3333] text-sm">
                      <Link href={elem.link_address}>
                        {elem.link_description}
                      </Link>
                    </p>
                  </div>
                );
              } else {
                index = index + 1;

                if (index <= 15) {
                  return (
                    <div>
                      <p className="text-[#337ab7] focus:text-[#cc3333] hover:text-[#cc3333] text-sm mb-1 ">
                        <Link href={elem.link_address}>
                          {elem.link_description}
                        </Link>
                      </p>
                    </div>
                  );
                } else {
                  return (
                    <div className="relative top-[-350px] right-[-350px]">
                      <div className=" ">
                        <p className="text-[#337ab7] focus:text-[#cc3333] hover:text-[#cc3333] text-sm mb-1 pl-20  ">
                          <Link href={elem.link_address}>
                            {elem.link_description}
                          </Link>
                        </p>
                      </div>
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default HelpPage;
