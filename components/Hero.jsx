"use client";

import { useContext } from "react";
import ModelCard from "./ModelCard";
import { ModelContext } from "@/lib/context";

export default function HeroSection() {
  const { models } = useContext(ModelContext);
  const featuredModels = models.filter((model) => model.featured).slice(0, 6);

  return (
    <div className="flex md:flex-row items-center justify-center py-12 mx-[60px] box-border">
      <div className="w-1/2 flex flex-col">
        <h2 className="text-8xl font-semibold mb-4">FEATURED MODELS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
          {featuredModels.map((model) => (
            <ModelCard
              key={model._id}
              id={model._id}
              type={model.type}
              downloads={model.downloads}
              likes={model.likes}
              title={model.title}
              description={model.description}
              icon={model.icon}
            />
          ))}
        </div>
      </div>

      <div className="w-1/2  md:ml-12 mt-8 md:mt-0">
        <h1 className=" text-8xl font-bold text-left">
          EVERYTHING YOU NEED TO KNOW ABOUT LLMS
        </h1>
        <p className="mt-4 text-lg text-left">
          Grow your knowledge bigger with LLM Net. Get to know about the latest
          LLMs and their features. Browse through our collection of LLMs and
          find the one that suits your needs.
        </p>
      </div>
    </div>
  );
}
