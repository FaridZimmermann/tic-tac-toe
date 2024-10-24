
import {useState} from "react";


//Type Declarations
type MenuProps = {
    gameState: boolean,
    endGame: () => void,
    clearCanvas:boolean
}


export default function Menu(props) {

    return (<>
        <div>
            <label>
               Computer 
            <input type="checkbox" />
            </label>
            <label>
               Multiplayer 
            <input type="checkbox" />
            </label>
        </div>
        <div>
            <input type="range" min="1" max="100" value="0"/>
        </div>
    </>)
}