import {SET_FORM} from "./action";


const initState = {
  form: {}
};

const searchMainReducer = (state = initState, action) => {

  switch(action.type) {
      case SET_FORM:
        console.log(action.form);
        return {
          ...state,
          form: action.form
        };
      default: return state;
    }
};







export default searchMainReducer;