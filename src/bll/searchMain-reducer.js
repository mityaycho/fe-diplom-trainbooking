const SET_FORM = 'SET_FORM';


const initState = {
  form: {}
};

const searchMainReducer = (state = initState, action) => {
    switch(action.type) {
      case SET_FORM:
        console.log(state, action)
        return {
          ...state,
          form: action.form
        };
      default: return state;
    };
};



export const setDataForm = (form) => ({type: SET_FORM, form });



export default searchMainReducer;