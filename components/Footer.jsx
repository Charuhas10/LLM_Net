import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaUser } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex items-center justify-between p-4 bg-[#fafafa] text-center shadow dark:shadow-neutral-700 dark:bg-neutral-900">
      <div className="flex items-center">
        <p className="text-sm text-black dark:text-white">
          &copy; 2020 Charuhas Reddy Balam
        </p>
      </div>
      <div className="flex space-x-4">
        <Link
          href="https://www.github.com/charuhas10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl hover:text-gray-700 hover:dark:text-[#d6d6d6]" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/charuhas-reddy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl hover:text-gray-700 hover:dark:text-[#d6d6d6]" />
        </Link>
        <Link
          href="https://charuhas10.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaUser className="text-2xl hover:text-gray-700 hover:dark:text-[#d6d6d6]" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
