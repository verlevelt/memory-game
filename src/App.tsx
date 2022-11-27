import reactLogo from "./assets/react.svg";
import "./App.scss";
import Card from "./components/card";
import { useState } from "react";

function App() {
  const [openCards, setOpenCards] = useState(["bar", "blep"]);

  const cardItems = [
    { id: "foo" },
    { id: "bar" },
    { id: "baz" },
    { id: "blep" },
  ];

  const handleClick = (id: string) => {
    setOpenCards([...openCards, id]);
  };

  const cardList = cardItems.map(cardItem => {
    return (
      <a onClick={() => handleClick(cardItem.id)}>
        <Card isOpen={openCards.includes(cardItem.id)}>{cardItem.id}</Card>
      </a>
    );
  });

  return <div className="App">{cardList}</div>;
}

export default App;
