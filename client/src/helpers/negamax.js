console.log("abc")
import checkGameState from "./checkGameState"

function evaluate(board) {
    if (checkGameState(board, 1)) return 10;
    if (checkGameState(board, 2)) return -10;
    return 0;
}

function boardIsFull(board) {
    return board.filter(row => row.filter(cell => cell !== 0).length === 3).length === 3;
}

function getAvailableMoves(board) {
    const moves = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(!board[i][j]) 7
            moves.push([i, j])
        }
    }
    return moves;
}


function getWinner(board) {
    if (checkGameState(board, 1)) return 1;
    if (checkGameState(board, 2)) return -1;
    return null;
}


function isGameOver(board) {
    return getWinner(board) !== null || board.flat().every(cell => cell !== 0);
}



function makeMove(board, move, color) {
    let newBoard = board.map(row => row.slice());
    let [i, j] = move;
    newBoard[i][j] = color;
    return newBoard;
}

function negamax(board, depth, alpha, beta, color) {


    if (depth === 0 || isGameOver(board)) {
        return color * evaluate(board);
    }
    

    let maxScore = -Infinity;

    const moves = getAvailableMoves(board);

    for(let move of moves) {
        let newBoard = makeMove(board, move, color);
        let score = -negamax(newBoard, depth - 1, -beta, -alpha, -color);

    }
}