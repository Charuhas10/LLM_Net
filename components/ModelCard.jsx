import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Ensure correct import path
import { AiOutlineDownload, AiOutlineHeart } from "react-icons/ai";

export default function ModelCard({
  id,
  type,
  downloads,
  likes,
  title,
  featured,
  description,
  icon,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const router = useRouter();

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    if (!liked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    console.log("Like toggled");
  };

  return (
    <div
      className="bg-[#eee] hover:bg-[#e0e0e0] dark:bg-neutral-800 dark:hover:bg-neutral-600 shadow-md rounded-lg p-4 max-w-sm w-full mx-auto transition duration-300 ease-in-out cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        console.log("Clicked", { id });
        router.push(`/models/${id}`);
      }}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Image src={icon} alt="Logo" width={20} height={20} />
        </div>
        <p
          className={`text-sm font-medium truncate ${
            isHovered
              ? "text-blue-500 dark:text-blue-300"
              : "text-gray-900 dark:text-gray-100"
          }`}
        >
          {title}
        </p>
      </div>

      <div className="mt-2 flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <AiOutlineDownload className="h-4 w-4 text-[#6b728d] dark:text-gray-300" />
          <span className="ml-1">{downloads}</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
          {type}
        </p>

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
      </div>
    </div>
  );
}
