import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ImageLoading{
    Loaded: boolean,
}

const initialState: ImageLoading= {
    Loaded: false,
}

export const imageLoaderSlice = createSlice({
    name: 'ImageLoader',
    initialState,
    reducers:{
        setImgsLoaded(state, action: PayloadAction<boolean>){ 
            state.Loaded = action.payload}
    }
})

export default imageLoaderSlice.reducer

export const {setImgsLoaded} = imageLoaderSlice.actions

export const selectLoad = (state: RootState) => state.imageLoaderSlice