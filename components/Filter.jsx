"use client";

import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import models from "@/models";

function Filter({ searchTerm, handleSearchChange }) {
  return (
    <div className="flex justify-between items-center mb-6 mx-[60px]">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl">Models</h1>
        <span className="text-xl text-[#9ca3af]">
          {models.length.toLocaleString()}
        </span>
        <div className="relative">
          <input
            type="text"
            placeholder="Filter by name"
            className="border border-gray-300 rounded-[20px] py-1.5 px-4"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <AiOutlineSearch className="h-4 w-4 text-gray-500" />
          </span>
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="px-4 py-2 border border-gray-300 rounded-[20px] bg-white">
          New
        </button>

        <button className="px-4 py-2 border border-gray-300 rounded-[20px] bg-white">
          Sort: Trending
        </button>
      </div>
    </div>
  );
}

export default Filter;
