"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddModelForm() {
  const router = useRouter();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/newLLM", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(model),
      });
      if (res.ok) {
        alert("Model added successfully");
        router.replace("/models");
      } else {
        alert("Failed to add model");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to add model");
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white p-8 border border-gray-200 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6 mx-[5px]">
        <h2 className="text-center text-2xl font-extrabold text-gray-900">
          Add New Model
        </h2>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={model.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            Type
          </label>
          <input
            type="text"
            name="type"
            id="type"
            value={model.type}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700"
          >
            Tags (comma separated)
          </label>
          <input
            type="text"
            name="tags"
            id="tags"
            value={model.tags.join(",")}
            onChange={handleTagChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={model.description}
            onChange={handleChange}
            rows="4"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Model
        </button>
      </form>
    </div>
  );
}
