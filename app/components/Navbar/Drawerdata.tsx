import React, { useState } from "react";
import Link from "next/link";
import Contactusform from "./Contactus";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface NavigationItem {
  name: string;
  href?: string;
  current: boolean;
  subItems?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "#home-section", current: false },
  { name: "Events", href: "#gallery-section", current: false },
  {
    name: "Student life",
    current: false,
    subItems: [
      { name: "Transportation", href: "/transportation", current: false },
      { name: "Enrichments", href: "/enrichment", current: false },
      { name: "Code of Conduct", href: "/code-of-conduct", current: false },
      { name: "Student goverment", href: "/student-goverment", current: false },
      { name: "Uniform", href: "/uniform", current: false },
    ],
  },
  {
    name: "Academics",
    current: false,
    subItems: [
      { name: "Curriculum", href: "/curriculum", current: false },
      { name: "Grades", href: "/grades", current: false },
      { name: "Accreditation", href: "/accreditation", current: false },
      { name: "Tuition fee", href: "/tuitionfee", current: false },
    ],
  },
  {
    name: "About us",
    current: false,
    subItems: [
      { name: "Principal message", href: "/aboutus#message", current: false },
      {
        name: "Mission & Vision",
        href: "/aboutus#aboutus-section",
        current: false,
      },
      { name: "Accreditation", href: "/accreditation", current: false },
    ],
  },
  {
    name: "Facilities",
    current: false,
    subItems: [
      { name: "classroom", href: "/facilities", current: false },
      { name: "Library", href: "/facilities#library", current: false },
      {
        name: "Computer Lab",
        href: "/facilities#computerlab",
        current: false,
      },
      {
        name: "School Clinic",
        href: "/facilities#clinic",
        current: false,
      },
      {
        name: "Play-Grounds",
        href: "/facilities#playground",
        current: false,
      },
      {
        name: "Multi-purpose Space",
        href: "/facilities#space",
        current: false,
      },
      { name: "Canteen", href: "/facilities#canteen", current: false },
    ],
  },
  {
    name: "Admission",
    href: "/admission",
    current: false,
    subItems: [
      {
        name: "Admission process",
        href: "/admission",
        current: false,
      },
      {
        name: "Tuition fee",
        href: "/tuitionfee",
        current: false,
      },
      {
        name: "About us",
        href: "/aboutus#why-choose-us",
        current: false,
      },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = ({ isOpen, setIsOpen }: any) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
    setIsOpen(false);
  };

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.subItems ? (
                  // Dropdown Item
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center w-full text-left py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-purple"
                    >
                      {item.name}
                      <ChevronDownIcon
                        className={`ml-2 h-5 w-5 transform transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href || "#"}
                            onClick={closeDropdown}
                            className="hover:bg-lightgrey2  block p-4 text-base font-medium text-gray-600 hover:bg-gray-100 rounded-md"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  // Standard Navigation Link
                  <div className="flex">
                    <Link
                      href={item.href || "#"}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-purple"
                          : "text-black hover:bg-gray-700 hover:text-purple",
                        "block py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  </div>
                )}
              </div>
            ))}

            {/* Contact Buttons */}
            <div className="mt-4"></div>
            <button className="flex justify-center text-base w-full font-medium rounded-full bg-pink text-white py-3 px-4 lg:px-8 navbutton hover:text-white">
              Contact us
            </button>
            <button className="flex justify-center text-base w-full font-medium rounded-full bg-transparent border border-bgpink text-pink py-3 px-4 lg:px-8 navbutton hover:text-white hover:bg-pink">
              +252(63) 468-8444
            </button>

            <Contactusform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
