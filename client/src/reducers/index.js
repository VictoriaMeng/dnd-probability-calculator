import { combineReducers } from 'redux';
import toHitReducer from './toHitReducer'
import damageReducer from './damageReducer'
import sessionReducer from './sessionReducer'
import errorReducer from './errorReducer'

const appReducer = combineReducers(
  { 
    hitChances: toHitReducer,
    damageCalculations: damageReducer,
    session: sessionReducer,
    errors: errorReducer
  }
);

const rootReducer = (state, action) => {
  if (action.type === 'LOGGED_OUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;