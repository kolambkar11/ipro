import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Diamond from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

import "./nav.css";
const navigation = {
  categories: [
    {
      id: "services",
      name: "Services",
      featured: [
        {
          name: "Security Operations Center",
          href: process.env.REACT_APP_DOMAIN_DIR + "/services/soc",
          imageSrc:
            "https://images.unsplash.com/photo-1614064548237-096f735f344f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "VAPT",
          href: process.env.REACT_APP_DOMAIN_DIR + "/services/vapt",
          imageSrc:
            "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "iprotectservices",
          name: "iProtect Cybersecurity Services",
          items: [
            {
              name: "Security Operation Centers",
              href: process.env.REACT_APP_DOMAIN_DIR + "/services/soc",
            },
            {
              name: "Vulnerability Assessment & Penetration Testing",
              href: process.env.REACT_APP_DOMAIN_DIR + "/services/vapt",
            },
            {
              name: "Threat Hunting",
              href:
                process.env.REACT_APP_DOMAIN_DIR + "/services/threathunting",
            },
            {
              name: "Security Information & Event Management",
              href: process.env.REACT_APP_DOMAIN_DIR + "/services/siem",
            },
            {
              name: "Staffing",
              href: process.env.REACT_APP_DOMAIN_DIR + "/services/staffing",
            },
            {
              name: "Cyber Security Training",
              href:
                process.env.REACT_APP_DOMAIN_DIR +
                "/services/cybersecurity-training",
            },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Contact", href: process.env.REACT_APP_DOMAIN_DIR + "/contact" },
    { name: "About", href: process.env.REACT_APP_DOMAIN_DIR + "/about" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200 navigation_bar">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 tetext-amber-700"
                                : "text-white-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <NavLink
                                to={item.href}
                                className="mt-6 block font-medium text-gray-900"
                                onClick={() => setOpen(false)}
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {/* mobile read more */}
                                {item.name}
                              </NavLink>
                              <p aria-hidden="true" className="mt-1">
                                Read More
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium "
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6 navlinks_services"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <NavLink
                                    to={item.href}
                                    className="-m-2 block p-2 text-gray-500 "
                                    onClick={() => setOpen(false)}
                                  >
                                    {/* mobile navlinks of all services */}
                                    {item.name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <NavLink
                        to={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                        onClick={() => setOpen(false)}
                      >
                        {/* addclsoe for this in mobile screen */}
                        {page.name}
                      </NavLink>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative z-10 bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-full px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200  py-4">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <NavLink to={process.env.REACT_APP_DOMAIN_DIR + "/"}>
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto brand_logo" src={Diamond} alt="" />
                </NavLink>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-10 space-x-8 navbar_cust my-4">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "outline-none border-indigo-600 tetext-amber-700 nav-btns"
                                  : "outline-none text-gray-700 hover:text-gray-800 nav-btns",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Group className="absolute inset-x-0 top-full text-sm text-gray-500 ">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8 navlinks_services">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <NavLink
                                            to={item.href}
                                            className="mt-6 block font-medium "
                                            onClick={() => setOpen(false)}
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </NavLink>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Read More
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-1 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium iprcsserv"
                                          >
                                            {section.name}
                                          </p>
                                          <hr className="hr_seperator" />
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <NavLink
                                                  to={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {/* code for navbar need to add the setopen false here ssss check to identifyt it */}
                                                  {item.name}
                                                </NavLink>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Group>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <NavLink
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 nav_url nav-btns"
                      onClick={() => setOpen(false)}
                    >
                      {page.name}
                    </NavLink>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center socials">
                <div className="flex">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/iprotect-cybersecurity-services/"
                    className="p-2 text-gray-400 hover:text-gray-500 "
                  >
                    <span className="sr-only">Linkedin</span>
                    <AiFillLinkedin
                      className="linkedin h-8 w-8"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <div className="flex">
                  <a
                    target="_blank"
                    href="https://twitter.com/iProtectCSS"
                    className="p-2 text-gray-400 hover:text-gray-500 "
                  >
                    <span className="sr-only">Twitter</span>
                    <AiFillTwitterCircle
                      className="twitter h-8 w-8"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
