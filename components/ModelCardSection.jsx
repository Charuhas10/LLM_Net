"use client";

import ModelCardList from "@/components/ModelCardList";
import Pagination from "@/components/Pagination"; // Import the Pagination component
import models from "@/models";
import { useState } from "react";

export default function ModelCardSection() {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(models.length / itemsPerPage); // Renamed from maxPage for consistency

  // Calculate the slice of models to display
  const currentModels = models.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-16">
      <ModelCardList models={currentModels} />
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}
