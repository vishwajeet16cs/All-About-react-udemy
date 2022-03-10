import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
    name:'cats',
    initialState:{
        cats:[],
        isLoading:false
    },
    reducers:{
        getCatsFetch:(state)=>{
            console.log('inside cat fetch');
            state.isLoading = true;
        },
        getCatsSuccess:(state,action)=>{
            console.log('inside cat success');
            state.cats=action.payload;
            state.isLoading= false;
        },
        getCatsFailure:(state)=>{
            console.log('inside cat falure');
            state.isLoading = false;
        }
    }
})


//creating action type using toolkits
export const { getCatsFetch, getCatsSuccess, getCatsFailure} = catSlice.actions;

export default catSlice.reducer