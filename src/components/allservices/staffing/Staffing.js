import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import Heading from "./Heading";

const Staffing = () => {
  return (
    <>
      <div className="bg-white py-16 sm:py-32">
        <Heading />
        <div className="bg-white pt-10">
          <div className="mx-auto max-w-6xl ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:text-center">
              What we offer
            </h2>
            <div className="mx-auto max-w-6xl ">
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6"
              >
                <li className="flex gap-x-3">
                  <BsCheckCircle
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  Contract, Contract to Hire, Temporary, Temporary- to-Hire and
                  Direct Placement Employment Services:
                </li>

                <li className="flex gap-x-3">
                  <BsCheckCircle
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  Our seasoned recruiting team delivers top local talent who are
                  a match for your unique hiring needs. Our temporary,
                  temporary-to-hire and direct placements span a wide range of
                  industries and positions Our experience and rigid screening
                  provides companies with hiring confidence while helping
                  qualified, motivated individuals find rewarding jobs
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white pt-10  mt-1" data-aos="fade-up">
          <div className="mx-auto max-w-6xl ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:text-center">
              Key benefits
            </h2>
          </div>
          <div className="mx-auto max-w-6xl ">
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6"
            >
              <li className="flex gap-x-3">
                <BsCheckCircle
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Provides Coverage for 100% of the locations in India.
              </li>

              <li className="flex gap-x-3">
                <BsCheckCircle
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                We provide our clients with satisfactory result within 24-48
                hours of receiving a requisition.
              </li>

              <li className="flex gap-x-3">
                <BsCheckCircle
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                The candidates that we provide start on the agreed upon start
                date and time
              </li>

              <li className="flex gap-x-3">
                <BsCheckCircle
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Capability to support multiple clients across different
                locations in India.
              </li>
              <li className="flex gap-x-3">
                <BsCheckCircle
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Willingness to make strategic investments for long-term success
                at our clients.
              </li>
              <li className="flex gap-x-3">
                <BsCheckCircle
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Provide a flexible staffing capability to meet changing needs
                quickly.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staffing;
