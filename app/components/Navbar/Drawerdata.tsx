import React, { useState } from "react";
import Link from "next/link";
import Contactusform from "./Contactus";

interface NavigationItem {
  name: string;
  href?: string;
  current: boolean;
  subItems?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "#home-section", current: false },
  { name: "About us", href: "#about-section", current: false },
  { name: "Events", href: "#gallery-section", current: false },
  {
    name: "Student",
    current: false,
    subItems: [
      { name: "Transportation", href: "#transportation", current: false },
      { name: "Enrichments", href: "#enrichment", current: false },
      { name: "Code of Conduct", href: "#code-of-conduct", current: false },
      { name: "Student Council", href: "#student-council", current: false },
    ],
  },
  {
    name: "School",
    current: false,
    subItems: [
      { name: "Grades", href: "#academics", current: false },
      { name: "Accreditation", href: "#accreditation", current: false },
      { name: "Tuition fee", href: "#tuition", current: false },
      { name: "Acceptance criteria", href: "#criteria", current: false },
      { name: " Code of Conduct", href: "#code-of-conduct", current: false },
      { name: "Curriculum", href: "/curriculum", current: false },
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
                      className="block w-full text-left py-2 rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-purple"
                    >
                      {item.name}
                    </button>
                    {openDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href || "#"}
                            onClick={closeDropdown}
                            className="block py-2 text-base font-medium text-gray-600 hover:bg-gray-100 rounded-md"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  // Standard Navigation Link
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
