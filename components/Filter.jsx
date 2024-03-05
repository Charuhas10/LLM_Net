"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineSearch } from "react-icons/ai";

function Filter({ searchTerm, handleSearchChange, models, onSortChange }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (option) => {
    setSortOption(option);
    setShowDropdown(false);
    onSortChange(option);
  };
  const router = useRouter();

  return (
    <div className="flex justify-between items-center mb-6 mx-[60px]">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl dark:text-gray-100">Models</h1>
        <span className="text-xl text-[#9ca3af] dark:text-gray-400">
          {models.length.toLocaleString()}
        </span>
        <div className="relative">
          <input
            type="text"
            placeholder="Filter by name"
            className="border border-gray-300 rounded-[20px] py-1.5 px-4 dark:bg-neutral-700 dark:border-neutral-800 dark:text-gray-100 dark:placeholder-white"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <AiOutlineSearch className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </span>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => {
            router.push("/new");
          }}
          className="px-4 py-2 border border-gray-300 rounded-[20px] bg-white dark:bg-neutral-700 dark:border-neutral-800 dark:text-gray-100"
        >
          Add Model
        </button>

        <button
          className="px-4 py-2 border border-gray-300 rounded-[20px] bg-white dark:bg-neutral-700 dark:border-neutral-800 dark:text-gray-100 flex items-center"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Filter: {sortOption} <AiOutlineCaretDown className="ml-2" />
        </button>
        {showDropdown && (
          <div className="absolute right-[55px] mt-[2.7rem] px-4 py-2  rounded-[15px] bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-800 shadow-xl z-50">
            <Link
              href="#"
              className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-600"
              onClick={() => handleSortChange("All")}
            >
              All
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-600"
              onClick={() => handleSortChange("Featured")}
            >
              Featured
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-600"
              onClick={() => handleSortChange("Most likes")}
            >
              Most likes
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-600"
              onClick={() => handleSortChange("Most downloads")}
            >
              Most downloads
            </Link>
          </div>
        )}

        {/* <button className="px-4 py-2 border border-gray-300 rounded-[20px] bg-white dark:bg-neutral-700 dark:border-neutral-800 dark:text-gray-100">
          Sort: Featured
        </button> */}
      </div>
    </div>
  );
}

export default Filter;
