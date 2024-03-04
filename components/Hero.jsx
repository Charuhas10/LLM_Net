"use client";

import { useEffect, useState } from "react";
import ModelCard from "./ModelCard";

export default function HeroSection() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const getModels = async () => {
      try {
        const res = await fetch("/api/getLLM", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          const models = await res.json();
          setModels(models);
        } else {
          console.log("Error fetching models");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getModels();
  }, []);

  const featuredModels = models.filter((model) => model.featured);
  console.log(featuredModels);

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
