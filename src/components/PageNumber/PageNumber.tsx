import React, { useContext } from "react";
import { Pagination } from "@mui/material";
import { ProductsContext } from "../../context/ProductsContext";
import { ProductContextType } from "../../context/ProductContext.types";

const PageNumber = () => {
  const { totalPages, currentPage, setCurrentPage } = useContext(
    ProductsContext
  ) as ProductContextType;

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
    />
  );
};

export default PageNumber;
