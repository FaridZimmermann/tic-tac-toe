import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
  gameMode: number,
  gameRunning: boolean,
  winner: string
}

const initialState: AppState = {
    gameMode: 0,
    gameRunning: false,
    winner: ""
  }

  export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
      changeGameMode: (state, action: PayloadAction<number>) => {
        state.gameMode = action.payload
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

      }
    }
  })

  // Export the generated action creators for use in components
export const { changeGameMode, startGame, endGame, setWinner, resetGame } = appSlice.actions

// Export the slice reducer for use in the store configuration
export default appSlice.reducer


  