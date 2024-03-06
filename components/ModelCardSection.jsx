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
  const [itemsPerPage, setItemsPerPage] = useState(15);

  useEffect(() => {
    const handleResize = () => {
      // Adjust itemsPerPage based on window width
      const width = window.innerWidth;
      if (width < 650) {
        setItemsPerPage(8);
      } else if (width < 768) {
        setItemsPerPage(10);
      } else {
        setItemsPerPage(15); // Default value for large devices
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const getSortedFilteredModels = () => {
    let sortedFilteredModels = models.filter((model) =>
      model.title.toLowerCase().includes(filterQuery)
    );

    switch (sortOption) {
      case "Featured":
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


  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="filter-md:mt-12 sm:mt-8">
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
