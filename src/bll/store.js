import {combineReducers, createStore} from "redux";
import reducerSectionSearchMain from "./reducerSectionSearchMain";

const reducers = combineReducers({
  sectionSearch: reducerSectionSearchMain
});

export const store = createStore(reducers);
