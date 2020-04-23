import { combineReducers, createStore, applyMiddleware } from 'redux';
import searchMainReducer from './searchMain-reducer';
import  thunk  from 'redux-thunk';
import filterTicketsAndSeatsReducer from './filterTicketsAndSeats-reducer';

const reducers = combineReducers({
	sectionSearch: searchMainReducer,
	filterChoiceTicketsAndSeatsPages: filterTicketsAndSeatsReducer
});

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() && applyMiddleware(thunk));
