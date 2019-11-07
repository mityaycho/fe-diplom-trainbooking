const SET_CITIES = 'SET_CITIES';
const SET_SEARCH_ITEM = 'SET_SEARCH_ITEM';


const initState = {
  dataCities: [],
  searchItem: '',
  error: ''
}

const searchMainReducer = (state = initState, action) => {
    switch(action.type) {
      case SET_CITIES:
        if (!action.cities.error) {
          return {
            ...state,
            dataCities: [...state.dataCities, ...action.cities]
          };
        } else {
          return {
            ...state,
            error: action.cities.error
          }
        }
      case SET_SEARCH_ITEM:
        return {
          ...state,
          searchItem: action.searchItem
        }
      default: return state
    }
};



export const setDataCities = (cities) => ({type: SET_CITIES, cities });
export const setSearchItem = (searchItem) => ({type: SET_SEARCH_ITEM, searchItem });


export default searchMainReducer;