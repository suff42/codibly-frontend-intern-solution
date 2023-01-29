import { CssBaseline } from "@mui/material";
import { StyledApp } from "./App.styled";
import Products from "./components/Products/Products";
import PageNumber from "./components/PageNumber/PageNumber";
import { useContext, useEffect } from "react";
import {
  ProductContextType,
  ProductI,
  ResponseI,
} from "./context/ProductContext.types";
import { ProductsContext } from "./context/ProductsContext";
import Search from "./components/Search/Search";
import { buildAPIAddress } from "./utils/helpers";

function App() {
  const { setProducts, setTotalPages, currentPage, id } = useContext(
    ProductsContext
  ) as ProductContextType;

  useEffect(() => {
    fetch(buildAPIAddress(currentPage, id))
      .then((response) => {
        return response.json();
      })
      .then((data: ResponseI) => {
        id ? setProducts([data.data as ProductI]) : setProducts(data.data),
          setTotalPages(data.total_pages);
      });
  }, [currentPage, id]);

  return (
    <StyledApp>
      <CssBaseline />
      <Search />
      <Products />
      {id ? null : <PageNumber />}
    </StyledApp>
  );
}

export default App;
