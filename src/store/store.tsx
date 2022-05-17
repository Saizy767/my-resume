import { combineReducers, configureStore } from '@reduxjs/toolkit'
import clickSlice from './reducers/NavbarClickReducer'
import imageLoaderSlice from './reducers/ImageLoaderReducer'

const rootReducer = combineReducers({
    clickSlice,
    imageLoaderSlice,
})

export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']