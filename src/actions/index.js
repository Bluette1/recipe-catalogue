import { CHANGE_FILTER, REGISTER_MEALS } from './actionTypes';

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

export const registerMeals = meals => ({
  type: REGISTER_MEALS,
  meals,
});
