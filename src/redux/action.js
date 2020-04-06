export const SET_FORM = 'SET_FORM';
export const SET_LAST_ROUTES = 'SET_LAST_ROUTES';
export const SET_TICKETS = 'ticketsPayReducer/SET_TICKETS';


export const setDataFormAC = (form) => ({ type: SET_FORM, form });

export const setLastRoutes = (lastRoutes) => ({type: 'SET_LAST_ROUTES', lastRoutes});

export const setTickets = (tickets, totalCountTickets) => ({type: SET_TICKETS, tickets, totalCountTickets});
