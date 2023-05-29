import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import aboutImg from "../../assets/about-us.png";

function about() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-16 sm:py-32 lg:overflow-visible lg:px-0">
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
                <p className="text-base font-semibold leading-7 text-amber-700 text-lg">
                  Welcome to
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  iProtect Cybersecurity Services!
                </h1>
                <p className="mt-6 text-xl leading-7 text-gray-700">
                  At iProtect Cybersecurity Services, we provide top-notch
                  cybersecurity services to businesses and individuals alike.
                  Our mission is to help protect our clients from the
                  ever-evolving threats in the digital world, by offering
                  comprehensive and customized solutions that cater to their
                  unique needs.
                </p>
                <p className="mt-6 text-xl leading-7 text-gray-700">
                  Our team of experts has years of experience in the
                  cybersecurity industry and is well-versed in the latest
                  security technologies and best practices. We work closely with
                  our clients to understand their specific security challenges
                  and develop tailored solutions that address their concerns.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={aboutImg}
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg text-xl">
                <p>Our services include but are not limited to:</p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3 text-xl">
                    <CloudArrowUpIcon
                      className="mt-1 h-5 w-5 flex-none text-amber-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        SOC as a Service:
                      </strong>{" "}
                      Our SOC as a Service (Security Operations Center) provides
                      24/7 monitoring, detection, and response to cybersecurity
                      threats. We leverage advanced security technologies and
                      best practices to proactively identify and mitigate
                      potential security incidents, helping our clients to
                      minimize the impact of cyber-attacks on their
                      organization.{" "}
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon
                      className="mt-1 h-5 w-5 flex-none text-amber-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        SIEM as a Service:
                      </strong>{" "}
                      Our SIEM as a Service (Security Information and Event
                      Management) enables our clients to aggregate and correlate
                      security data from various sources in real- time. This
                      helps to detect and respond to security incidents faster
                      and more efficiently. Our team of experts can configure
                      and manage the SIEM solution to ensure that it meets our
                      clients&#39; specific security needs.{" "}
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-amber-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Threat Hunting as a Service:
                      </strong>{" "}
                      Our Threat Hunting as a Service leverages advanced threat
                      intelligence and analytics to detect and mitigate advanced
                      persistent threats (APTs) that may have evaded traditional
                      security measures. Our team of experienced security
                      analysts uses a combination of automated and manual
                      techniques to identify and mitigate threats in real- time,
                      helping our clients to stay ahead of emerging threats.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-amber-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Resource Staffing Services:
                      </strong>{" "}
                      Our Resource Staffing Services provide our clients with
                      access to a pool of highly skilled and experienced
                      cybersecurity professionals. We can provide temporary or
                      permanent staffing solutions to help our clients fill
                      critical security roles, such as security analysts,
                      security architects, and security engineers. Our staffing
                      solutions are tailored to our clients&#39; specific needs,
                      and we work closely with them to ensure that the staffing
                      solution meets their requirements.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-amber-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Network Security:
                      </strong>{" "}
                      We provide end-to-end network security solutions that
                      safeguard your infrastructure against external and
                      internal threats. Our team can identify vulnerabilities in
                      your network and provide recommendations to mitigate them,
                      as well as deploy and manage firewalls, intrusion
                      detection and prevention systems, and other security
                      measures.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-amber-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Endpoint Security:
                      </strong>{" "}
                      We offer comprehensive endpoint security solutions that
                      protect your devices and data from cyber threats. Our
                      services include antivirus and anti-malware solutions,
                      device management, and encryption.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-amber-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Cloud Security:
                      </strong>{" "}
                      We provide cloud security solutions that ensure your data
                      is secure and compliant with industry regulations. Our
                      team can help you migrate to the cloud securely, configure
                      cloud security measures, and provide ongoing monitoring
                      and management.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-amber-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Risk and Compliance:
                      </strong>{" "}
                      We help our clients manage their security risks and
                      achieve compliance with industry regulations such as
                      HIPAA, PCI-DSS, and GDPR. Our team can perform risk
                      assessments, develop security policies and procedures, and
                      provide ongoing compliance monitoring and management.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  At iProtect Cybersecurity Services, we understand the
                  importance of staying ahead of the curve when it comes to
                  cybersecurity. We constantly update our knowledge and skills
                  to keep up with the latest trends and emerging threats in the
                  digital landscape. This enables us to provide the most
                  effective and up-to-date security solutions to our clients.
                </p>
                <p className="mt-6">
                  We are committed to providing excellent customer service and
                  support to our clients. Our team is always available to answer
                  questions, provide guidance, and address any concerns you may
                  have.
                </p>
                <p className="mt-6">
                  Thank you for considering iProtect Cybersecurity Services for
                  your cybersecurity needs. We look forward to working with you
                  to ensure your digital security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
