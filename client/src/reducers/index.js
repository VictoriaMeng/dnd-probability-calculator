import { combineReducers } from 'redux';
import toHitReducer from './toHitReducer'
import damageReducer from './damageReducer'
import userReducer from './userReducer'
import { sessionReducer } from 'redux-react-session';

const rootReducer = combineReducers(
  { 
    users: userReducer,
    hitChances: toHitReducer,
    damageCalculations: damageReducer,
    session: sessionReducer
  }
);

export default rootReducer;