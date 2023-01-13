import thunk from 'redux-thunk';
import {counterReducer} from '../redux/counterReducer';
import { applyMiddleware, createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
 counter: counterReducer
});

export default createStore(rootReducer,applyMiddleware(thunk));