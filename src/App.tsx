import { CssBaseline } from "@mui/material";
import { StyledApp } from "./App.styled";

function App() {
  return (
    <StyledApp>
      <CssBaseline />
      <input type="text" />
      <div className="table">table</div>
      <p>pagination</p>
    </StyledApp>
  );
}

export default App;
