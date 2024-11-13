
import {useSelector, useDispatch} from "react-redux";

import {changeGameMode, changeGameDifficulty} from "../../redux/appSlice";

//Type Declarations
type MenuProps = {
}


export default function Menu(props) {

    const isMultiplayer = useSelector(state => state.app.isMultiplayer);
    const difficulty = useSelector(state => state.app.difficulty);
    const dispatch = useDispatch(); 

    return (<>
        <div>
            <label>
               Computer 
            <input type="checkbox" value={0} onChange={e => dispatch(changeGameMode(false))} checked={!isMultiplayer}/>
            </label>
            <label>
               Multiplayer 
               <input type="checkbox" value={1} onChange={ e => dispatch(changeGameMode(true))} checked={isMultiplayer}/>
               </label>
        </div>
        <div>
            <label>
                Difficulty
            <input type="range" min="1" max="100" value={difficulty} onChange={e => dispatch(changeGameDifficulty(parseInt(e.target.value)))} disabled={isMultiplayer}/>
            </label>
        </div>
    </>)
}