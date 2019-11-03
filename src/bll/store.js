import {combineReducers, createStore} from "redux";
import searchMainReducer from "./searchMain-reducer";

const reducers = combineReducers({
  sectionSearch: searchMainReducer
});

export const store = createStore(reducers);
