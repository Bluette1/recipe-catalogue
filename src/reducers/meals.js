import _ from 'lodash';
import {
  HIGHLIGHT_MEAL,
  REGISTER_MEALS,
  HIDE_MEAL,
} from '../actions/actionTypes';

const initialState = [];

const setProperty = (meals, id, key) => {
  const index = meals.findIndex(meal => meal.idMeal === id);
  const highLightedMeal = meals[index];
  highLightedMeal[key] = key;
  return [...meals.slice(0, index), highLightedMeal, ...meals.slice(index + 1)];
};

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

    case HIGHLIGHT_MEAL: {
      const { id } = action;
      const meals = [..._.cloneDeep(state)];
      return setProperty(meals, id, 'highlight');
    }

    case HIDE_MEAL: {
      const { id } = action;
      const meals = [..._.cloneDeep(state)];
      return setProperty(meals, id, 'hide');
    }
    default:
      return state;
  }
}
