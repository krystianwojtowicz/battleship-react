import "./GameBoard.css";
import { Ship } from '../Ship/Ship';
import { useEffect, useState } from 'react';

export const GameBoard = (props: { id: string; className?: string }) => {
  const width = 10;
  const initialDivs = Array.from({ length: width * width }, (_, index) => ({
    key: index,
    className: 'block',
    id: index.toString(),
  }));

  const [divs, setDivs] = useState(initialDivs);
  let valid = false

  const destroyer = new Ship('destroyer', 2)
  const submarine = new Ship('submarine', 3)
  const cruiser = new Ship('cruiser', 3)
  const battleship = new Ship('battleship', 4)
  const carrier = new Ship('carrier', 5)
  const ships = [destroyer, submarine, cruiser, battleship, carrier]

  const addShipPiece = (ship: Ship) => {
    const randomBoolean = Math.random() < 0.5;
    const isHorizontal = randomBoolean;
    const randomStartIndex = Math.floor(Math.random() * width * width);

    const validStart = isHorizontal ? randomStartIndex <= width * width - ship.length ? randomStartIndex :
    width * width - ship.length :
    randomStartIndex <= width * width - width * ship.length ? randomStartIndex :
    randomStartIndex - ship.length * width + width
    const shipBlocks: number[] = [];
    for (let i = 0; i < ship.length; i++) {
      if (isHorizontal) {
        shipBlocks.push(validStart + i);
      } else {
        shipBlocks.push(validStart + i * width);
      }
    }

    
    if (isHorizontal) {
      valid = shipBlocks.every((_shipBlock, index) => 
      shipBlocks[0] % width !== width - (shipBlocks.length - (index +1)))
    } else {
      valid = shipBlocks.every((_shipBlock, index) => shipBlocks[0] < 90 + (width * index + 1))
    }

    const updatedDivs = [...divs];
    shipBlocks.forEach(shipBlock => {
      updatedDivs[shipBlock].className += ` ${ship.name} taken`;
    });

    setDivs(updatedDivs);
  };

  useEffect(() => {
    if (valid) {
      ships.forEach(ship => addShipPiece(ship))
    }
    // Tutaj możesz dodać inne statki, jeśli jest taka potrzeba.
  }, [valid]); // Wywołanie addShipPiece przy inicjalizacji komponentu.

  return (
    <div
      className={`game-board ${props.className && props.className}`}
      id={props.id}
    >
      {divs.map(div => (
        <div key={div.key} className={div.className} id={div.id}></div>
      ))}
    </div>
  );
};
// import "./GameBoard.css";
// import { Ship } from '../Ship/Ship'

// export const GameBoard = (props: { id: string; className?: string }) => {
//   const width = 10;
//   const divs = Array.from({ length: width * width }, (_, index) => (
//     <div key={index} className={`block`} id={index.toString()}></div>
//   ));

//   const destroyer = new Ship('destroyer', 2)
//   // const submarine = new Ship('submarine', 3)
//   // const cruiser = new Ship('cruiser', 3)
//   // const battleship = new Ship('battleship', 4)
//   // const carrier = new Ship('carrier', 5)
//   // const ships = [destroyer, submarine, cruiser, battleship, carrier]

//   const addShipPiece = (ship: Ship) => {
//     const randomBoolean = Math.random() < 0.5
//     const isHorizontal = randomBoolean
//     const randomStartIndex = Math.floor(Math.random() * width * width)
//     const shipBlocks = []
//     for (let i = 0; i < ship.length; i++) {
//       if(isHorizontal) {
//         shipBlocks.push(divs[randomStartIndex + i])
//       } else {
//         shipBlocks.push(divs[randomStartIndex + i * width])
//       }
//     }
//     console.log(shipBlocks)
//   //   shipBlocks.forEach(shipBlock => {
//   //     const element = shipBlock as unknown as HTMLElement;
//   // element.className += 's';
//   //   })
//   }
//   addShipPiece(destroyer)
//   return (
//     <div
//       className={`game-board ${props.className && props.className}`}
//       id={props.id}
//     >
//       {divs}
//     </div>
//   );
// };
