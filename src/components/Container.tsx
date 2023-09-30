import { useState } from "react";

export const Container = () => {
  const [rotate, setRotate] = useState<boolean>(false);
  return (
    <main>
      <div id="game-info">
        <p>
          Turn: <span id="turn-display"></span>
        </p>
        <p>
          Info: <span id="info"></span>
        </p>
      </div>

      <div id="gameboard-container"></div>

      <div className="option-container">
        <div
          className={`destroyer-preview destroyer ${rotate && "transform"}`}
          draggable="true"
        ></div>
        <div
          className={`submarine-preview submarine ${rotate && "transform"}`}
          draggable="true"
        ></div>
        <div
          className={`cruiser-preview cruiser ${rotate && "transform"}`}
          draggable="true"
        ></div>
        <div
          className={`battleship-preview battleship ${rotate && "transform"}`}
          draggable="true"
        ></div>
        <div
          className={`carrier-preview carrier ${rotate && "transform"}`}
          draggable="true"
        ></div>
      </div>

      <button onClick={() => setRotate(!rotate)} id="flip-button">
        flip
      </button>
      <button id="start-button">start</button>
    </main>
  );
};
