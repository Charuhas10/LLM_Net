"use client";

import Image from "next/image";
import google from "@/public/google.webp";
import { useState } from "react";
import { useRouter } from "next/navigation";

// components/Card.jsx
// ModelCard.jsx
export default function ModelCard({ id, title, views, likes, url }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      className="bg-[#f6f7f9] shadow-md rounded-lg p-4 max-w-sm w-full mx-auto hover:bg-[#ebece9] transition duration-300 ease-in-out cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        router.push(`/models/${id}`);
      }}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          {/* Assuming you have a way to dynamically select the image based on the url or another prop */}
          <Image src={google} alt="Logo" className="h-5 w-5" />
        </div>
        <p
          className={`text-sm font-medium truncate ${
            isHovered ? "text-blue-500" : "text-gray-900"
          }`}
        >
          {url}
        </p>
      </div>

      <div className="mt-2 flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-600">
          <svg
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.5-1.5m0 0l-1.5-1.5m1.5 1.5L15 13m6 4v-4m0 4H9m4 0H3m10-4V7m0 4H3m10 0V7h6m0 4v4m0 0H9"
            />
          </svg>
          <span className="ml-1">{views}</span>
        </div>

        <p className="text-sm text-gray-500 truncate">{title}</p>

        <div className="flex items-center text-sm text-gray-600">
          <svg
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* Your SVG icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
          <span className="ml-1">{likes}</span>
        </div>
      </div>
    </div>
  );
}
