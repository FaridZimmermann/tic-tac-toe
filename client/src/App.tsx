import { useState } from 'react'
import {Provider, useSelector, useDispatch} from "react-redux";
import {store} from "./redux/store";
import {toggleGameRunning} from "./redux/appSlice";
import Canvas from './components/canvas/Canvas';
import Menu from "./components/menu/Menu";

import './App.css'

function App() {
  const [gameMode, setGameMode] = useState(0)  //GameMode state, 0 refers to playing against computer opponent, 1 refers to playing in multiplayer mode
  const [gameState, setGameState] = useState(false);  //State to track whether game is currently running or paused/stopped
  const [winner, setWinner] = useState("");   //Tracks the winner of the last party
  
  const dispatch = useDispatch();
  const gameRunning = useSelector(state => state.gameRunning);

 function handleEndGame(player: number) {
    setGameState(false);
    setWinner(`${player}`);
  }

  return (
    <>
      <Provider store={store}>

          <Menu />

            {winner && <p>{`Player ${winner} won the party`}</p>}
            {winner ? <button onClick={() => setWinner("")}>Reset</button> : 
            <button onClick={() => dispatch(toggleGameRunning())}>Start/Stop Game</button>}

          <Canvas gameRunning={gameRunning} endGame={handleEndGame} clearCanvas={!(!winner)}/>

      </Provider>
    </>
  )
}



export default App
