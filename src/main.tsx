import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductsContextProvider } from "./context/ProductsContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
