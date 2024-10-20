
import {useState, useEffect} from "react";


import Field from "./Field";

import checkGameState from "../../helpers/checkGameState";





//Type Declarations
type CanvasProps = {
    gameState: boolean,
    endGame: () => void
}


let CANVAS = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];


export default function Canvas({gameState, endGame}) : CanvasProps {

    const [canvas, setCanvas] = useState(CANVAS);
    const [currentPlayer, setCurrentPlayer] = useState(1);


    useEffect(() => {
        if (checkGameState(canvas, currentPlayer)) {
            endGame(currentPlayer);
        } else {
            setCurrentPlayer(currentPlayer === 1 ? 2 : 1);

        }

    }, [canvas]);



  function handleFieldClick(position: Array<number>) {
    if (gameState) {
        const [i, j] = position;

        let copyCanvas: number[][] = canvas.map(row => [...row]);
        if (!copyCanvas[i][j]) {
            
        copyCanvas[i][j] = currentPlayer;

        setCanvas(copyCanvas);
    }
}
    }


    return(
        <ul>
            {canvas.map((row, i) => {
              return  <div className="row" key={i}>
                    {
                        row.map((field, j) => {
                            return <Field key={`${i}${j}`} position={[i, j]} value={field} onFieldClick={handleFieldClick} />
                        })
                    }
                </div>
            })}
        </ul>
    )
}