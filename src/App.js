import './App.css';
import { useState } from 'react';


 function Square({value, onSquareClick}){
  return <button className='square' onClick={onSquareClick}> {value} </button>
}

export default function Board() {
  const [isNext,setIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handlClick(i){
    if(squares[i] || CalculateWinner(squares))
    {
      return;
    }
    const nextSquares = squares.slice();
    if(isNext){ nextSquares[i] = 'X' }else { nextSquares[i] = 'O';}
    setSquares(nextSquares);
    setIsNext(!isNext)
  }

  const winner = CalculateWinner(squares);
  let status;

  if(winner){
    status = "Congratulation Winner is : " + winner;
  }else{
    status = "Next Player is : " + (isNext ? "X" : "O");
  } 

  return (
    <>
      <div className='status'> {status} </div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick ={() => handlClick(0)} />
        <Square value={squares[1]} onSquareClick ={() => handlClick(1)} />
        <Square value={squares[2]} onSquareClick ={() => handlClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick ={() => handlClick(3)} />
        <Square value={squares[4]} onSquareClick ={() => handlClick(4)} />
        <Square value={squares[5]} onSquareClick ={() => handlClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick ={() => handlClick(6)} />
        <Square value={squares[7]} onSquareClick ={() => handlClick(7)} />
        <Square value={squares[8]} onSquareClick ={() => handlClick(8)} />
      </div>
    </>
  )

  function CalculateWinner(squares){

    const winProbability =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i = 0; i < winProbability.length; i++)
    {
      const [a,b,c] = winProbability[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      {
        console.log(squares);
        return squares[a];
      }
    }
    return null;
  }

}

