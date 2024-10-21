
import "./Field.css";



//Type Declarations
type FieldProps = {
    value: number,
    onFieldClick: (position: Array<number>) => void,
    position: Array<number>
}

export default function Field({value, position, onFieldClick}: FieldProps) {

    return (
        <button className={`field ${!value && "empty"}`} onClick={() => onFieldClick(position)}>{value ? (value === 1 ? "X" : "O") : value}</button>
    )
}