"use client";

import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Filter({ searchTerm, handleSearchChange, models }) {
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
        <button className="px-4 py-2 border border-gray-300 rounded-[20px] bg-white dark:bg-neutral-700 dark:border-neutral-800 dark:text-gray-100">
          New
        </button>

        <button className="px-4 py-2 border border-gray-300 rounded-[20px] bg-white dark:bg-neutral-700 dark:border-neutral-800 dark:text-gray-100">
          Sort: Trending
        </button>
      </div>
    </div>
  );
}

export default Filter;
