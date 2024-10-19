
import {useState} from "react";


import Field from "./Field";


let CANVAS = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];


export default function Canvas() {

    const [canvas, setCanvas] = useState(CANVAS);
    const [currentPlayer, setCurrentPlayer] = useState(1);

  function handleFieldClick(key: string) {
        console.log(key)
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