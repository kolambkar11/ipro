import React from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

import { BsCheckCircle } from "react-icons/bs";
import Heading from "./Heading";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import aboutImg from "../../../assets/cybersecurity-training.png";

const siemtrain = [
  "Our SIEM Training provides comprehensive training on the implementation and management of Security Information and Event Management (SIEM) solutions. Our experienced trainers will provide hands-on training on SIEM tools, best practices, and strategies to help you effectively manage security threats.",
];
const socanal = [
  "Our SOC Analyst Training provides comprehensive training on Security Operations Centre (SOC) operations, including incident management, threat intelligence, and vulnerability management. Our experienced trainers will provide hands-on training on SOC tools and processes, best practices, and strategies to help you effectively manage security threats.",
  "Our training programs are tailored to your specific needs and can be delivered on-site or remotely, depending on your preference. Our experienced trainers are certified and have extensive experience in the cybersecurity industry, ensuring that you receive the highest quality training possible. Contact us today to learn more about our Cybersecurity",
];

const Cybersecuritytraining = () => {
  const navigate = useNavigate();
  function navigateTo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(process.env.REACT_APP_DOMAIN_DIR + "/services/staffing");
  }
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
                  iProtect Cyber Security Training
                </h1>
                <p className="mt-6 text-xl leading-7 text-gray-700">
                  Services At iProtect Cybersecurity Services, we offer
                  customized Cybersecurity Training programs that cater to your
                  Key benefits 18 specific needs. Our training programs are
                  designed to help you and your team stay up-to-date on the
                  latest cybersecurity threats and best practices, providing you
                  with the knowledge and skills needed to mitigate risks and
                  protect your organization&#39;s data.
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
        <div className="bg-white ">
          <div className="grid gap-4 md:grid-cols-2 pb-8 sm:grid-col-1 lg:grid-cols-2">
            <div className="bg-white pt-10">
              <div className="mx-auto max-w-full ">
                <div
                  className="mx-auto max-w-full px-6 lg:px-8 "
                  data-aos="fade-up"
                >
                  <h2 className="text-3xl font-bold tracking-tight all_heading sm:text-4xl">
                    What we offer
                  </h2>
                  <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none service_box_effect">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                      <h3 className="text-2xl font-bold tracking-tight all_heading">
                        SIEM Training:
                      </h3>
                      <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-lg font-semibold leading-6 text-amber-700">
                          What’s included
                        </h4>
                        <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-lg leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6"
                      >
                        {siemtrain.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <BsCheckCircle
                              className="h-6 w-5 flex-none text-amber-700"
                              aria-hidden="true"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="mx-auto max-w-full px-6 lg:px-8"
                  data-aos="fade-up"
                >
                  <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none service_box_effect">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                      <h3 className="text-2xl font-bold tracking-tight all_heading">
                        SOC Analyst Training:
                      </h3>
                      <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-lg font-semibold leading-6 text-amber-700">
                          What’s included
                        </h4>
                        <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-lg leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6"
                      >
                        {socanal.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <BsCheckCircle
                              className="h-6 w-5 flex-none text-amber-700"
                              aria-hidden="true"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-white pt-10  mt-1 px-6 lg:px-8"
              data-aos="fade-up"
            >
              <div className="mx-auto max-w-full ">
                <h2 className="text-3xl font-bold tracking-tight all_heading sm:text-4xl">
                  Key benefits
                </h2>
              </div>
              <div className="mx-auto max-w-full ">
                <div className="mx-auto max-w-full" data-aos="fade-up">
                  <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none service_box_effect">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                      <h3 className="text-2xl font-bold tracking-tight all_heading">
                        Enhanced Cybersecurity:
                      </h3>
                      <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-lg font-semibold leading-6 text-amber-700">
                          What’s included
                        </h4>
                        <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-lg leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6"
                      >
                        <li className="flex gap-x-3">
                          <BsCheckCircle
                            className="h-6 w-5 flex-none text-amber-700"
                            aria-hidden="true"
                          />
                          Our Cybersecurity Training programs provide you and
                          your team with the knowledge and skills needed to
                          identify and mitigate cybersecurity threats, enhancing
                          your organization&#39;s overall security posture.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-full ">
                <div className="mx-auto max-w-full" data-aos="fade-up">
                  <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none service_box_effect">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                      <h3 className="text-2xl font-bold tracking-tight all_heading">
                        Compliance:
                      </h3>
                      <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-lg font-semibold leading-6 text-amber-700">
                          What’s included
                        </h4>
                        <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-lg leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6"
                      >
                        <li className="flex gap-x-3">
                          <BsCheckCircle
                            className="h-6 w-5 flex-none text-amber-700"
                            aria-hidden="true"
                          />
                          Our Cybersecurity Training programs can help you
                          achieve compliance with industry regulations such as
                          HIPAA, PCI-DSS, and GDPR.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-full ">
                <div className="mx-auto max-w-full" data-aos="fade-up">
                  <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none service_box_effect">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                      <h3 className="text-2xl font-bold tracking-tight all_heading">
                        Cost-Effective:
                      </h3>
                      <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-lg font-semibold leading-6 text-amber-700">
                          What’s included
                        </h4>
                        <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-lg leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6"
                      >
                        <li className="flex gap-x-3">
                          <BsCheckCircle
                            className="h-6 w-5 flex-none text-amber-700"
                            aria-hidden="true"
                          />
                          Our Cybersecurity Training programs are
                          cost-effective, providing you with the knowledge and
                          skills needed to manage security threats without
                          having to hire additional staff.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-full ">
                <div className="mx-auto max-w-full" data-aos="fade-up">
                  <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none service_box_effect">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                      <h3 className="text-2xl font-bold tracking-tight all_heading">
                        Customized Training Programs:
                      </h3>
                      <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-lg font-semibold leading-6 text-amber-700">
                          What’s included
                        </h4>
                        <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-lg leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6"
                      >
                        <li className="flex gap-x-3">
                          <BsCheckCircle
                            className="h-6 w-5 flex-none text-amber-700"
                            aria-hidden="true"
                          />
                          Our training programs are tailored to your specific
                          needs, providing you with training that is relevant to
                          your organization&#39;s unique security challenges.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-full ">
                <div className="mx-auto max-w-full" data-aos="fade-up">
                  <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none service_box_effect">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                      <h3 className="text-2xl font-bold tracking-tight all_heading">
                        Experienced Trainers:
                      </h3>
                      <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-lg font-semibold leading-6 text-amber-700">
                          What’s included
                        </h4>
                        <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-lg leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                      >
                        <li className="flex gap-x-3">
                          <BsCheckCircle
                            className="h-6 w-5 flex-none text-amber-700"
                            aria-hidden="true"
                          />
                          Our experienced trainers are certified and have
                          extensive experience in the cybersecurity industry,
                          ensuring that you receive the highest quality training
                          possible.
                        </li>
                        <li className="flex gap-x-3">
                          <BsCheckCircle
                            className="h-6 w-5 flex-none text-amber-700"
                            aria-hidden="true"
                          />{" "}
                          Contact us today to learn more about our Cybersecurity
                          Training services and how we can help you and your
                          team stay secure.
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

export default Cybersecuritytraining;
