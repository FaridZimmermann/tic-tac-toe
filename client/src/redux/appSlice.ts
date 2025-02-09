import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import checkGameState from '../helpers/checkGameState'

export interface User {
  id: string;
  name: string;
}


export interface AppState {
  gameMode: number | null,
  gameRunning: boolean,
  winner: string,
  currentPlayer: number,
  canvas: number[][],
  difficulty: number,
  connectedUsers: User[],
  opponent: string | null,
  username: string
}

const initialState: AppState = {
    gameMode: null,
    gameRunning: false,
    winner: "",
    currentPlayer: 1,
    canvas:[[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    difficulty: 0,
    connectedUsers: [],
    opponent: null,
    username: ""
  }

  export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
      changeGameMode: (state, action: PayloadAction<number>) => {
        state.gameMode = action.payload;
      },
      changeGameDifficulty: (state, action: PayloadAction<number>) => {
        state.difficulty = action.payload;
      },

      addInitialUsers: (state, action: PayloadAction<User[]>) => {
        state.connectedUsers = action.payload;
      },

      addConnectedUser: (state, action: PayloadAction<User>) => {
        state.connectedUsers.push(action.payload);
      },

      removeConnectedUser: (state, action: PayloadAction<string>) => {
        state.connectedUsers = state.connectedUsers.filter(user => user.id !== action.payload);
      },

      setOpponent: (state, action: PayloadAction<string>) => {
        state.opponent = action.payload;
      },

      setUserName: (state, action: PayloadAction<string>) => {
        state.username = action.payload
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
        state.canvas = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
      },

      togglePlayer: state => {
        state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
      },

      updateCanvas: (state, action: PayloadAction<Array<number>>) => {
        const [i, j] = action.payload;
        state.canvas[i][j] = state.currentPlayer;

        if (checkGameState(state.canvas, state.currentPlayer)) {

          state.gameRunning = false;
          state.winner = `Player ${state.currentPlayer}`;

        } else {
          state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
        }
      }
    }
  })

  //Selector


  // Export the generated action creators for use in components
export const { changeGameMode, changeGameDifficulty, toggleGameRunning, updateCanvas, startGame, endGame, setWinner, resetGame, addConnectedUser, removeConnectedUser, addInitialUsers, setUserName } = appSlice.actions

// Export the slice reducer for use in the store configuration
export default appSlice.reducer


  