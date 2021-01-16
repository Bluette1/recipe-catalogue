import {
  CHANGE_FILTER, REGISTER_MEALS, HIGHLIGHT_MEAL, HIDE_MEAL,
} from './actionTypes';

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

export const registerMeals = meals => ({
  type: REGISTER_MEALS,
  meals,
});

export const hideMeal = id => ({
  type: HIDE_MEAL,
  id,
});

export const highlightMeal = id => ({
  type: HIGHLIGHT_MEAL,
  id,
});
