import React from "react";
import logo from "./image/logo.svg";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon, SunIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Project", href: "#" },
  { name: "Training program", href: "#" },
  { name: "Contact", href: "#" },
  { name: "About", href: "#" },
];

export default function Narbar() {
  return (
    <Disclosure as="nav">
      <div className="w-screen ">
        <div className="flex justify-between py-1 items-center">
          <div className="flex ml-4 justify-between items-center ">
            <img src={logo.src} alt="logo" className="min-w-28 max-w-28 mr-5" />
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 rounded-lg text-xl py-4 hidden md:block whitespace-nowrap hover:bg-[#31363F] hover:bg-opacity-55 dark:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex relative">
            <div className="flex items-center justify-center">
              <SunIcon className="h-10 w-10 md:mr-4 dark:text-white" />
            </div>
            <div className="flex md:hidden">
              <DisclosureButton className="flex group items-center justify-center rounded-md p-2 ">
                <Bars3Icon
                  // aria-hidden="true"
                  className="block h-10 w-10 group-data-[open]:hidden dark:text-white"
                />
                <XMarkIcon
                  // aria-hidden="true"
                  className="hidden h-10 w-10 group-data-[open]:block dark:text-white"
                />
              </DisclosureButton>
            </div>
            <DisclosurePanel
              transition
              className="md:hidden transition-all duration-150 ease-linear data-[closed]:-translate-y-6 data-[closed]:opacity-0 z-40"
            >
              <div className="absolute top-14 right-0 w-screen bg-white dark:bg-[#222831] z-50">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={
                      "flex text-xl py-2 whitespace-nowrap pl-4 hover:bg-[#31363F] dark:text-white "
                    }
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
