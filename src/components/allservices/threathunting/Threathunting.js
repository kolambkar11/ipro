import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import Heading from "./Heading";

const Threathunting = () => {
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
                  iProtect Threat Hunting Services help to uncover advanced
                  threats hiding within the organization, using proactive threat
                  hunting techniques carried out by highly qualified and
                  experienced security professionals.
                </li>

                <li className="flex gap-x-3">
                  <BsCheckCircle
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  iProtect Threat Hunting Services deploy a unique range of
                  advanced technical measures to detect and prevent targeted
                  attacks on your organization. The service includes round-the
                  clock monitoring by experts and the continuous analysis of
                  cyberthreat data, ensuring the real-time detection of both
                  known and new cyberespionage and cybercriminal campaigns
                  targeting critical information systems.
                </li>

                <li className="flex gap-x-3">
                  <BsCheckCircle
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  iProtect Threat Hunting Services deploy a unique range of
                  advanced technical measures to detect and prevent targeted
                  attacks on your organization. The service includes round-the
                  clock monitoring by experts and the continuous analysis of
                  cyberthreat data, ensuring the real-time detection of both
                  known and new cyberespionage and cybercriminal campaigns
                  targeting critical information systems.
                </li>

                <li className="flex gap-x-3">
                  <BsCheckCircle
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  Understand, Deploy, and Hunt with MITRE’s ATT&CK Framework for
                  early detection of hidden adversaries. To minimize the impact
                  of security breaches, it is essential to identify them as
                  early as possible. Cyber threat hunting facilitates the early
                  detection of attacks, using high-fidelity telemetry and the
                  latest threat intelligence to proactively identify the
                  activities of known and unknown adversaries.
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
                The timely and accurate detection of non-malware attacks,
                attacks involving previously unknown tools and attacks
                exploiting zero-day vulnerabilities.
              </li>

              <li className="flex gap-x-3">
                <BsCheckCircle
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Immediate protection against any detected threat
              </li>

              <li className="flex gap-x-3">
                <BsCheckCircle
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Retrospective analysis of incidents and threat hunting,
                including the methods and technologies used by threat actors
                against your organization
              </li>

              <li className="flex gap-x-3">
                <BsCheckCircle
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                Our experienced team of Red and Blue Team security professionals
                have a deep knowledge of offensive security and apply this
                knowledge to help better identify unknown threats.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Threathunting;
