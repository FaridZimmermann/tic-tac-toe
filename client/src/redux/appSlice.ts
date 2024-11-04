import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
  gameMode: number,
  gameRunning: boolean,
  winner: string,
  currentPlayer: number,
  canvas: number[][]
}

const initialState: AppState = {
    gameMode: 0,
    gameRunning: false,
    winner: "",
    currentPlayer: 0,
    canvas:[[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    
  }

  export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
      changeGameMode: (state, action: PayloadAction<number>) => {
        state.gameMode = action.payload
      },
      toggleGameRunning: state => {
        state.gameRunning = !state.gameRunning;
      },
      startGame: state => {
        state.gameRunning = true
      },
      endGame: state => {
        state.gameRunning = false
      },
      setWinner: (state, action: PayloadAction<string>) => {
        state.winner = action.payload
      },
      resetGame: state => {
        state.winner = "";
        state.gameRunning = false;

      },
      togglePlayer: state => {
        state.currentPlayer = state.currentPlayer ? 0 : 1;
      },
      updateCanvas: (state, action: PayloadAction<Array<number>>) => {
        const [i, j] = action.payload;
        state[i][j] = state.currentPlayer;
      }
    }
  })

  //Selector


  // Export the generated action creators for use in components
export const { changeGameMode,toggleGameRunning, startGame, endGame, setWinner, resetGame } = appSlice.actions

// Export the slice reducer for use in the store configuration
export default appSlice.reducer


  