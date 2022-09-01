import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ParallaxRender } from "./components/ParallaxRender";

function App() {
  const [count, setCount] = useState(0);

  return <ParallaxRender />;
}

export default App;
