"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/logo.png");

  useEffect(() => {
    setLogoSrc(resolvedTheme === "dark" ? "/logo_white.png" : "/logo.png");
  }, [resolvedTheme]);

  return (
    <nav className="top-0 bg-[#fafafa] shadow dark:shadow-neutral-700 dark:bg-neutral-900 mx-0">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-5 lg:px-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image width={90} height={90} src={logoSrc} alt="Your Logo" />
            </Link>
          </div>

          <div className=" flex-1 flex items-center justify-end sm:items-stretch">
            <div className="hidden sm:block sm:ml-4">
              <div className="flex gap-3">
                <Link
                  className=" text-gray-500 dark:text-white  px-2 py-1 rounded-md md:text-sm sm:text-xs font-medium"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className=" text-gray-500 dark:text-white px-2 py-1 rounded-md md:text-sm sm:text-xs font-medium"
                  href="/models"
                >
                  Models
                </Link>
                <Link
                  className=" text-gray-500 dark:text-white px-2 py-1 rounded-md md:text-sm sm:text-xs font-medium"
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
