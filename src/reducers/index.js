import { combineReducers } from 'redux';
import toHitReducer from './toHitReducer'

const rootReducer = combineReducers(
  {toHit: toHitReducer}
);

export default rootReducer;