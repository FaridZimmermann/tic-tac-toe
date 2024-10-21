
import { extractDiagonals, transformArray } from "./checkGameState";




export default function computerMakesMove(difficulty: number, currentCanvas: number[][], playerSymbol: number) : number[][] {

    const diagonalCanvas = extractDiagonals(currentCanvas);
    const transformedCanvas = transformArray(currentCanvas);

    


    return currentCanvas;
}