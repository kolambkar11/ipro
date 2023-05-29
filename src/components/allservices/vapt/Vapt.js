import React from "react";
import Heading from "./Heading";
import Externalpt from "./Externalpt";
import Internalpt from "./Internalpt";
import Socialengineering from "./Socialengineering";
import { BsCheckCircle } from "react-icons/bs";
import aboutImg from "../../../assets/services/vapt.png";

const Vapt = () => {
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
                  iProtect Vapt
                </h1>
                <p className="mt-6 text-xl leading-7 text-gray-700">
                  Vulnerability Assessment and Penetration Testing services
                  ensuring that your IT infrastructure is fully secured against
                  potential cyberattack is an ongoing challenge for any
                  organization, but even more so for large enterprises with
                  perhaps thousands of employees, hundreds of information
                  systems, and multiple locations worldwide.
                </p>
                <p className="mt-6 text-xl leading-7 text-gray-700">
                  Penetration testing is a practical demonstration of possible.
                  attack scenarios where a malicious actor may attempt to bypass
                  security controls in your corporate network to obtain high
                  privileges in important systems.
                </p>
                <p className="mt-6 text-xl leading-7 text-gray-700">
                  iProtect’s Penetration Testing gives you a greater
                  understanding of security flaws in your infrastructure,
                  revealing vulnerabilities, analyzing the possible consequences
                  of different forms of attack, evaluating the effectiveness of
                  your current security measures and suggesting remedial actions
                  and improvements.
                </p>
                <p className="mt-6 text-xl leading-7 text-gray-700">
                  Penetration Testing from iProtect helps you and your
                  organization to:
                  <li>
                    Identify the weakest points in your network, so you can make
                    fully informed decisions about where best to focus your
                    attention and budget to mitigate future risk.
                  </li>
                  <li>
                    Avoid financial, operational, and reputational losses caused
                    by cyber-attacks by preventing these attacks from ever
                    happening through proactively detecting and fixing
                    vulnerabilities.
                  </li>
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
                  <p
                    className="mt-6 text-lg leading-8 all_heading"
                    data-aos="fade-up"
                  >
                    Depending on your needs and your IT infrastructure, you may
                    choose to employ any or all these Services.
                  </p>
                </div>
              </div>
              <Externalpt />
              <Internalpt />
              <Socialengineering />
            </div>
            <div>
              <div className="bg-white pt-10  mt-1" data-aos="fade-up">
                <div className="mx-auto max-w-full sm:px-4 lg:px-8 ">
                  <h2 className="text-3xl font-bold tracking-tight all_heading sm:text-4xl">
                    Key benefits
                  </h2>
                </div>
                <div
                  data-aos="fade-up"
                  className="pb-8 mx-auto max-w-full  px-6 lg:px-8 mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none serviceboxKey  service_box_effect"
                >
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-lg leading-6 all_heading sm:grid-cols-1 sm:gap-6"
                  >
                    <li className="flex gap-x-3">
                      <BsCheckCircle
                        className="h-6 w-5 flex-none text-amber-700"
                        aria-hidden="true"
                      />
                      Manual and automated penetration testing
                    </li>

                    <li className="flex gap-x-3">
                      <BsCheckCircle
                        className="h-6 w-5 flex-none text-amber-700"
                        aria-hidden="true"
                      />
                      Good domain expertise.
                    </li>

                    <li className="flex gap-x-3">
                      <BsCheckCircle
                        className="h-6 w-5 flex-none text-amber-700"
                        aria-hidden="true"
                      />
                      Certified IT Security Consultants, A large team of in-
                      house and remote testers
                    </li>

                    <li className="flex gap-x-3">
                      <BsCheckCircle
                        className="h-6 w-5 flex-none text-amber-700"
                        aria-hidden="true"
                      />
                      Recognizes gaps in the company’s people, technology, and
                      process.
                    </li>

                    <li className="flex gap-x-3">
                      <BsCheckCircle
                        className="h-6 w-5 flex-none text-amber-700"
                        aria-hidden="true"
                      />
                      Does not only find vulnerabilities in the system but also
                      helps to fix them.
                    </li>

                    <li className="flex gap-x-3">
                      <BsCheckCircle
                        className="h-6 w-5 flex-none text-amber-700"
                        aria-hidden="true"
                      />
                      Uses modern technologies, techniques, and industry best
                      practices.
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

export default Vapt;
