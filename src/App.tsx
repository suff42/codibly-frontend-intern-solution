import { CssBaseline } from "@mui/material";
import { StyledApp } from "./App.styled";
import Products from "./components/Products/Products";
import PageNumber from "./components/PageNumber/PageNumber";
import { useContext, useEffect } from "react";
import { ProductContextType, ResponseI } from "./context/ProductContext.types";
import { ProductsContext } from "./context/ProductsContext";

function App() {
  const { setProducts, setTotalPages, currentPage } = useContext(
    ProductsContext
  ) as ProductContextType;

  useEffect(() => {
    fetch(`https://reqres.in/api/products?page=${currentPage}&per_page=5`)
      .then((response) => response.json())
      .then((data: ResponseI) => {
        setProducts(data.data);
        setTotalPages(data.total_pages);
      });
  }, [currentPage]);

  return (
    <StyledApp>
      <CssBaseline />
      <input type="text" />
      <Products />
      <PageNumber />
    </StyledApp>
  );
}

export default App;
