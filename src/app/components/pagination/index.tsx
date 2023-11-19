import React, { useState } from "react";

const Pagination = () => {
  const [totalPages, setTotalPages] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <button
          key={i}
          className={`mx-1 px-3 py-2 rounded font-semibold text-2xl ${
            currentPage === i ? " text-green" : " text-black"
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div>
        {paginationItems}
        <button
          className="text-gray text-xl font-semibold "
          onClick={() => {
            totalPages > currentPage
              ? setCurrentPage(currentPage + 1)
              : setCurrentPage(1);
          }}
        >
          next
        </button>
      </div>
    );
  };

  return (
    <div className="flex justify-center mt-4">{renderPaginationItems()}</div>
  );
};

export default Pagination;
