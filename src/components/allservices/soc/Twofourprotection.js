import React from "react";
import { BsCheckCircle } from "react-icons/bs";
const protection = [
  "Defend against the constantly evolving cyber threats with 24/7 monitoring and protection. Our team can guide you through the incident process and in the remediation process.",
];

const Twofourprotection = () => {
  return (
    <>
      <div className="mx-auto max-w-full" data-aos="fade-up">
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              24x7 Protection:
            </h3>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-amber-700">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6"
            >
              {protection.map((feature) => (
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
    </>
  );
};

export default Twofourprotection;
