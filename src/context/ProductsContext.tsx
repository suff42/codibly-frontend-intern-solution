import React, { createContext, useState } from "react";
import { ProductI, ProductsContextI } from "./ProductContext.types";

export const ProductsContext = createContext({});

export const ProductsContextProvider: React.FC<ProductsContextI> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductI[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
