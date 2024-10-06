import React, { useState } from 'react';
import './App.css'; 
const App = () => {
  const [box, setBox] = useState(Array(9).fill(null)); 
  const [next, setNext] = useState(true);
  
  const Click = (ind) => {
    if (box[ind] || calculateWinner(box)) return;
    const newBox = box.slice();
    newBox[ind] = next ? 'X' : 'O';
    setBox(newBox);
    setNext(!next);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(box);
  const isBoardFull = box.every(square => square);

  let status;
  if (winner) {
    status = `Winner: ${winner === 'X' ? 'Player 1' : 'Player 2'}`;
  } else if (isBoardFull) {
    status = "It's a tie!";
  } else {
    status = `Next Player: ${next ? 'Player 1 (X)' : 'Player 2 (O)'}`;
  }

  const renderSquare = (ind) => (
    <button className="square" onClick={() => Click(ind)}>
      {box[ind]}
    </button>
  );

  const resetGame = () => {
    setBox(Array(9).fill(null)); 
    setNext(true); 
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <h4>Player 1: "X"     Player 2: "O"</h4>
      <div className="status">{status}</div>
      <div>
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
      </div>
      <button onClick={resetGame}>Restart Game</button>
    </div>
  );
};

export default App;
