import React, { createContext, useState } from "react";
import { ProductI, ProductsContextI } from "./ProductContext.types";
import { useSearchParams } from "react-router-dom";

export const ProductsContext = createContext({});

export const ProductsContextProvider: React.FC<ProductsContextI> = ({
  children,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("currentPage"));

  const [products, setProducts] = useState<ProductI[]>([]);
  const [id, setId] = useState(searchParams.get("id") ?? "");
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("currentPage") ?? "1")
  );
  const [totalPages, setTotalPages] = useState(1);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        totalPages,
        setTotalPages,
        currentPage,
        setCurrentPage,
        id,
        setId,
        setSearchParams,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
