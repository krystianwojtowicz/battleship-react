import "./GameBoard.css";

export const GameBoard = (props: { id: string; className?: string }) => {
  const width = 10;
  const divs = Array.from({ length: width * width }, (_, index) => (
    <div key={index} className={`block`} id={index.toString()}></div>
  ));
  return (
    <div
      className={`game-board ${props.className && props.className}`}
      id={props.id}
    >
      {divs}
    </div>
  );
};
