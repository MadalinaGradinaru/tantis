import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { TantisReducer } from './reducer'

export default createStore (
    TantisReducer,
    applyMiddleware(thunk)
)