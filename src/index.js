import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/index';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import  './styles/styles.scss'
import getVisibleExpenses from './selectors/expenses';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate } from './actions/filters';

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne =  store.dispatch(addExpense({ description: 'Water Bill', amount: 1000, createdAt: 1000}))
const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill', amount: 5000, createdAt: -1000}))
const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 19050, createdAt: 600}))

store.dispatch(setTextFilter('bill'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(2000));

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
