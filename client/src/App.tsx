import { useEffect } from 'react'
import {Provider, useSelector, useDispatch} from "react-redux";
import {store} from "./redux/store";
import { socket } from './socket/socket';
import {toggleGameRunning, resetGame, addConnectedUser, removeConnectedUser, addInitialUsers, User} from "./redux/appSlice";
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
    // Listen for updates on connected users
    socket.on("userJoined", (user: User) => {
      dispatch(addConnectedUser(user));
    });
    socket.on("userLeft", (user: User) => {
      dispatch(removeConnectedUser(user.id));
    })

    socket.on("receiveConnectedUsers", (users: User[]) => {
      dispatch(addInitialUsers(users))

    })

    // Fetch initial list of connected users
    socket.emit("getConnectedUsers");

    return () => {
      socket.off("userJoined");
      socket.off("userLeft");
    };
  }, [socket]);



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
