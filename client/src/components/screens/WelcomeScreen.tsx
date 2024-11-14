import React from 'react';
import {useSelector, useDispatch} from "react-redux";

import {changeGameMode, changeGameDifficulty} from "../../redux/appSlice";


interface WelcomeScreenProps {
  title?: string;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ title }) => {
    const dispatch = useDispatch(); 

  return (
    <div>
      <h1>Welcome to Tic-Tac-Toe</h1>
      <h3>Choose your Game Mode</h3>
      <div>

        <button onClick={() => dispatch(changeGameMode(false))}>Against Computer Opponent</button>
        <button onClick={() => dispatch(changeGameMode(true))}>Multi-Player</button>
        </div>
    </div>
  );
};

export default WelcomeScreen;
