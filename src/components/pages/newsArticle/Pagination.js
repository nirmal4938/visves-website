import React, { useState, useEffect } from "react";
// import './Pagination.scss';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <ul className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <li key={index} className={currentPage === index + 1 ? "active" : ""}>
          <button onClick={() => handlePageClick(index + 1)}>
            {index + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
