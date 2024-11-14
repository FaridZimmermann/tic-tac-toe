
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import  {updateCanvas} from "../../redux/appSlice";


import Field from "./Field";



//Type Declarations
interface CanvasProps {
    gameRunning: boolean;
}


const Canvas : React.FC<CanvasProps> = ({gameRunning}) => {

    const dispatch = useDispatch();
    const canvas = useSelector((state) => state.app.canvas);


    function handleFieldClick(position: Array<number>) {
        if (gameRunning) {
            dispatch(updateCanvas(position));
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

export default Canvas;