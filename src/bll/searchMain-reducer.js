const SET_CITIES = 'SET_CITIES';

const initState = {
  dataCities: [],
  currentValueCities: []
}

const searchMainReducer = (state = initState, action) => {
    switch(action.type) {
      case SET_CITIES:
        console.log(state, action)
        return {
          ...state,
          dataCities: [...state.dataCities, ...action.cities],
          currentValueCities: [...state.currentValueCities, ...action.cities]
    }
      default: return state
    }
};



export const setDataCities = (cities) => ({type: SET_CITIES, cities });

export default searchMainReducer;