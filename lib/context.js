"use client";

import React, { createContext, useState, useEffect } from "react";

const ModelContext = createContext();

const ModelProvider = ({ children }) => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    refetch();
  }, []);

  function refetch() {
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
  }

  return (
    <ModelContext.Provider value={{ models, refetch }}>
      {children}
    </ModelContext.Provider>
  );
};

export { ModelProvider, ModelContext };
