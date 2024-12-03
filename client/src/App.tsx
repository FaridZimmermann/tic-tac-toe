import { useEffect } from 'react'
import {Provider, useSelector, useDispatch} from "react-redux";
import {store} from "./redux/store";
import { socket } from './socket/socket';
import {toggleGameRunning, resetGame, addConnectedUser, removeConnectedUser, addInitialUsers, User} from "./redux/appSlice";
import WelcomeScreen from './components/screens/WelcomeScreen';
import Canvas from './components/canvas/Canvas';

import './App.css'



function App() {
  const winner = useSelector(state => state.app.winner);  //Tracks the winner of the last party
  const gameRunning = useSelector(state => state.app.gameRunning);

  const dispatch = useDispatch();


  useEffect(() => {
      socket.connect();
      return () => {
        socket.disconnect();
      };
    
  }, []);

  useEffect(() => {
    // Listen for updates on connected users
    socket.on("userJoined", (user: User) => {
      dispatch(addConnectedUser(user));
    });
    socket.on("userLeft", (user: User) => {
      dispatch(removeConnectedUser(user.id));
    })



    return () => {
      socket.off("userJoined");
      socket.off("userLeft");
    };
  }, [socket]);



  return (
    <>
      <Provider store={store}>

         { /*<SettingsMenu />

            {winner && <p>{`Player ${winner} won the party`}</p>}
            {winner ? <button onClick={() => dispatch(resetGame())}>Reset</button> : 
            <button onClick={() => dispatch(toggleGameRunning())}>Start/Stop Game</button>}
            */}
        <WelcomeScreen />
        {gameRunning &&  <Canvas gameRunning={gameRunning} />}
         

      </Provider>
    </>
  )
}



export default App
