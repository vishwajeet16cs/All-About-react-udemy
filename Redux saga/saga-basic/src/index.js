import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import createSageMiddleware from 'redux-saga'
import {configureStore} from '@reduxjs/toolkit'
import catsReducer from './catState'
import catSaga from './catSaga';

const saga = createSageMiddleware();
const store = configureStore({
  reducer:{
    cats:catsReducer
  },
  middleware:[saga]
})

//run saga
saga.run(catSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);