import {SET_FORM} from "./action";


const initState = {
	form: {},
	lastRoutes: []
};

const searchMainReducer = (state = initState, action) => {

  switch(action.type) {
      case SET_FORM:
        return {
          ...state,
          form: action.form
				};
				case 'SET_LAST_ROUTES': 
				return {
					...state,
					lastRoutes: action.lastRoutes
				}
      default: return state;
    }
};

const setLastRoutes = (lastRoutes) => ({type: 'SET_LAST_ROUTES', lastRoutes})


export const getLastRoutesTC = () => (dispatch) => {
	fetch( 'https://netology-trainbooking.herokuapp.com/routes/last' )
	.then( response => response.json())
	.then(data => {
		dispatch(setLastRoutes(data))
	})
}







export default searchMainReducer;