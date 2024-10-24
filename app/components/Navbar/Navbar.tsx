import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signindialog from "./Signindialog";
import Image from "next/image";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "#home-section", current: false },
  { name: "About", href: "#about-section", current: false },
  { name: "Teachers", href: "#cook-section", current: false },
  { name: "Events", href: "#gallery-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl p-3 md:p-6 lg:px-8">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}

              <div className="flex sm:hidden flex-shrink-0 items-center border-right">
                <Image
                  src="/images/school/logo.PNG"
                  alt="logo"
                  width={150}
                  height={150}
                />
              </div>
              <div className="hidden sm:flex flex-shrink-0 items-center border-right">
                <Image
                  src="/images/school/logo.PNG"
                  alt="logo"
                  width={300}
                  height={300}
                />
              </div>

              {/* LINKS */}

              <div className="hidden lg:flex items-center border-right ">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-black"
                          : "navlinks hover:opacity-100",
                        "px-3 py-4 rounded-md text-lg font-normal opacity-50 hover:text-black space-links"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="gap-6 hidden lg:flex">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/images/Logo/phone.png"}
                    alt="phone-image"
                    width={19}
                    height={19}
                  />
                  <p className="text-lg font-medium">+252(63) 468-8444</p>
                </div>
                <button
                  type="button"
                  className="flex justify-end text-xl font-medium bg-pink text-white py-4 px-4 lg:px-8 navbutton rounded-full hover:text-white hover:bg-pink"
                >
                  Apply
                </button>
                {/* <Signindialog /> */}
              </div>
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            {/* <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div> */}

            {/* DRAWER LINKS DATA */}

            {/* <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer> */}
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
