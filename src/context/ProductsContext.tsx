import React, { createContext, useState } from "react";
import { ProductI, ProductsContextI } from "./ProductContext.types";

export const ProductsContext = createContext({});

export const ProductsContextProvider: React.FC<ProductsContextI> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductI[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, totalPages, setTotalPages }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
