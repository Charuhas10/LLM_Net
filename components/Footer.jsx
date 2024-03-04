import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"; // You need to install react-icons if you haven't already
import { FaUserAlt } from "react-icons/fa"; // Assuming you want to use this for the profile icon

function Footer() {
  return (
    <footer className="flex items-center justify-between p-4 bg-gray-100 text-center">
      <div className="mb-2">charuhasreddybalam@gmail.com</div>
      <div className="flex space-x-4 mb-2">
        {/* Placeholder for icons */}
        <a
          href="https://github.com/charuhas10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="text-2xl hover:text-gray-700" />
        </a>
        <a
          href="https://www.linkedin.com/in/charuhas-reddy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="text-2xl hover:text-blue-700" />
        </a>
        <a
          href="https://charuhas10.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaUserAlt className="text-2xl hover:text-gray-700" />
        </a>
      </div>
      <p className="text-sm text-gray-600">&copy; 2024 Charuhas Reddy Balam</p>
    </footer>
  );
}

export default Footer;
