import { useState } from 'react'
import {Provider, useSelector, useDispatch} from "react-redux";
import {store} from "./redux/store";
import {toggleGameRunning, resetGame} from "./redux/appSlice";
import Canvas from './components/canvas/Canvas';
import Menu from "./components/menu/Menu";

import './App.css'

function App() {
  const winner = useSelector(state => state.app.winner);  //Tracks the winner of the last party
  const gameRunning = useSelector(state => state.app.gameRunning);
 
  const dispatch = useDispatch();

  return (
    <>
      <Provider store={store}>

          <Menu />

            {winner && <p>{`Player ${winner} won the party`}</p>}
            {winner ? <button onClick={() => dispatch(resetGame())}>Reset</button> : 
            <button onClick={() => dispatch(toggleGameRunning())}>Start/Stop Game</button>}

          <Canvas gameRunning={gameRunning} />

      </Provider>
    </>
  )
}



export default App
