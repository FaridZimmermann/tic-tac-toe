import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {changeGameMode, changeGameDifficulty} from "../../redux/appSlice";

import MultiplayerSelector from './MultiplayerSelector';
import DifficultySelector from './DifficultySelector';

interface WelcomeScreenProps {
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {

  const dispatch = useDispatch(); 
  const gameMode = useSelector(state => state.app.gameMode);

  return (
    <div>
      <h1>Welcome to Tic-Tac-Toe</h1>
      <h3>Choose your Game Mode</h3>
      <div>

        
          {!gameMode ?
            <>
            <button onClick={() => dispatch(changeGameMode(1))}>Against Computer Opponent</button>
            <button onClick={() => dispatch(changeGameMode(2))}>Multi-Player</button>
            </>
            :
           { gameMode === 1 ? <DifficultySelector /> : <MultiplayerSelector} }
          

        </div>
    </div>
  );
};

export default WelcomeScreen;
