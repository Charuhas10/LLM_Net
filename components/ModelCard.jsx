"use client";

import Image from "next/image";
import google from "@/public/google.webp";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ModelCard({ id, type, views, likes, title }) {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    console.log("Like toggled");
  };

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
          <Image src={google} alt="Logo" className="h-5 w-5" />
        </div>
        <p
          className={`text-sm font-medium truncate ${
            isHovered ? "text-blue-500" : "text-gray-900"
          }`}
        >
          {title}
        </p>
      </div>

      <div className="mt-2 flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-600">
          <svg
            className="h-3.5 w-3.5 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
              stroke="#6b728d"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
              stroke="#6b728d"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="ml-1">{views}</span>
        </div>
        <p className="text-sm text-gray-500 truncate">{type}</p>

        <div
          onClick={toggleLike}
          className="flex items-center text-sm text-gray-600"
        >
          <svg
            className="h-3.5 w-3.5 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
              fill={`${liked ? "red" : "#6b728d"}`}
            />
          </svg>
          <span className="ml-1">{likes}</span>
        </div>
      </div>
    </div>
  );
}
