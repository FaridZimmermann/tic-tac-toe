import { useEffect } from 'react'
import {Provider, useSelector, useDispatch} from "react-redux";
import {store} from "./redux/store";
import { socket } from './socket/socket';
import {toggleGameRunning, resetGame} from "./redux/appSlice";
import Canvas from './components/canvas/Canvas';
import SettingsMenu from "./components/menu/SettingsMenu";

import './App.css'

function App() {
  const winner = useSelector(state => state.app.winner);  //Tracks the winner of the last party
  const gameRunning = useSelector(state => state.app.gameRunning);
  const isMultiplayer = useSelector(state => state.app.isMultiplayer);

  const dispatch = useDispatch();


  useEffect(() => {
    if (isMultiplayer) {
      socket.connect();
      return () => {
        socket.disconnect();
      };
    }
  }, [isMultiplayer]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Is Connected to socket")
    })
    socket.on("disconnect", () => {
      console.log("Is disconnected to socket")
    })
    socket.on("foo", () => {
      console.log("foo bar")
    })
    return () => {
      socket.off('connect', () => {
        console.log("Is Connected to socket")
      });
      socket.off('disconnect', () => {
        console.log("Is disconnected to socket")
      });
      socket.off('foo', () => {
        console.log("foo bar")
      });
    };
  }, [])

  return (
    <>
      <Provider store={store}>

          <SettingsMenu />

            {winner && <p>{`Player ${winner} won the party`}</p>}
            {winner ? <button onClick={() => dispatch(resetGame())}>Reset</button> : 
            <button onClick={() => dispatch(toggleGameRunning())}>Start/Stop Game</button>}

        {gameRunning &&  <Canvas gameRunning={gameRunning} />}
         

      </Provider>
    </>
  )
}



export default App
