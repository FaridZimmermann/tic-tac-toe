
import {useState} from "react";


//Type Declarations
type MenuProps = {
}


export default function Menu(props) {

    const [difficulty, setDifficulty] = useState(0);
    const [gameType, setGameType] = useState(0);

    return (<>
        <div>
            <label>
               Computer 
            <input type="checkbox" value={"0"} onChange={ e => setGameType(parseInt(e.target.value))} checked={gameType === 0}/>
            </label>
            <label>
               Multiplayer 
               <input type="checkbox" value={"1"} onChange={ e => setGameType(parseInt(e.target.value))} checked={gameType === 1}/>
               </label>
        </div>
        <div>
            <label>
                Difficulty
            <input type="range" min="1" max="100" value={difficulty} onChange={e => setDifficulty(parseInt(e.target.value))} disabled={gameType === 1}/>
            </label>
        </div>
    </>)
}