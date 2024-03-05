"use client";

import ModelCardList from "@/components/ModelCardList";
import Pagination from "@/components/Pagination";
import { useContext, useEffect, useState } from "react";
import Filter from "./Filter";
import { ModelContext } from "@/lib/context";

export default function ModelCardSection() {
  const { models } = useContext(ModelContext);

  const [sortOption, setSortOption] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterQuery, setFilterQuery] = useState("");

  const itemsPerPage = 15;

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const getSortedFilteredModels = () => {
    // Start with all models or those matching the filter query
    let sortedFilteredModels = models.filter((model) =>
      model.title.toLowerCase().includes(filterQuery)
    );

    // Apply sorting or filtering based on the sortOption
    switch (sortOption) {
      case "Featured":
        // Optionally filter by featured models if you have such a flag; otherwise, do nothing special
        sortedFilteredModels = sortedFilteredModels.filter(
          (model) => model.featured
        );
        break;
      case "Most likes":
        sortedFilteredModels.sort((a, b) => b.likes - a.likes);
        break;
      case "Most downloads":
        sortedFilteredModels.sort((a, b) => b.downloads - a.downloads);
        break;
      case "All":
      default:
        // Optionally, do nothing or apply a default sort
        break;
    }

    return sortedFilteredModels;
  };

  const sortedFilteredModels = getSortedFilteredModels();
  const totalPage = Math.ceil(sortedFilteredModels.length / itemsPerPage);
  const currentModels = sortedFilteredModels.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearchChange = (event) => {
    setFilterQuery(event.target.value.toLowerCase());
  };

  const filteredModels = models.filter((model) =>
    model.title.toLowerCase().includes(filterQuery)
  );

  console.log("current", currentModels);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-12">
      <Filter
        searchTerm={filterQuery}
        handleSearchChange={handleSearchChange}
        models={models}
        onSortChange={handleSortChange}
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
