import { useState } from 'react'

import Canvas from './components/canvas/Canvas';

import './App.css'

function App() {

  const [gameState, setGameState] = useState(false);

  return (
    <>
     <button onClick={() => setGameState(!gameState)}>Start/Stop Game</button>
     <Canvas gameState={gameState} endGame={() => setGameState(false)}/>
    </>
  )
}

export default App
