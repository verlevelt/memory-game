import reactLogo from "./assets/react.svg";
import "./App.scss";
import Card from "./components/card";
import { useEffect, useState } from "react";

function App() {
  const [openCards, setOpenCards] = useState<{ id: number; value: string }[]>(
    []
  );

  const [currentRound, setCurrentRound] = useState<
    { id: number; value: string }[]
  >([]);

  const [score, setScore] = useState<number>(0);

  const cardItems: { id: number; image: string; value: string }[] = [
    { image: "", id: 0, value: "react" },
    { image: "", id: 1, value: "react" },
    { image: "", id: 2, value: "next" },
    { image: "", id: 3, value: "next" },
    { image: "", id: 4, value: "astro" },
    { image: "", id: 5, value: "astro" },
    { image: "", id: 6, value: "typescript" },
    { image: "", id: 7, value: "typescript" },
    { image: "", id: 8, value: "graphQl" },
    { image: "", id: 9, value: "graphQl" },
    { image: "", id: 10, value: "sass" },
    { image: "", id: 11, value: "sass" },
  ];

  const compare = (arr: { id: number; value: string }[]) => {
    if (arr[0].value === arr[1].value) {
      setScore(score => (score += 1));
      setOpenCards([
        ...openCards,
        { id: arr[0].id, value: arr[0].value },
        { id: arr[1].id, value: arr[1].value },
      ]);
      setCurrentRound([]);
    } else {
      setTimeout(() => {
        setCurrentRound([]);
      }, 1000);
    }
  };

  const handleClick = (id: number, value: string) => {
    if (currentRound.some(item => item.id === id)) {
      setCurrentRound(currentRound.filter(item => item.id !== id));
    } else {
      setCurrentRound([...currentRound, { id: id, value: value }]);
    }
  };

  useEffect(() => {
    if (currentRound.length === 2) {
      compare(currentRound);
    } else return;
  }, [currentRound]);

  const cardList = cardItems.map(cardItem => {
    return (
      <Card
        isOpen={
          openCards.some(item => item.id === cardItem.id) ||
          currentRound.some(item => item.id === cardItem.id)
        }
        handleClick={() => handleClick(cardItem.id, cardItem.value)}
      >
        {cardItem.value}
      </Card>
    );
  });

  return (
    <div className="App">
      {score}
      <div className="cards">{cardList}</div>
    </div>
  );
}

export default App;
