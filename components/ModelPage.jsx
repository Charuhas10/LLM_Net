"use client";

import React, { useContext, useEffect, useState } from "react";
import { ModelContext } from "@/lib/context";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Like from "./Like";

export default function ModelPage({ id }) {
  const { models, refetch } = useContext(ModelContext);
  const router = useRouter();

  useEffect(() => {
    refetch();
  }, [refetch, id]);

  const model = models.find((model) => model._id === id);

  const useCasesArray = model.useCases.split("\n");

  const copyToClipboard = () => {
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(model.code).then(
        () => {
          alert("Code copied to clipboard!");
        },
        (err) => {
          console.error("Could not copy text: ", err);
        }
      );
    }
  };

  return model ? (
    <div className="mt-4 p-4 mx-[60px] dark:text-white ">
      <div className="modelTags:block md:flex md:flex-col">
        <div className="flex items-center space-x-2 mb-2">
          <Image src={model.icon} alt="Google Logo" width={24} height={24} />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {model.title}
          </h2>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex-grow flex items-center space-x-2">
            {model.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#e0e0e0] dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 lg:text-sm sm:text-xs sm:hidden modelTags:block"
              >
                {tag}
              </span>
            ))}

            <div className="flex gap-1 items-center space-x-1 text-gray-500 dark:text-gray-300">
              <AiOutlineDownload className="h-5 w-5" />
              <span>{model.downloads}</span>
              <Like likes={model.likes} />
              {/* {liked ? (
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
              <span>{likesCount}</span> */}
            </div>
          </div>

          <button
            onClick={() => {
              router.replace("/useModel");
            }}
            className="bg-blue-500 hover:bg-blue-700 dark:bg-neutral-600 hover:dark:bg-neutral-700 text-white lg:text-base sm:text-xs py-2 px-4 rounded transition duration-300"
          >
            Use Model
          </button>
        </div>
      </div>

      <div className=" modelPage-lg:flex-row flex-col justify-center items-center flex mt-8 gap-6">
        <div className="w-full modelPage-lg:w-1/2 mx-[15px] modelPage-lg:mx-0">
          <h1 className=" font-bold">DESCRIPTION: </h1>
          <div className="sm:text-sm md:text-base">{model.description}</div>
          <h1 className=" font-bold mt-4">USE CASES: </h1>
          <ul>
            {useCasesArray.map((useCase, index) => (
              <li className="sm:text-sm md:text-base" key={index}>
                {useCase}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full modelPage-lg:w-1/2 mx-[15px] modelPage-lg:mx-0">
          <div className="flex justify-between mb-4">
            <h1 className=" font-bold ">CODE: </h1>
            <button
              onClick={copyToClipboard}
              className="text-sm bg-blue-500 hover:bg-blue-700 dark:bg-neutral-600 hover:dark:bg-neutral-700 text-white py-1 px-3 rounded transition duration-300"
            >
              Copy
            </button>
          </div>
          <pre className="bg-gray-200 dark:bg-gray-600 p-4 rounded-lg overflow-auto sm:text-xs md:text-sm">
            <code>{model.code}</code>
          </pre>
        </div>
      </div>
    </div>
  ) : (
    <div>Model not found!</div>
  );
}
