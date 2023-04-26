import React from "react";
import Heading from "./Heading";
import Externalpt from "./Externalpt";
import Internalpt from "./Internalpt";
import Socialengineering from "./Socialengineering";
import { BsCheckCircle } from "react-icons/bs";

const Vapt = () => {
  return (
    <>
      <div className="bg-white py-16 sm:py-20">
        <Heading />
        <div className="bg-white pt-10">
          <div className="mx-auto max-w-full px-6 lg:px-8">
            <h2
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              data-aos="fade-up"
            >
              What we offer
            </h2>
            <p
              className="mt-6 text-lg leading-8 text-gray-600"
              data-aos="fade-up"
            >
              Depending on your needs and your IT infrastructure, you may choose
              to employ any or all these Services.
            </p>
          </div>
        </div>
        <Externalpt />
        <Internalpt />
        <Socialengineering />
        <div className="bg-white pt-10  mt-1" data-aos="fade-up">
          <div className="mx-auto max-w-full px-6 lg:px-8 ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Key benefits
            </h2>
          </div>
          <div className="mx-auto max-w-full  px-6 lg:px-8 ">
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6"
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
                Certified IT Security Consultants, A large team of in- house and
                remote testers
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
                Does not only find vulnerabilities in the system but also helps
                to fix them.
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
    </>
  );
};

export default Vapt;
