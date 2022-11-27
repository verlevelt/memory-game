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
    if (openCards.includes(id)) {
      setOpenCards(openCards.filter(item => item !== id));
    } else if (openCards.length >= 2) {
      setOpenCards([]);
    } else {
      setOpenCards([...openCards, id]);
    }
  };

  const cardList = cardItems.map(cardItem => {
    return (
      <Card
        isOpen={openCards.includes(cardItem.id)}
        handleClick={() => handleClick(cardItem.id)}
      >
        {cardItem.id}
      </Card>
    );
  });

  return <div className="App">{cardList}</div>;
}

export default App;
