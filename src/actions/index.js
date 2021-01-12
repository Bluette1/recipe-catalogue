import { CHANGE_FILTER } from './actionTypes';

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

export default changeFilter;
