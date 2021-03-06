import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";
import imagesReducer from "./imagesReducer";

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error:errorReducer
})

export default rootReducer