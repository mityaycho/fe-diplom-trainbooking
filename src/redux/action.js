export const SET_FORM = 'searchMainReducer/SET_FORM';
export const SET_LAST_ROUTES = 'searchMainReducer/SET_LAST_ROUTES';
export const SET_TICKETS = 'ticketsPayReducer/SET_TICKETS';
export const SET_TRAIN_ID = 'ticketsPayReducer/SET_TRAIN_ID';
export const SET_TICKETS_AND_SEATS = 'ticketsPayReducer/SET_TICKETS_AND_SEATS';


export const setDataFormAC = (form) => ({ type: SET_FORM, form });

export const setLastRoutes = (lastRoutes) => ({ type: SET_LAST_ROUTES, lastRoutes });

export const setTrainId = (trainId) => ({ type: SET_TRAIN_ID, trainId });

export const filterTicketsAndSeatsAC = (fieldName, fieldValue) => ({type:SET_TICKETS_AND_SEATS, fieldName, fieldValue}) 


export const setTickets = (
	tickets, 
	totalCountTickets, 
	have_second_class,
	have_third_class,
	have_fourth_class,
	have_first_class,
	have_wifi,
	have_express,
	price_from,
	price_to,
	start_departure_hour_from,
	start_departure_hour_to,
	start_arrival_hour_from,
	start_arrival_hour_to,
	end_departure_hour_from,
	end_departure_hour_to,
	end_arrival_hour_from,
	end_arrival_hour_to,
	customRangeCostFrom,
	customRangeCostTo,
	trainId
	) => ({
		type: SET_TICKETS, 
		tickets, 
		totalCountTickets, 
		have_second_class,
		have_third_class,
		have_fourth_class,
		have_first_class,
		have_wifi,
		have_express,
		price_from,
		price_to,
		start_departure_hour_from,
		start_departure_hour_to,
		start_arrival_hour_from,
		start_arrival_hour_to,
		end_departure_hour_from,
		end_departure_hour_to,
		end_arrival_hour_from,
		end_arrival_hour_to,
		customRangeCostFrom,
		customRangeCostTo,
		trainId
	});