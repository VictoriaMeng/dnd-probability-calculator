import { combineReducers } from 'redux';
import toHitReducer from './toHitReducer'
import damageReducer from './damageReducer'

const rootReducer = combineReducers(
  { 
    hitChances: toHitReducer,
    damageCalculations: damageReducer
  }
);

export default rootReducer;