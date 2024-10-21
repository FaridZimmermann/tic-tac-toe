

export function transformArray(arr: number[][]) : number[][] {
    //Function to extract vertical lines of two-dimensional Array to check for game state

    const newArr: number[][] = [[], [], []];

    arr.forEach((row, i) => {
        row.forEach((field, j) => {
            newArr[j][i] = field;
        })
    })

    return newArr;
}

export function extractDiagonals(arr: number[][]) : number[][] {
    //Function to extract diagomals from Game Canvas to check for game state
    return [[arr[0][0], arr[1][1], arr[2][2]], [arr[0][2], arr[1][1], arr[2][0]]];
}

function hasThreeInRow(arr: number[][], currentPlayer: number) : boolean {
    //Function to check if a two-dimensional array has three of the same number(currentPlayer) in a row
    return arr.filter(row => row.filter(field => field === currentPlayer).length === 3).length > 0;
}




export default function checkGameState(canvas: number[][], currentPlayer: number): boolean {
    return hasThreeInRow(canvas, currentPlayer) || hasThreeInRow(transformArray(canvas), currentPlayer) || hasThreeInRow(extractDiagonals(canvas), currentPlayer);
}