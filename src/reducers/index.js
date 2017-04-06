import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import userReducer from './user'
const reducers = {
    routing: routerReducer,
    userStore: userReducer
};

module.exports = combineReducers(reducers);
