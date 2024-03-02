"use client";

import React, { useState } from "react";
import models from "@/models";

function Filter() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Implement search functionality or filter as needed
  };

  return (
    <div className="flex justify-between items-center mb-8">
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
            <svg
              className="h-4 w-4 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3H5C3.58579 3 2.87868 3 2.43934 3.4122C2 3.8244 2 4.48782 2 5.81466V6.50448C2 7.54232 2 8.06124 2.2596 8.49142C2.5192 8.9216 2.99347 9.18858 3.94202 9.72255L6.85504 11.3624C7.49146 11.7206 7.80967 11.8998 8.03751 12.0976C8.51199 12.5095 8.80408 12.9935 8.93644 13.5872C9 13.8722 9 14.2058 9 14.8729L9 17.5424C9 18.452 9 18.9067 9.25192 19.2613C9.50385 19.6158 9.95128 19.7907 10.8462 20.1406C12.7248 20.875 13.6641 21.2422 14.3321 20.8244C15 20.4066 15 19.4519 15 17.5424V14.8729C15 14.2058 15 13.8722 15.0636 13.5872C15.1959 12.9935 15.488 12.5095 15.9625 12.0976C16.1903 11.8998 16.5085 11.7206 17.145 11.3624L20.058 9.72255C21.0065 9.18858 21.4808 8.9216 21.7404 8.49142C22 8.06124 22 7.54232 22 6.50448V5.81466C22 4.48782 22 3.8244 21.5607 3.4122C21.1213 3 20.4142 3 19 3Z"
                stroke="#9ca3af"
                stroke-width="1.5"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
          New
        </button>
        
        <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
          Sort: Trending
        </button>
      </div>
    </div>
  );
}

export default Filter;
