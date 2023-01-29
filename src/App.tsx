import { CssBaseline } from "@mui/material";
import { StyledApp } from "./App.styled";
import Products from "./components/Products/Products";
import { useContext, useEffect, useState } from "react";
import {
  ProductContextType,
  ProductI,
  ResponseI,
} from "./context/ProductContext.types";
import { ProductsContext } from "./context/ProductsContext";
import Search from "./components/Search/Search";
import { buildAPIAddress } from "./utils/helpers";
import NetworkError from "./components/NetworkError/NetworkError";

function App() {
  const [networkError, setNetworkError] = useState(0);

  const { setProducts, setTotalPages, currentPage, id } = useContext(
    ProductsContext
  ) as ProductContextType;

  useEffect(() => {
    fetch(buildAPIAddress(currentPage, id))
      .then((response) => {
        if (response.ok) {
          setNetworkError(0);
          return response.json();
        } else {
          setNetworkError(response.status);
          throw new Error(`Network Error code: ${response.status}`);
        }
      })
      .then((data: ResponseI) => {
        id ? setProducts([data.data as ProductI]) : setProducts(data.data),
          setTotalPages(data.total_pages);
      })
      .catch((error) => console.log(error));
  }, [currentPage, id]);

  return (
    <StyledApp>
      <CssBaseline />
      <Search />
      {networkError ? <NetworkError statusCode={networkError} /> : <Products />}
    </StyledApp>
  );
}

export default App;
