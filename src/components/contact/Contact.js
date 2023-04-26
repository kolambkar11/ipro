import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { FaCalendarAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import React from "react";
import "./contact.css";
import { NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ef453a] to-[#f9af3d] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Home / Contact Us
        </p>
      </div>
      {/* <div className="relative isolate overflow-hidden text-gray-900  bg-[#f9af3d] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#ef453a" />
                  <stop offset={1} stopColor="#f9af3d" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Boost your productivity.
                <br />
                Start using our app today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-900">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <NavLink to="/contact" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </NavLink>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div> 
      <p>Thank you for your interest in iProtect Cybersecurity Services. If you have any questions or would
like to learn more about our services, please do not hesitate to contact us. Our team is always ready
to assist you with your cybersecurity needs.</p>
You can reach us via the following methods:
 Email: Send us an email at sales@iprotectcss.com. Our team will respond to your email
within 24 hours.
 Online Contact Form:
 Social Media: Connect with us on social media [insert social media handles here], where you
can stay up to date with the latest cybersecurity news, tips, and insights.
We value your privacy and will keep your information confidential. We look forward to hearing from
you and helping you stay secure in an ever-changing digital landscape.*/}

      <div className="grid sm:grid-col-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-300 contact-block">
          <h1 className="contact-us-icons">
            <FaCalendarAlt />
          </h1>
          <b>Schedule Meeting Now</b>
          <p>Meet with a Cybersecurity Consultant</p>
        </div>
        <div className="bg-gray-400 contact-block">
          <h1 className="contact-us-icons">
            <FaPhoneAlt />
          </h1>
          <b>Phone Number</b>
          <a href="tel:+918660178713">
            <p>+91 8660178713</p>
          </a>
        </div>
        <div className="bg-gray-500 contact-block">
          <h1 className="contact-us-icons">
            <FaEnvelope />
          </h1>
          <b>Mailing Address</b>

          <a href="mailto:info@iprotectcss.com">
            <p>info@iprotectcss.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}
