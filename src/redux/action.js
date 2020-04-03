export const SET_FORM = 'SET_FORM';
export const SET_LAST_ROUTES = 'SET_LAST_ROUTES';


export const setDataFormAC = (form) => ({ type: SET_FORM, form });

export const setLastRoutes = (lastRoutes) => ({type: 'SET_LAST_ROUTES', lastRoutes});
