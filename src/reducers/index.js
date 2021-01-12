import { combineReducers } from 'redux';
import meals from './meals';
import filter from './filter';

const allReducers = combineReducers({
  meals,
  filter,
});

export default allReducers;
