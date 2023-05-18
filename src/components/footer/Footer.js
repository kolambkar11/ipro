/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { BsChevronRight } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";

export default function Example() {
  const navigate = useNavigate();
  function navigateToContact() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(process.env.REACT_APP_DOMAIN_DIR + "/contact");
  }
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              iProtect Cybersecurity Services
            </h2>
            <p className="mt-4 mb-4 text-lg leading-8 text-gray-300 ">
              A leading provider of cybersecurity services and solutions for
              distribution and technology partners.
            </p>
            <span
              onClick={navigateToContact}
              className="rounded-md cursor-pointer bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
            </span>
            <NavLink
              to={process.env.REACT_APP_DOMAIN_DIR + "/contact"}
            ></NavLink>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white text-2xl">
                Weekly articles
              </dt>
              <dd className="mt-2 leading-7 text-white text-lg">
                Threat hunting articles offer insights into potential cyber
                attacks and ways to detect and respond to threats, while
                vulnerability articles provide strategies for identifying and
                mitigating software vulnerabilities. Both are essential for
                organizations to proactively protect their systems from
                potential cyber threats.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white text-2xl ">
                Threat advisories
              </dt>
              <dd className="mt-2 leading-7 text-white text-lg">
                Cybersecurity advisory reports provide expert guidance to
                organizations on how to protect their information systems from
                cyber threats. These reports offer recommendations on best
                practices, vulnerability assessments, and actionable steps to
                improve overall security.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ef453a] to-[#f9af3d] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
