"use client";

import { ModelContext } from "@/lib/context";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function AddModelForm() {
  const { refetch } = useContext(ModelContext);
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

      const data = await res.json();

      if (res.ok) {
        alert("Model added successfully");
        refetch();
        router.replace(`/models/${data.id}`);
      } else {
        alert("Failed to add model");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to add model");
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white dark:bg-neutral-800 dark:border-neutral-900 p-8 border border-gray-200 rounded-lg shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 mx-[5px] text-center items-center justify-center"
      >
        <h2 className="text-center text-2xl font-extrabold text-gray-900 dark:text-white">
          ADD YOUR LLM
        </h2>
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Name of your LLM"
            value={model.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-[#e0e0e0] dark:bg-neutral-700 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
          />
        </div>
        <div>
          <label
            htmlFor="type"
            className="block text-lg font-medium text-gray-700 dark:text-white"
          >
            Type
          </label>
          <input
            type="text"
            name="type"
            id="type"
            placeholder="Text-to-Text, Text-to-Image ..."
            value={model.type}
            onChange={handleChange}
            required
            className="mt-1 block w-full bg-[#e0e0e0] dark:bg-neutral-700  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
          />
        </div>
        <div>
          <label
            htmlFor="tags"
            className="block text-lg font-medium text-gray-700 dark:text-white"
          >
            Tags (comma separated)
          </label>
          <input
            type="text"
            name="tags"
            id="tags"
            placeholder="Text Generation, Transformers..."
            value={model.tags.join(",")}
            onChange={handleTagChange}
            required
            className="mt-1 block w-full rounded-md bg-[#e0e0e0] dark:bg-neutral-700 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3 "
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-700 dark:text-white"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={model.description}
            onChange={handleChange}
            placeholder="Describe your LLM model here..."
            rows="4"
            required
            className="py-2 mt-1 block w-full rounded-md bg-[#e0e0e0] dark:bg-neutral-700 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 "
          ></textarea>
        </div>
        <button
          type="submit"
          className="justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium dark:bg-neutral-600 hover:dark:bg-neutral-700 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Model
        </button>
      </form>
    </div>
  );
}
