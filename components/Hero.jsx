"use client";

import { useContext } from "react";
import ModelCard from "./ModelCard";
import { ModelContext } from "@/lib/context";

export default function HeroSection() {
  const { models } = useContext(ModelContext);
  const featuredModels = models.filter((model) => model.featured).slice(0, 6);

  return (
    <div className="flex xl:flex-row sm:flex-col-reverse sm:mx-[20px] xl:items-center xl:justify-center xl:gap-4 xl:py-12 xl:mx-[60px] box-border">
      <div className="sm:w-full xl:w-1/2 xl:text-left sm:text-center xl:flex xl:flex-col xl:mt-8">
        <h2 className="sm:mt-4 sm:text-3xl md:text-4xl lg:mb-6 lg:text-5xl xl:text-8xl xl:font-semibold xl:mb-4">
          FEATURED MODELS
        </h2>
        <div className="sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
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

      <div className="sm:mt-8 sm:w-full xl:w-1/2 lg:mt-8 xl:ml-12 ">
        <h1 className="sm:mt-4 sm:text-3xl sm:text-center md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold xl:text-left">
          EVERYTHING YOU NEED TO KNOW ABOUT LLMS
        </h1>
        <p className="sm:mt-4 sm:text-[14px] sm:leading-4 sm:text-center sm:mb-4 md:mb-0 lg:text-lg xl:mt-4 xl:text-left">
          Grow your knowledge bigger with LLM Net. Get to know about the latest
          LLMs and their features. Browse through our collection of LLMs and
          find the one that suits your needs.
        </p>
      </div>
    </div>
  );
}
