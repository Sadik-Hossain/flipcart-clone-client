import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
