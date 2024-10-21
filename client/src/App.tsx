import { useState } from 'react'

import Canvas from './components/canvas/Canvas';

import './App.css'

function App() {
  const [gameMode, setGameMode] = useState(0)  //GameMode state, 0 refers to playing against computer opponent, 1 refers to playing in multiplayer mode
  const [gameState, setGameState] = useState(false);  //State to track whether game is currently running or paused/stopped
  const [winner, setWinner] = useState("");   //Tracks the winner of the last party

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
