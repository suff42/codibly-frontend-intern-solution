import { CssBaseline } from "@mui/material";
import { StyledApp } from "./App.styled";
import Products from "./components/Products/Products";
import PageNumber from "./components/PageNumber/PageNumber";

function App() {
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
