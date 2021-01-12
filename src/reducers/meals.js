import _ from 'lodash';
import {
  REGISTER_MEALS,
} from '../actions/actionTypes';

const initialState = [];

export default function meals(state = initialState, action) {
  switch (action.type) {
    case REGISTER_MEALS: {
      return [
        ..._.cloneDeep(state), ...action.meals,
      ];
    }
    default:
      return state;
  }
}
