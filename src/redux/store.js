import { combineReducers, createStore, applyMiddleware } from 'redux';
import searchMainReducer from './searchMain-reducer';
import  thunk  from 'redux-thunk';
import ticketsPayReducer from './ticketsPay-reducer';

const reducers = combineReducers({
	sectionSearch: searchMainReducer,
	ticketsPayPage: ticketsPayReducer
});

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() && applyMiddleware(thunk));
