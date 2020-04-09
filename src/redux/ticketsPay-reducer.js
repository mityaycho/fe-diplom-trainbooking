import { SET_TICKETS, setTickets } from "./action";
import { api } from "../api/api";


const initState = {
	tickets: [],
	totalCountTickets: 0,
	sort: 'date',
	limit: '5'
};

const ticketsPayReducer = (state = initState, action) => {

	switch (action.type) {
		case SET_TICKETS:
			return {
				...state,
				tickets: action.tickets,
				totalCountTickets: action.totalCountTickets
			}
			default:
				return state;
	};
};


export const getTicketsTC = (data) => (dispatch) => {
	const {
		cityWhereFromId,
		cityWhereToId,
		sort,
		limit,
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
		end_arrival_hour_to
	} = data;

	api.filterRoutes(
		cityWhereFromId, 
		cityWhereToId, 
		sort,
		limit,
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
		end_arrival_hour_to
	)
		.then(res => dispatch(setTickets(res.data.items, res.data.total_count)));
};

export default ticketsPayReducer;