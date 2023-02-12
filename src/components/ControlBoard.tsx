import "../styles/ControlBoard.scss";

function ControlBoard({
  score,
  handleClick,
}: {
  score: number;
  handleClick: () => void;
}) {
  return (
    <div className="controlBoard">
      <div>Score: {score}</div> <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default ControlBoard;
