"use client";

import { useState } from "react";

export default function AddModelForm() {
  // Initialize the form state without downloads and likes
  const [model, setModel] = useState({
    type: "",
    title: "",
    tags: [],
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModel((prevModel) => ({
      ...prevModel,
      [name]: value,
    }));
  };

  const handleTagChange = (e) => {
    setModel((prevModel) => ({
      ...prevModel,
      tags: e.target.value.split(","),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add default values for downloads and likes when submitting the form
    const finalModel = { ...model, downloads: "0", likes: "0" };
    console.log(finalModel);
    // Here you would usually send the finalModel data to the server
    // or update the state in your application
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mx-[60px] mt-12">
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Type
        </label>
        <input
          type="text"
          name="type"
          id="type"
          value={model.type}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={model.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
          Tags (comma separated)
        </label>
        <input
          type="text"
          name="tags"
          id="tags"
          value={model.tags.join(",")}
          onChange={handleTagChange}
          required
          className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          value={model.description}
          onChange={handleChange}
          rows="4"
          required
          className="mt-1 block w-full border-gray-300 shadow-sm sm:text-sm"
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Model
      </button>
    </form>
  );
}