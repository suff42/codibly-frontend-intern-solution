import React from "react";

export interface ProductI {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface ResponseI {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ProductI[];
}

export interface ProductContextType {
  products: ProductI[];
  setProducts: (value: ProductI[]) => {};
  totalPages: number;
  setTotalPages: (value: number) => {};
  currentPage: number;
  setCurrentPage: (value: number) => {};
}

export interface ProductsContextI {
  children: React.ReactNode;
}
