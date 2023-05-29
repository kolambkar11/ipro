import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import Heading from "./Heading";
import aboutImg from "../../../assets/services/staffing.png";
const Staffing = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  iProtect Staffing Services
                </h1>
                <p className="mt-6 text-xl leading-7 text-gray-700">
                  <b>THE RIGHT CANDIDATE THE FIRST TIME.</b> We apply extensive
                  expertise to help our clients successfully solve the personnel
                  challenges they face, while giving our Candidates the
                  rewarding opportunities they’re looking for. Our goal is
                  helping clients achieve business objectives and bottom-line
                  success by providing experienced IT and NON - IT professionals
                  at the right time, and at the right place to meet their
                  mission critical operation needs. Our competency is to
                  serve/provide solutions in 48 hour’s turnaround time & our
                  capabilities allow us to support technology challenges,
                  timeframes and budgets of any organization.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden mb-hide">
            <img
              className="w-auto max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
              src={aboutImg}
              alt=""
            />
          </div>
          {/* mobile */}
          <div className=" mb-show">
            <img
              className="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
              src={aboutImg}
              alt=""
            />
          </div>
        </div>
        <div className="bg-white ">
          <div className="bg-white pt-10">
            <div className="grid gap-4 md:grid-cols-2 pb-8 sm:grid-col-1 lg:grid-cols-2">
              <div>
                <div className="mx-auto max-w-full ">
                  <h2
                    className="text-3xl font-bold tracking-tight all_heading sm:text-4xl lg:px-8 sm:px-4"
                    data-aos="fade-up"
                  >
                    What we offer
                  </h2>
                  <div className="mx-auto max-w-full sm:px-4 lg:px-8">
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
                          temporary, temporary- to-hire and direct placements
                          span a wide range of industries and positions Our
                          experience and rigid screening provides companies with
                          hiring confidence while helping qualified, motivated
                          individuals find rewarding jobs.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="bg-white  mt-1 sm:px-4 lg:px-8"
                  data-aos="fade-up"
                >
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
                          The candidates that we provide start on the agreed
                          upon start date and time
                        </li>

                        <li className="flex gap-x-3">
                          <BsCheckCircle
                            className="h-6 w-5 flex-none text-amber-700"
                            aria-hidden="true"
                          />
                          Capability to support multiple clients across
                          different locations in India.
                        </li>
                        <li className="flex gap-x-3">
                          <BsCheckCircle
                            className="h-6 w-5 flex-none text-amber-700"
                            aria-hidden="true"
                          />
                          Willingness to make strategic investments for
                          long-term success at our clients.
                        </li>
                        <li className="flex gap-x-3">
                          <BsCheckCircle
                            className="h-6 w-5 flex-none text-amber-700"
                            aria-hidden="true"
                          />
                          Provide a flexible staffing capability to meet
                          changing needs quickly.
                        </li>
                      </ul>
                    </div>
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
