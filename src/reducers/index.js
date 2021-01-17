import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import meals from './meals';
import filter from './filter';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  meals,
  filter,
});
export default createRootReducer;
