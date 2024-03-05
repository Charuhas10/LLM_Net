"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { resolvedTheme } = useTheme();

  const logoSrc = resolvedTheme === "dark" ? "/logo_white.png" : "/logo.png";

  return (
    <nav className=" bg-[#fafafa] shadow dark:shadow-neutral-700 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-5 lg:px-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                // className="sm:w-[72px] sm:h-auto"
                width={100}
                height={100}
                src={logoSrc}
                alt="Your Logo"
              />
            </Link>
          </div>

          <div className=" flex-1 flex items-center justify-end sm:items-stretch sm:justify-end">
            <div className="hidden sm:block sm:ml-4">
              <div className="flex space-x-4">
                <Link
                  className=" text-gray-500 dark:text-white  px-3 py-2 rounded-md text-sm font-medium"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className=" text-gray-500 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/models"
                >
                  Models
                </Link>
                <Link
                  className=" text-gray-500 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/new"
                >
                  Add Model
                </Link>
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
