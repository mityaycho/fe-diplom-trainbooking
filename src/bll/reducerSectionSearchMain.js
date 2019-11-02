const SET_CITIES = 'SET_CITIES';

const initState = {
  dataCities: []
}

const reducerSectionSearchMain = (state = initState, action) => {
    switch(action.type) {
      case SET_CITIES:
        return {
          ...state,
          dataCities: [...state.dataCities, ...action.cities]
    }
      default: return state
    }
};



export const setDataCities = (cities) => ({type: SET_CITIES, cities });

export default reducerSectionSearchMain;