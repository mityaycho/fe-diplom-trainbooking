export const SET_FORM = 'searchMainReducer/SET_FORM';
export const SET_LAST_ROUTES = 'searchMainReducer/SET_LAST_ROUTES';
export const SET_TICKETS = 'ticketsPayReducer/SET_TICKETS';
export const SET_TRAIN_ID = 'ticketsPayReducer/SET_TRAIN_ID';


export const setDataFormAC = (form) => ({ type: SET_FORM, form });

export const setLastRoutes = (lastRoutes) => ({type: SET_LAST_ROUTES, lastRoutes});

export const setTickets = (tickets, totalCountTickets) => ({type: SET_TICKETS, tickets, totalCountTickets});

export const setTrainIdAC = (trainId) => ({type: SET_TRAIN_ID, trainId});