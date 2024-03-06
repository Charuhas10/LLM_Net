"use client";

import { useContext, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

export default function Like({ likes }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    if (!liked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
  };

  return (
    <div
      onClick={toggleLike}
      className="flex items-center text-sm text-gray-600 dark:text-gray-300"
    >
      <AiOutlineHeart
        className={`h-4 w-4 ${
          liked
            ? "text-red-500 dark:text-red-400"
            : "text-[#6b728d] dark:text-gray-400"
        }`}
      />
      <span className="ml-1">{likeCount}</span>
    </div>
  );
}
