import { combineReducers } from 'redux';
import toHitReducer from './toHitReducer'
import damageReducer from './damageReducer'
import userReducer from './userReducer'
import sessionReducer from './sessionReducer'
import errorReducer from './errorReducer'

const appReducer = combineReducers(
  { 
    users: userReducer,
    hitChances: toHitReducer,
    damageCalculations: damageReducer,
    session: sessionReducer,
    errors: errorReducer
  }
);

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;