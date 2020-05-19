import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import wishListReducer from './wishListReducer';

export default combineReducers({
    basketState: basketReducer,
    wishListState:wishListReducer
});