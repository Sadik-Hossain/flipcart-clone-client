import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/header/Header";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>hello</h1>
      <Header />
    </div>
  );
}

export default App;
