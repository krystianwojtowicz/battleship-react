import "./GameBoard.css";
import { Ship } from '../Ship/Ship';
import { useState } from 'react';

export const GameBoard = (props: { id: string; className?: string }) => {
  const width = 10;
  const initialDivs = Array.from({ length: width * width }, (_, index) => ({
    key: index,
    className: 'block',
    id: index.toString(),
  }));

  const [divs, setDivs] = useState(initialDivs);
  let valid: boolean = false;

  const destroyer = new Ship('destroyer', 2)
  const submarine = new Ship('submarine', 3)
  const cruiser = new Ship('cruiser', 3)
  const battleship = new Ship('battleship', 4)
  const carrier = new Ship('carrier', 5)
  const ships = [destroyer, submarine, cruiser, battleship, carrier]

  const updateValid = () => {
    // Tutaj umieść logikę aktualizacji valid na podstawie innych warunków.
    // Na przykład, możesz sprawdzać, czy statki są poprawnie umieszczone na planszy.
    valid = true; // Przykładowa logika.
  };

  const addShipPiece = (ship: Ship) => {
    const randomBoolean = Math.random() < 0.5;
    const isHorizontal = randomBoolean;
    const randomStartIndex = Math.floor(Math.random() * width * width);

    // ...

    updateValid(); // Aktualizacja valid na podstawie logiki umieszczania statków.

    const updatedDivs = [...divs];
    shipBlocks.forEach(shipBlock => {
      updatedDivs[shipBlock].className += ` ${ship.name} taken`;
    });

    setDivs(updatedDivs);
  };

  // useEffect(() => {
  //   if (valid) {
  //     ships.forEach(ship => addShipPiece(ship))
  //   }
  //   // Tutaj możesz dodać inne statki, jeśli jest taka potrzeba.
  // }, [valid]);

  return (
    <div
      className={`game-board ${props.className && props.className}`}
      id={props.id}
    >
      {/* Renderowanie planszy */}
    </div>
  );
};