import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { FaCalendarAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import React from "react";
import "./contact.css";
import { NavLink } from "react-router-dom";
import Map1 from "./Map1";

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

      <div className="grid sm:grid-col-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-300 contact-block">
          <a target="_blank" href="https://calendly.com/meet-iprotectcss/30min">
            <h1 className="contact-us-icons">
              <FaCalendarAlt />
            </h1>
            <b>Schedule Meeting Now</b>
            <p>Meet with a Cybersecurity Consultant</p>
          </a>
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
      <div className="grid sm:grid-col-1 md:grid-cols-2 gap-4 mt-4">
        <div className="map-container">
          <div className="map-wrapper">
            <Map1 />
          </div>
        </div>
        <div className="map-container">
          <div className="map-wrapper">
            <Map1 />
          </div>
        </div>
      </div>
    </div>
  );
}
