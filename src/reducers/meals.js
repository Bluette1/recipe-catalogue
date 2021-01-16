import _ from 'lodash';
import {
  HIDE_MEAL,
  REGISTER_MEALS,
} from '../actions/actionTypes';

const initialState = [];

export default function meals(state = initialState, action) {
  switch (action.type) {
    case REGISTER_MEALS: {
      if (!action.meals) {
        return [..._.cloneDeep(state)];
      }
      return [
        ..._.cloneDeep(state), ...action.meals,
      ];
    }

    case HIDE_MEAL: {
      const { id } = action;
      const meals = [..._.cloneDeep(state)];
      return meals.filter(meal => meal.idMeal !== id);
    }
    default:
      return state;
  }
}
