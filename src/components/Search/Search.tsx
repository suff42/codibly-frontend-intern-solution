import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { ProductContextType } from "../../context/ProductContext.types";

const Search = () => {
  const { id, setId } = useContext(ProductsContext) as ProductContextType;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setId(e.target.value);
    }
  };

  return <TextField label="ID..." value={id} onChange={handleInput} />;
};

export default Search;
