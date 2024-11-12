
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import  {updateCanvas} from "../../redux/appSlice";


import Field from "./Field";



//Type Declarations
type CanvasProps = {
    gameRunning: boolean
}


let CANVAS = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];


export default function Canvas({gameRunning}) : CanvasProps {

    const [currentPlayer, setCurrentPlayer] = useState(1);
    const dispatch = useDispatch();
    const canvas = useSelector((state) => state.app.canvas);
    console.log("Canvas", canvas)


    function handleFieldClick(position: Array<number>) {
        if (gameRunning) {
            dispatch(updateCanvas(position));
        }
    }
        
/*
  function handleFieldClick(position: Array<number>) {
    if (gameRunning) {
        const [i, j] = position;

        let copyCanvas: number[][] = canvas.map(row => [...row]);
        if (!copyCanvas[i][j]) {
            
        copyCanvas[i][j] = currentPlayer;

        setCanvas(copyCanvas);
    }
}
    } */


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