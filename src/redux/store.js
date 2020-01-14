import {combineReducers, createStore} from "redux";
import searchMainReducer from "./searchMain-reducer";

const reducers = combineReducers({
  sectionSearch: searchMainReducer
});

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
