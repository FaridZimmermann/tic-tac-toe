import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeGameDifficulty } from '../../redux/appSlice';

interface DifficultySelectorProps {
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({ }) => {
    const [difficulty, setDifficulty] = useState(0);
  const dispatch = useDispatch();

  const handleDifficultyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDifficulty(parseInt(event.target.value));
  };

  return (
    <div>
            <label>
                Difficulty
            <input type="range" min="1" max="100" value={difficulty} onChange={handleDifficultyChange}/>
            </label>
    <button onClick={() => dispatch(changeGameDifficulty(difficulty))}>Apply Difficulty</button>
    </div>
  );
};

export default DifficultySelector;
