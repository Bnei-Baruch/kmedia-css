/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// import { Fragment } from 'react'
import { Fragment, useState } from "react";
import {} from //   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
//   Transition,
"@headlessui/react";
// import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import {
  LifebuoyIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/outline";

import { ReactComponent as Logo } from "./logo.svg";
import { current } from "tailwindcss/colors";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const sidebarfooter = [
  {
    name: "",
    items: [
      {
        name: "Help",
        href: "#",
        icon: LifebuoyIcon,
        current: false,
      },
      {
        name: "Old Site",
        href: "#",
        icon: ArrowUturnLeftIcon,
        current: false,
      },
    ],
  },
];
export default function SidebarNav({items}) {
  const sidebarnav = [...items, ...sidebarfooter];
  return (
    <>
      <div className="flex h-16 shrink-0 items-center gap-x-2">
        <Logo alt="Kabbalah Media" className="h-8 w-auto fill-brand-600" />
        <span className="text-lg font-semibold text-brand-600">
          Kabbalah Media
        </span>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-5">
          {sidebarnav.map((group) => (
            <li className="last:mt-auto last:border-t last:border-gray-200">
              {group.name != "" && (
                <div className="text-xs font-semibold leading-6 text-gray-400">
                  {group.name}
                </div>
              )}

              <ul role="list" className="-mx-2 space-y-0">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-50 text-brand-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-brand-600",
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-5",
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-brand-600"
                            : "text-gray-400 group-hover:text-brand-600",
                          "h-5 w-5 shrink-0",
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
