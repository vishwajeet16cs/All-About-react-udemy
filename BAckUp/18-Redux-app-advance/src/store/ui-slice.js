import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:'ui',
    initialState:{cartIsVisibae: false},
    reducers:{
        toggle(state){
            state.cartIsVisibae=!state.cartIsVisibae
        }
    }
})

export const uiActions = uiSlice.actions 

export default uiSlice;