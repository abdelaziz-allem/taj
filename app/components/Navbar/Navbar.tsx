import { Disclosure, Menu } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "#home-section", current: false },
  // { name: "News & Events", href: "#gallery-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto md:p-6 lg:px-8">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center lg:justify-around sm:justify-between">
              {/* LOGO */}
              <Link
                href="/"
                className="flex sm:hidden flex-shrink-0 items-center border-right"
              >
                <Image
                  src="/images/Logo/logo.PNG"
                  alt="logo"
                  width={150}
                  height={150}
                />
              </Link>
              <Link
                href={"/"}
                className="hidden sm:flex flex-shrink-0 items-center border-right"
              >
                <Image
                  src="/images/Logo/logo.PNG"
                  alt="logo"
                  width={300}
                  height={300}
                />
              </Link>

              {/* LINKS */}
              <div className="hidden lg:flex items-center border-right">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-black"
                          : "navlinks hover:opacity-100",
                        "px-3 py-4 rounded-md text-md font-normal opacity-50 hover:text-black space-links"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <Menu as="div" className="relative inline-block text-left">
                    <div className="flex items-center">
                      <Menu.Button className="flex items-center  py-4 rounded-md text-md font-normal opacity-50 hover:text-black space-links">
                        <span>About us</span>
                        <ChevronDownIcon className="w-5 h-5 ml-1 opacity-50 hover:text-black" />
                      </Menu.Button>
                    </div>

                    <Menu.Items className="absolute z-10 mt-2 w-40 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/principle-message"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "hover:bg-lightgrey2 hover:text-white block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Priciple&apos;s message
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/aboutus"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-lightgrey2 hover:text-white"
                            )}
                          >
                            Mission, Vision & values
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/accreditation"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-lightgrey2 hover:text-white"
                            )}
                          >
                            Accreditation
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  {/* Academics Dropdown */}
                  <Menu as="div" className="relative inline-block text-left">
                    <div className="flex items-center">
                      <Menu.Button className="flex items-center  py-4 rounded-md text-md font-normal opacity-50 hover:text-black space-links">
                        <span>Academics</span>
                        <ChevronDownIcon className="w-5 h-5 ml-1 opacity-50 hover:text-black" />
                      </Menu.Button>
                    </div>

                    <Menu.Items className="absolute z-10 mt-2 w-40 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/grades"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-lightgrey2 hover:text-white"
                            )}
                          >
                            Grade levels
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/curriculum"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "hover:bg-lightgrey2 hover:text-white block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Curriculum overview
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/taj-education"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "hover:bg-lightgrey2 hover:text-white block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Taj education
                          </Link>
                        )}
                      </Menu.Item>

                      {/* <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/criteria"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-lightgrey2 hover:text-white"
                            )}
                          >
                            Acceptance criteria
                          </Link>
                        )}
                      </Menu.Item> */}
                    </Menu.Items>
                  </Menu>

                  <Menu as="div" className="relative inline-block text-left">
                    <div className="flex items-center">
                      <Menu.Button className="flex items-center  py-4 rounded-md text-md font-normal opacity-50 hover:text-black space-links">
                        <span>Admission</span>
                        <ChevronDownIcon className="w-5 h-5 ml-1 opacity-50 hover:text-black" />
                      </Menu.Button>
                    </div>

                    <Menu.Items className="absolute z-10 mt-2 w-40 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/admission"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "hover:bg-lightgrey2 hover:text-white block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Admission process
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/tuitionfee"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-lightgrey2 hover:text-white"
                            )}
                          >
                            Tuition fee
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/why-us"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-lightgrey2 hover:text-white"
                            )}
                          >
                            Why Taj international school?
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  {/* <Menu as="div" className="relative inline-block text-left">
                    <div className="flex items-center">
                      <Menu.Button className="flex items-center  py-4 rounded-md text-md font-normal opacity-50 hover:text-black space-links">
                        <span>Facilities</span>
                        <ChevronDownIcon className="w-5 h-5 ml-1 opacity-50 hover:text-black" />
                      </Menu.Button>
                    </div>

                    <Menu.Items className="absolute z-10 mt-2 w-40 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/facilities"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "hover:bg-lightgrey2 hover:text-white block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Classroom
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/facilities#library"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "hover:bg-lightgrey2 hover:text-white block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Library
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/facilities#computerlab"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-lightgrey2 hover:text-white"
                            )}
                          >
                            Computer Lab
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/facilities#clinic"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-lightgrey2 hover:text-white"
                            )}
                          >
                            School clinic
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/facilities#playground"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-lightgrey2 hover:text-white"
                            )}
                          >
                            Play-Grounds
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/facilities#space"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-lightgrey2 hover:text-white"
                            )}
                          >
                            Multi-purpose space
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/facilities#canteen"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-lightgrey2 hover:text-white"
                            )}
                          >
                            Canteen
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Menu> */}

                  <Menu as="div" className="relative inline-block text-left">
                    <div className="flex items-center">
                      <Menu.Button className="flex items-center  py-4 rounded-md text-md font-normal opacity-50 hover:text-black space-links">
                        <span>Student Life</span>
                        <ChevronDownIcon className="w-5 h-5 ml-1 opacity-50 hover:text-black" />
                      </Menu.Button>
                    </div>

                    <Menu.Items className="absolute z-10 mt-2 w-40 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/transportation"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-lightgrey2 hover:text-white"
                            )}
                          >
                            Transportation
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/uniform"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-lightgrey2 hover:text-white"
                            )}
                          >
                            Uniform
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/enrichment"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "hover:bg-lightgrey2 hover:text-white block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Enrichments
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/code-of-conduct"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-lightgrey2 hover:text-white"
                            )}
                          >
                            Code of conduct
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/student-goverment"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-lightgrey2 hover:text-white"
                            )}
                          >
                            Student Goverment
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </div>
              </div>

              {/* Contact Section and Phone */}
              <div className="hidden gap-4 lg:flex">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/images/Logo/phone.png"}
                    alt="phone-image"
                    width={10}
                    height={10}
                  />
                  <p className="text-sm font-medium">+252 63 4829666</p>
                </div>
                <Link
                  href={"#contact"}
                  type="button"
                  className="flex justify-end text-md font-medium bg-pink text-white py-4 px-4 lg:px-8 navbutton rounded-full hover:text-white hover:bg-pink"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* DRAWER FOR MOBILE VIEW */}
            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata isOpen={isOpen} setIsOpen={setIsOpen} />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
