import React from "react";
import { BsCheckCircle } from "react-icons/bs";
const keybenefits = [
  "Pro-active security incidents detection based on raw event and log data.",
  "Improved efficiency of incident response activities.",
  "Optimization of IT and network operations.",
  "Security compliance simplification.",
];
const Siemkeybenefits = () => {
  return (
    <>
      <div className="bg-white pt-10" data-aos="fade-up">
        <div className="mx-auto max-w-full px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Key benefits
          </h2>
        </div>
        <div className="mx-auto max-w-full px-6 lg:px-8">
          <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {keybenefits.map((feature) => (
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
    </>
  );
};

export default Siemkeybenefits;
