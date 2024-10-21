import { useState } from 'react'

import Canvas from './components/canvas/Canvas';

import './App.css'

function App() {

  const [gameState, setGameState] = useState(false);
  const [winner, setWinner] = useState("");

 function handleEndGame(player: number) {
    setGameState(false);
    setWinner(`${player}`);
  }

  return (
    <>
    {winner && <p>{`Player ${winner} won the party`}</p>}
    {winner ? <button onClick={() => setWinner("")}>Reset</button> : <button onClick={() => setGameState(!gameState)}>Start/Stop Game</button>}


     <Canvas gameState={gameState} endGame={handleEndGame} clearCanvas={!(!winner)}/>
    </>
  )
}

export default App
