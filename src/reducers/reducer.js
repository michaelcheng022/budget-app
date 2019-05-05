import { combineReducers } from 'redux';
import expensesReducer from './expensesReducer';
import filtersReducer from './filtersReducer';

const rootReducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
});

export default rootReducer;
