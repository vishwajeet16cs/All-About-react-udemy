const redux = require('redux');

const counterReducer = (state={counter:0},action) =>{
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        }
    }
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1
        }
    }
    return state
    
};

const store = redux.createStore(counterReducer)

const counterSubscriber = () => {
    console.log("hello check")
    const latestState = store.getState()
    console.log(latestState);
}


//execute the func when data in store change 
store.subscribe(counterSubscriber)

//method which dispatch a method (action)
//action is js Object
store.dispatch({type: 'decrement'});
store.dispatch({type: 'increment'});