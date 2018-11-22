import { combineReducers } from 'redux';
import toHitReducer from './toHitReducer'
import damageReducer from './damageReducer'
import userReducer from './userReducer'
import sessionReducer from './sessionReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers(
  { 
    users: userReducer,
    hitChances: toHitReducer,
    damageCalculations: damageReducer,
    session: sessionReducer,
    errors: errorReducer
  }
);

export default rootReducer;