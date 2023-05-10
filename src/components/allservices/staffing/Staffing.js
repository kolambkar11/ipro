import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import Heading from "./Heading";

const Staffing = () => {
  return (
    <>
      <div className="bg-white ">
        <Heading />
        <div className="bg-white pt-10">
          <div className="grid gap-4 md:grid-cols-2 pb-8 sm:grid-col-1 lg:grid-cols-2">
            <div>
              <div className="mx-auto max-w-full ">
                <h2
                  className="text-3xl font-bold tracking-tight all_heading sm:text-4xl px-6 lg:px-8"
                  data-aos="fade-up"
                >
                  What we offer
                </h2>
                <div className="mx-auto max-w-full px-6 lg:px-8">
                  <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none service_box_effect staffing_css_padding">
                    <ul
                      role="list"
                      className="mt-4 grid grid-cols-1 gap-4 text-lg leading-6 all_heading sm:grid-cols-1 sm:gap-6"
                    >
                      <li className="flex gap-x-3" data-aos="fade-up">
                        <BsCheckCircle
                          className="h-6 w-5 flex-none text-amber-700"
                          aria-hidden="true"
                        />
                        Contract, Contract to Hire, Temporary, Temporary- to-
                        Hire and Direct Placement Employment Services:
                      </li>

                      <li className="flex gap-x-3" data-aos="fade-up">
                        <BsCheckCircle
                          className="h-6 w-5 flex-none text-amber-700"
                          aria-hidden="true"
                        />
                        Our seasoned recruiting team delivers top local talent
                        who are a match for your unique hiring needs. Our
                        temporary, temporary- to-hire and direct placements span
                        a wide range of industries and positions Our experience
                        and rigid screening provides companies with hiring
                        confidence while helping qualified, motivated
                        individuals find rewarding jobs.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white  mt-1 px-6 lg:px-8" data-aos="fade-up">
                <div className="mx-auto max-w-full ">
                  <h2 className="text-3xl font-bold tracking-tight all_heading sm:text-4xl">
                    Key benefits
                  </h2>
                </div>
                <div className="mx-auto max-w-full ">
                  <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none service_box_effect staffing_css_padding">
                    <ul
                      role="list"
                      className="mt-8 grid grid-cols-1 gap-4 text-lg leading-6 all_heading sm:grid-cols-1 sm:gap-6"
                    >
                      <li className="flex gap-x-3">
                        <BsCheckCircle
                          className="h-6 w-5 flex-none text-amber-700"
                          aria-hidden="true"
                        />
                        Provides Coverage for 100% of the locations in India.
                      </li>

                      <li className="flex gap-x-3">
                        <BsCheckCircle
                          className="h-6 w-5 flex-none text-amber-700"
                          aria-hidden="true"
                        />
                        We provide our clients with satisfactory result within
                        24-48 hours of receiving a requisition.
                      </li>

                      <li className="flex gap-x-3">
                        <BsCheckCircle
                          className="h-6 w-5 flex-none text-amber-700"
                          aria-hidden="true"
                        />
                        The candidates that we provide start on the agreed upon
                        start date and time
                      </li>

                      <li className="flex gap-x-3">
                        <BsCheckCircle
                          className="h-6 w-5 flex-none text-amber-700"
                          aria-hidden="true"
                        />
                        Capability to support multiple clients across different
                        locations in India.
                      </li>
                      <li className="flex gap-x-3">
                        <BsCheckCircle
                          className="h-6 w-5 flex-none text-amber-700"
                          aria-hidden="true"
                        />
                        Willingness to make strategic investments for long-term
                        success at our clients.
                      </li>
                      <li className="flex gap-x-3">
                        <BsCheckCircle
                          className="h-6 w-5 flex-none text-amber-700"
                          aria-hidden="true"
                        />
                        Provide a flexible staffing capability to meet changing
                        needs quickly.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staffing;
