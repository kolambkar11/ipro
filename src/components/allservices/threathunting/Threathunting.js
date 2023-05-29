import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import Heading from "./Heading";
import aboutImg from "../../../assets/services/threat-hunting.png";
const Threathunting = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-16 sm:py-16 lg:overflow-visible lg:px-0">
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
                  iProtect Threat Hunting Services
                </h1>
                <p className="mt-6 text-xl leading-7 text-gray-700">
                  Security teams across all industries are working hard building
                  systems to provide comprehensive protection against rapidly
                  evolving cyber threats. But most of these take an «alert»
                  driven approach to cybersecurity incidents, reacting only
                  after an incident has already taken place.
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
          <div className="grid gap-4 md:grid-cols-2 pb-8 sm:grid-col-1 lg:grid-cols-2">
            <div>
              <div className="bg-white pt-10">
                <div className="mx-auto max-w-full sm:px-4 lg:px-8">
                  <h2
                    className="text-3xl font-bold tracking-tight all_heading sm:text-4xl"
                    data-aos="fade-up"
                  >
                    What we offer
                  </h2>
                  <div className="mx-auto max-w-full mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none px-8 pb-8  service_box_effect serviceboxKey">
                    <ul
                      role="list"
                      className="mt-8 grid grid-cols-1 gap-4 text-lg leading-6 all_heading sm:grid-cols-1 sm:gap-6"
                    >
                      <li className="flex gap-x-3" data-aos="fade-up">
                        <BsCheckCircle
                          className="h-6 w-5 flex-none text-amber-700"
                          aria-hidden="true"
                        />
                        iProtect Threat Hunting Services help to uncover
                        advanced threats hiding within the organization, using
                        proactive threat hunting techniques carried out by
                        highly qualified and experienced security professionals.
                      </li>

                      <li className="flex gap-x-3" data-aos="fade-up">
                        <BsCheckCircle
                          className="h-6 w-5 flex-none text-amber-700"
                          aria-hidden="true"
                        />
                        iProtect Threat Hunting Services deploy a unique range
                        of advanced technical measures to detect and prevent
                        targeted attacks on your organization. The service
                        includes round-the clock monitoring by experts and the
                        continuous analysis of cyberthreat data, ensuring the
                        real-time detection of both known and new cyberespionage
                        and cybercriminal campaigns targeting critical
                        information systems.
                      </li>

                      <li className="flex gap-x-3" data-aos="fade-up">
                        <BsCheckCircle
                          className="h-6 w-5 flex-none text-amber-700"
                          aria-hidden="true"
                        />
                        iProtect Threat Hunting Services deploy a unique range
                        of advanced technical measures to detect and prevent
                        targeted attacks on your organization. The service
                        includes round-the clock monitoring by experts and the
                        continuous analysis of cyberthreat data, ensuring the
                        real-time detection of both known and new cyberespionage
                        and cybercriminal campaigns targeting critical
                        information systems.
                      </li>

                      <li className="flex gap-x-3" data-aos="fade-up">
                        <BsCheckCircle
                          className="h-6 w-5 flex-none text-amber-700"
                          aria-hidden="true"
                        />
                        Understand, Deploy, and Hunt with MITRE’s ATT&amp;CK
                        Framework for early detection of hidden adversaries. To
                        minimize the impact of security breaches, it is
                        essential to identify them as early as possible. Cyber
                        threat hunting facilitates the early detection of
                        attacks, using high-fidelity telemetry and the latest
                        threat intelligence to proactively identify the
                        activities of known and unknown adversaries.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="bg-white pt-10  mt-1 sm:px-4 lg:px-8 "
                data-aos="fade-up"
              >
                <div className="mx-auto max-w-full ">
                  <h2 className="text-3xl font-bold tracking-tight all_heading sm:text-4xl ">
                    Key benefits
                  </h2>
                </div>
                <div className="mx-auto max-w-full mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none px-8 pb-8  service_box_effect serviceboxKey">
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-lg leading-6 all_heading sm:grid-cols-1 sm:gap-6"
                  >
                    <li className="flex gap-x-3">
                      <BsCheckCircle
                        className="h-6 w-5 flex-none text-amber-700"
                        aria-hidden="true"
                      />
                      The timely and accurate detection of non-malware attacks,
                      attacks involving previously unknown tools and attacks
                      exploiting zero-day vulnerabilities.{" "}
                    </li>

                    <li className="flex gap-x-3">
                      <BsCheckCircle
                        className="h-6 w-5 flex-none text-amber-700"
                        aria-hidden="true"
                      />
                      Immediate protection against any detected threat
                    </li>

                    <li className="flex gap-x-3">
                      <BsCheckCircle
                        className="h-6 w-5 flex-none text-amber-700"
                        aria-hidden="true"
                      />
                      Retrospective analysis of incidents and threat hunting,
                      including the methods and technologies used by threat
                      actors against your organization
                    </li>

                    <li className="flex gap-x-3">
                      <BsCheckCircle
                        className="h-6 w-5 flex-none text-amber-700"
                        aria-hidden="true"
                      />
                      Our experienced team of Red and Blue Team security
                      professionals have a deep knowledge of offensive security
                      and apply this knowledge to help better identify unknown
                      threats.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Threathunting;
