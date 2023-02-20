import "../styles/Card.scss";
import classNames from "classnames";

function Card({
  isOpen = false,
  handleClick,
  image,
}: {
  isOpen?: boolean;
  image: string;
  handleClick?: () => void;
}) {
  return (
    <div
      className={classNames("card", { ["isOpen"]: isOpen })}
      onClick={handleClick}
    >
      <div className="cardContent">
        <div className="cardFront">x</div>
        <div className="cardBack">
          <img className="cardImage" src={image} />
        </div>
      </div>
    </div>
  );
}

export default Card;
