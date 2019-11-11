const SET_CITIES = 'SET_CITIES';


const initState = {
  form: {}
};

const searchMainReducer = (state = initState, action) => {
    switch(action.type) {
      case SET_CITIES:
        return {
          ...state,
          searchItem: action.searchItem
        };
      default: return state;
    };
};



export const setDataCities = (cities) => ({type: SET_CITIES, cities });



export default searchMainReducer;