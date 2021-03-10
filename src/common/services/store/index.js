
/**
* @author muhamad.zaky
* this file should be root Reducer
*/

import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from '../../../components/Home/store/home-reducer';

const reducers = combineReducers({
    homeReducer
})

const configureStore = createStore(
    reducers,
    applyMiddleware(thunk)
)

export { reducers, configureStore };