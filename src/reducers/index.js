import { combineReducers } from 'redux';
import toHitReducer from './toHitReducer'

const rootReducer = combineReducers(
  {hitChances: toHitReducer}
);

export default rootReducer;