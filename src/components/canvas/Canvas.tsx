

import Field from "./Field";


const CANVAS = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];


export default function Canvas() {


    return(
        <ul>
            {CANVAS.map((row, i) => {
              return  <div className="row" key={i}>
                    {
                        row.map((field, j) => {
                            return <Field key={`${i}${j}`} value={field} />
                        })
                    }
                </div>
            })}
        </ul>
    )
}