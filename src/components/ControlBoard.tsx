import "../styles/ControlBoard.scss";

function ControlBoard({
  score,
  handleClick,
}: {
  score: number;
  handleClick: () => void;
}) {
  return (
    <div>
      <div>Score: {score}</div> <button onClick={handleClick}>Reset</button>{" "}
    </div>
  );
}

export default ControlBoard;
