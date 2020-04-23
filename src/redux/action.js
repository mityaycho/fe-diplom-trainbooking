export const SET_FORM = 'searchMainReducer/SET_FORM';
export const SET_LAST_ROUTES = 'searchMainReducer/SET_LAST_ROUTES';
export const SET_TICKETS_AND_SEATS = 'ticketsPayReducer/SET_TICKETS_AND_SEATS';


export const setDataFormAC = (form) => ({ type: SET_FORM, form });

export const setLastRoutes = (lastRoutes) => ({ type: SET_LAST_ROUTES, lastRoutes });

export const filterTicketsAndSeatsAC = (fieldName, fieldValue) => ({type:SET_TICKETS_AND_SEATS, fieldName, fieldValue});