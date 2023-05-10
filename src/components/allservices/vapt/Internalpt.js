import React from "react";
import { BsCheckCircle } from "react-icons/bs";
const protection = [
  "Scenarios based on an internal attacker, such as a visitor with only physical access to your offices or a contractor with limited systems access.",
];
const Internalpt = () => {
  return (
    <>
      <div className="mx-auto max-w-full px-6 lg:px-8" data-aos="fade-up">
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none service_box_effect">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight all_heading">
              Internal penetration testing:
            </h3>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-lg font-semibold leading-6 text-amber-700">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-lg leading-6 all_heading sm:grid-cols-1 sm:gap-6"
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

export default Internalpt;
