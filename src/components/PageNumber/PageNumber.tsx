import React, { useContext } from "react";
import { Pagination } from "@mui/material";
import { ProductsContext } from "../../context/ProductsContext";
import { ProductContextType } from "../../context/ProductContext.types";

const PageNumber = () => {
  const { totalPages, setCurrentPage } = useContext(
    ProductsContext
  ) as ProductContextType;

  const hanglePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return <Pagination count={totalPages} onChange={hanglePageChange} />;
};

export default PageNumber;
