import { combineReducers } from 'redux';
import toHitReducer from './toHitReducer'
import damageReducer from './damageReducer'
import userReducer from './userReducer'
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers(
  { 
    users: userReducer,
    hitChances: toHitReducer,
    damageCalculations: damageReducer,
  }
);

export default rootReducer;