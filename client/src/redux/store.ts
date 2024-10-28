import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        app : appReducer,
        multiplayer: multiplayerReducer,
        settings: settingsReducer
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>