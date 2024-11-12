console.log("abc")
import checkGameState from "./checkGameState"

function evaluate(board) {
    if (checkGameState(board, 1)) return 10;
    if (checkGameState(board, 2)) return -10;
    return 0;
}

function boardIsFull(board) {
    return board.filter(row => row.filter(cell => cell !== 0).length === 3).length === 
}
function negamax(board, depth, alpha, beta, color) {
    
    const score = evaluate(board);

    if(score === 10 || score === -10 || )
}