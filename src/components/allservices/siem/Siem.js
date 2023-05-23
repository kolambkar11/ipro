import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import Heading from "./Heading";
import Siemdeployment from "./Siemdeployment";
import Siemadministrationmaintainence from "./Siemadministrationmaintainence";
import Siemkeybenefits from "./Siemkeybenefits";
import Siemtraining from "./Siemtraining";
import aboutImg from "../../../assets/services/siem-service.png";

const siemtraining = [
  "iProtect SIEM consultants are ready to share their knowledge with the customer’s security team in SIEM system management with a series of practice- oriented training sessions. Understanding the importance of the face-to-face contact between trainers and trainees, iProtect offers in-house training sessions on the customer’s SIEM deployment. Depending on the level of the customer’s security staff’s experience in SIEM system management, iProtect certified consultants organize and conduct two tailored SIEM training sessions: Fundamentals and Advanced.",
];

function Siem() {
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
                  Security information and event management (SIEM)
                </h1>
                <p className="mt-6 text-xl leading-7 text-gray-700">
                  Security Information and Event Management is a set of
                  integrated log management and monitoring tools that help
                  organizations detect targeted attacks and data breaches. SIEM
                  systems aggregate and analyses log event information from
                  devices, infrastructure, systems and applications to detect
                  suspicious activity inside networks. When anomalous behavior
                  is identified, an alert is generated for investigation.
                </p>
                <p className="mt-6 text-xl leading-7 text-gray-700">
                  iProtect SIEM services provides the people and intelligence
                  your organization needs to get the most out of SIEM. Certified
                  professionals to deploy and manage a range of SIEM solutions,
                  our Security Operations Centre (SOC) professionals work as an
                  extension of your in-house team to enhance threat detection
                  and response capabilities and alleviate the burden of
                  analyzing and investigating security alerts 24/7.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-auto max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
              src={aboutImg}
              alt=""
            />
          </div>
        </div>
        <div className="bg-white pb-8 sm:pb-8">
          <div className="bg-white pt-10">
            <div className="mx-auto max-w-full px-6 lg:px-8">
              <div className="grid gap-4 md:grid-cols-2 pb-8 sm:grid-col-1 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight all_heading sm:text-4xl">
                    What we offer
                  </h2>

                  <Siemdeployment />
                  <Siemadministrationmaintainence />
                  <Siemtraining />
                </div>
                <div>
                  <Siemkeybenefits />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Siem;
