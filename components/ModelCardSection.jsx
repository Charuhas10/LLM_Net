"use client";

import ModelCardList from "@/components/ModelCardList";
import Pagination from "@/components/Pagination";
import models from "@/models";
import { useState } from "react";
import Filter from "./Filter";

export default function ModelCardSection() {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [filterQuery, setFilterQuery] = useState("");

  const handleSearchChange = (event) => {
    setFilterQuery(event.target.value.toLowerCase());
  };

  const filteredModels = models.filter((model) =>
    model.title.toLowerCase().includes(filterQuery)
  );

  const totalPage = Math.ceil(filteredModels.length / itemsPerPage);

  // Calculate the slice of models to display
  const currentModels = filteredModels.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-12">
      <Filter
        searchTerm={filterQuery}
        handleSearchChange={handleSearchChange}
      />
      <ModelCardList models={currentModels} />
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

// className={`mt-12 ${theme === "dark" ? "dark" : ""}`}
