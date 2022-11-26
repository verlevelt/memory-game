import "../styles/card.scss";
import classNames from "classnames";

function Card({
  children,
  isOpen = false,
}: {
  children: React.ReactNode;
  isOpen?: boolean;
}) {
  return (
    <div className={classNames("card", { ["isOpen"]: isOpen })}>
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
