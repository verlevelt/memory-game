import "./App.scss";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import ControlBoard from "./components/ControlBoard";

interface CardItem {
  id: number;
  image: string;
  value: string;
}

interface CardId {
  id: number;
  value: string;
}

function App() {
  const [openCards, setOpenCards] = useState<CardId[]>([]);

  const [currentRound, setCurrentRound] = useState<CardId[]>([]);

  const [score, setScore] = useState<number>(0);

  const [shuffledCardItems, setShuffledCardItems] = useState<CardItem[]>([]);

  const cardItems: CardItem[] = [
    { image: "logos/react.svg", id: 0, value: "react" },
    { image: "logos/react.svg", id: 1, value: "react" },
    { image: "logos/next.svg", id: 2, value: "next" },
    { image: "logos/next.svg", id: 3, value: "next" },
    { image: "logos/astro.svg", id: 4, value: "astro" },
    { image: "logos/astro.svg", id: 5, value: "astro" },
    { image: "logos/typescript.svg", id: 6, value: "typescript" },
    { image: "logos/typescript.svg", id: 7, value: "typescript" },
    { image: "logos/graphql.svg", id: 8, value: "graphQl" },
    { image: "logos/graphql.svg", id: 9, value: "graphQl" },
    { image: "logos/vite.svg", id: 10, value: "vite" },
    { image: "logos/vite.svg", id: 11, value: "vite" },
  ];

  const shuffle = (a: CardItem[]) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

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
    } else if (currentRound.length === 2) {
      return;
    } else {
      setCurrentRound([...currentRound, { id: id, value: value }]);
    }
  };

  const resetGame = () => {
    setCurrentRound([]);
    setOpenCards([]);
    setScore(0);
    setTimeout(() => setShuffledCardItems(shuffle(cardItems)), 300); //wait until the flip animation is done
  };

  useEffect(() => {
    if (currentRound.length === 2) {
      compare(currentRound);
    } else return;
  }, [currentRound]);

  useEffect(() => {
    setShuffledCardItems(shuffle(cardItems));
  }, []);

  const cardList = shuffledCardItems.map(cardItem => {
    return (
      <Card
        isOpen={
          openCards.some(item => item.id === cardItem.id) ||
          currentRound.some(item => item.id === cardItem.id)
        }
        image={cardItem.image}
        handleClick={() => handleClick(cardItem.id, cardItem.value)}
      />
    );
  });

  return (
    <div className="app">
      <ControlBoard score={score} handleClick={() => resetGame()} />
      <div className="cards">{cardList}</div>
    </div>
  );
}

export default App;
