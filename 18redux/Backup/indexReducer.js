import { createStore } from "redux"


/* never mutate the state  should not change the existing state */
// reducer function 
const counterReducer = (state=initialState,action)=>{
    if(action.type ==='incr')
    {
        // console.log(state)
        return {
            counter : state.counter + 1,
            showCounter:state.showCounter
        }
    }
    if(action.type ==='increase')
    {
        // console.log(state)
        return {
            counter : state.counter + action.amount,
            showCounter:state.showCounter
        }
    }
    if(action.type ==='decr')
    {
        return {
            counter : state.counter - 1,
            showCounter:state.showCounter
        }
    }
    if(action.type === 'toggal'){
        return {
            showCounter:!state.showCounter,
            counter:state.counter
        }
    }
    return state
}


//point reducer function to the store   
const store = createStore(counterReducer);

export default store;



