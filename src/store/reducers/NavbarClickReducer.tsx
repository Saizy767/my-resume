import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface BooleanClick{
    NavbarClick: boolean,
}

const initialState: BooleanClick= {
    NavbarClick: true,
}

export const clickSlice = createSlice({
    name: 'ClickOnNavbar',
    initialState,
    reducers:{
        cellClick(state, action: PayloadAction<boolean>){ 
            state.NavbarClick = action.payload}
    }
})

export default clickSlice.reducer

export const {cellClick} = clickSlice.actions

export const selectCount = (state: RootState) => state.clickSlice