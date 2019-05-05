import { createStore } from 'redux';
import rootReducer from '../reducers/reducer';
import { addExpense, removeExpense, editExpense } from '../actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate } from '../actions/filters';

const configureStore = () => {
  const store = createStore(rootReducer);
  store.subscribe(() => {
    console.log(store.getState());
  });
  
  const expenseOne =  store.dispatch(addExpense({ description: 'Rent', amount: 100}))
  const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 50}))
  store.dispatch(editExpense(expenseTwo.expense.id, { amount: 100}));
  store.dispatch(setTextFilter('rent'));

  store.dispatch(sortByAmount());
  store.dispatch(sortByDate());
  store.dispatch(setStartDate(125));



  return store;
};


export default configureStore;