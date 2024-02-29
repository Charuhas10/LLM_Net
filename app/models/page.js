"use client";

import ModelCardList from "@/components/ModelCardList";
import Navbar from "@/components/Navbar";
import models from "@/models";
import { useState } from "react";

export default function Models() {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(models.length / itemsPerPage);

  // Calculate the slice of models to display
  const currentModels = models.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Pagination handlers
  const nextPage = () =>
    setCurrentPage((prev) => (prev < maxPage ? prev + 1 : prev));
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  console.log(models);
  return (
    <div>
      <Navbar />
      <ModelCardList models={currentModels} />
      <div className="flex justify-center space-x-2 my-4">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === maxPage}>
          Next
        </button>
      </div>
    </div>
  );
}
