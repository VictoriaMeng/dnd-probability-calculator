import { combineReducers } from 'redux';
import acReducer from './acReducer'

const rootReducer = combineReducers(
  {ac: acReducer}
);

export default rootReducer;