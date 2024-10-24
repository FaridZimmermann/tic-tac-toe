
import { extractDiagonals, transformArray, hasThreeInRow } from "./checkGameState";

function fieldIsAvailable(arr: number[][], i: number, j: number) {
    return !arr[i][j];
}

function createRandomIndex() : number {
    return Math.floor(Math.random() * 3);
  }

function hasTwoInRow(arr: number[][], currentPlayer: number) : boolean {
    //Function to check if a two-dimensional array has two of the same number(currentPlayer) in a row
    return arr.filter(row => row.filter(field => field === currentPlayer).length === 2).length > 0;
}

function determineBestMove(arr: number[][], player, opponent): number[] {
    //Determines best move to make
    /*  
        Definitions:
            Best move - has three in row after move,
            semi best move - blocks opponent from having three in row
            third best move - has two in row after move
            fourth best move - blocks opponent from having two in row after move
    */


    let i, j;

    //Best Move
        
    



    return [i, j];
    
    
}


function computerMakesMove(difficulty: number, currentCanvas: number[][], playerSymbol: number) : number[][] {
    /* scoring function to make a move based on difficulty, for computer opponent
        Difficulties:
            0 - Easy, make move based on random number on available field
            1 - Medium, detect best move to make, make best move or random move based on 50% probability
            2 - Difficult, detect best move to make, make best move
    */
        const diagonalCanvas = extractDiagonals(currentCanvas);
        const transformedCanvas = transformArray(currentCanvas);
        const opponentSymbol = playerSymbol === 1 ? 2 : 1;
  
        if (difficulty === 1) {
          difficulty = Math.round(Math.random()) ? 2 : 0;
        }

        if (difficulty === 0) {
          let [i, j] = [createRandomIndex(), createRandomIndex()];
          
          while (!fieldIsAvailable(currentCanvas, i, j)) {
              [i, j] = [createRandomIndex(), createRandomIndex()];
          }
          currentCanvas[i][j] = playerSymbol;
        } else {

          
          
        }




    return currentCanvas;
}