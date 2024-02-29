"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center">
            {/* Logo and mobile menu button */}
            <div className="flex-shrink-0">
              <Image
                className="h-auto w-auto"
                src={logo} // Replace with your logo source
                alt="Your Logo"
              />
            </div>
          </div>

          {/* Main menu items */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-500 hover:bg-gray-700 hover:text-white" */}
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
                <Link
                  className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/datasets"
                >
                  Datasets
                </Link>
                <Link
                  className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/spaces"
                >
                  Spaces
                </Link>
                <Link
                  className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/posts"
                >
                  Posts
                </Link>
                <Link
                  className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/docs"
                >
                  Docs
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Space for future content or gap replacement for search bar */}
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Future content here */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
