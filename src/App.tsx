import { CssBaseline } from "@mui/material";
import { StyledApp } from "./App.styled";
import Table from "./components/Table/Table";

function App() {
  return (
    <StyledApp>
      <CssBaseline />
      <input type="text" />
      <Table />
      <p>pagination</p>
    </StyledApp>
  );
}

export default App;
