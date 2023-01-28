import { CssBaseline } from "@mui/material";
import { StyledApp } from "./App.styled";
import Products from "./components/Products/Products";

function App() {
  return (
    <StyledApp>
      <CssBaseline />
      <input type="text" />
      <Products />
      <p>pagination</p>
    </StyledApp>
  );
}

export default App;
