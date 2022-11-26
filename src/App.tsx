import reactLogo from "./assets/react.svg";
import "./App.scss";
import Card from "./components/card";
import { useState } from "react";

function App() {
  const [openCards, setOpenCards] = useState([]);

  return (
    <div className="App">
      <Card>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </Card>

      <Card isOpen>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </Card>
    </div>
  );
}

export default App;
