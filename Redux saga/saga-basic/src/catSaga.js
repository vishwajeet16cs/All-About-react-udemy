    import { call, put, takeEvery } from 'redux-saga/effects' 
    // call- use for calling api 
    //put - call action
    //talkeEvery -watch a function or an action
    import {getCatsSuccess} from './catState'

    function* workGetCatsFetch(){
        const cats=yield call(()=>fetch('https://api.thecatap   i.com/v1/breeds'))
        const formattedCats = yield cats.json();
        const  formattedCatsShortened = formattedCats.slice(0,10);
        yield put(getCatsSuccess(formattedCatsShortened));
    }
    
    //watcher function
    function* catSaga(){
        yield takeEvery('cats/getCatsFetch',workGetCatsFetch);//name of reducer/ name of action 
    }

    export default catSaga