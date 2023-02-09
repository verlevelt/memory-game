import "../styles/Card.scss";
import classNames from "classnames";

function Card({
  children,
  isOpen = false,
  handleClick,
}: {
  children: React.ReactNode;
  isOpen?: boolean;
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
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
