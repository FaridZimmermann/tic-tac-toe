
import "./Field.css";



//Type Declarations
type FieldProps = {
    value: number
}

export default function Field({value}: FieldProps) {

    return (
        <button className="field">{value}</button>
    )
}