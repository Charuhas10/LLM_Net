"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <nav className="bg-white shadow dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image className="h-auto w-auto" src={logo} alt="Your Logo" />
            </Link>
          </div>

          {/* Main menu items */}
          <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-end">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/models"
                >
                  Models
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
