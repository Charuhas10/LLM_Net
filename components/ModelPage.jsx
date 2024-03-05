"use client";

import { ModelContext } from "@/lib/context";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { AiFillHeart, AiOutlineDownload, AiOutlineHeart } from "react-icons/ai"; // Changed to AiOutlineHeart for the like icon

export default function ModelPage({ id }) {
  const { models } = useContext(ModelContext);
  const model = models.find((model) => model._id === id);

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(model.likes); // Initialize with model.likes or 0 if model is undefined

  if (!model) {
    return <div>Model not found</div>;
  }

  const toggleLike = () => {
    if (model) {
      setLiked(!liked);
      setLikesCount(liked ? likesCount - 1 : likesCount + 1); // Decrease if already liked, else increase
    }
  };

  return (
    <div className="mt-4 p-4 mx-[60px]  dark:text-white">
      {/* First line with icon and title */}
      <div className="flex items-center space-x-2 mb-2">
        <Image src="/google.webp" alt="Google Logo" width={24} height={24} />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {model.title}
        </h2>
      </div>

      {/* Second line with tags, interaction buttons, and "Use Model" button */}
      <div className="flex justify-between items-center">
        {/* Tags and interaction buttons */}
        <div className="flex-grow flex items-center space-x-2">
          {/* Tags */}
          {model.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#e0e0e0] dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}

          {/* Download and like buttons */}
          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-300">
            <AiOutlineDownload className="h-5 w-5" />
            <span>{model.views}</span>
            {liked ? (
              <AiFillHeart
                className="h-5 w-5 text-red-500 cursor-pointer"
                onClick={toggleLike}
              />
            ) : (
              <AiOutlineHeart
                className="h-5 w-5 text-gray-500 dark:text-gray-300 cursor-pointer"
                onClick={toggleLike}
              />
            )}
            <span>{likesCount}</span>
          </div>
        </div>

        {/* "Use Model" button */}
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Use Model
          </button>
        </div>
      </div>
      <div className="flex mt-8">
        <div className="w-1/2">{model.description}</div>
        <div className="w-1/2">CODE</div>
      </div>
    </div>
  );
}
