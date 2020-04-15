import { SET_TICKETS, setTickets, SET_TRAIN_ID } from './action';
import { api } from '../api/api';


const initState = {
	tickets: [],
	totalCountTickets: 0,
	sort: 'date',
	limit: '5',
	offset: 0,
	have_second_class: false,
	have_third_class: false,
	have_fourth_class: false,
	have_first_class: false,
	have_wifi: false,
	have_express: false,
	price_from: 0,
	price_to: 5000,
	start_departure_hour_from: 0,
	start_departure_hour_to: 24,
	start_arrival_hour_from: 0,
	start_arrival_hour_to: 24,
	end_departure_hour_from: 0,
	end_departure_hour_to: 24,
	end_arrival_hour_from: 0,
	end_arrival_hour_to: 24,
	customRangeCostFrom: false,
	customRangeCostTo: false,
	trainId: ''
};

const ticketsPayReducer = (state = initState, action) => {

	switch (action.type) {
		case SET_TICKETS:
			return {
				...state,
				tickets: action.tickets,
				totalCountTickets: action.totalCountTickets,
				sort: action.sort,
				limit: action.limit,
				offset: action.offset, 
				have_second_class: action.have_second_class,
				have_third_class: action.have_third_class,
				have_fourth_class: action.have_fourth_class,
				have_first_class: action.have_first_class,
				have_wifi: action.have_wifi,
				have_express: action.have_express,
				price_from: action.price_from,
				price_to: action.price_to,
				start_departure_hour_from: action.start_departure_hour_from,
				start_departure_hour_to: action.start_departure_hour_to,
				start_arrival_hour_from: action.start_arrival_hour_from,
				start_arrival_hour_to: action.start_arrival_hour_to,
				end_departure_hour_from: action.end_departure_hour_from,
				end_departure_hour_to: action.end_departure_hour_to,
				end_arrival_hour_from: action.end_arrival_hour_from,
				end_arrival_hour_to: action.end_arrival_hour_to,
				customRangeCostFrom: action.customRangeCostFrom,
				customRangeCostTo: action.customRangeCostTo
			};
		case SET_TRAIN_ID:
			return {
				...state,
				trainId: action.trainId
			}
		default:
			return state;
	};
};


export const getTicketsTC = (data, url) => (dispatch) => {
	const {
		cityWhereFromId,
		cityWhereToId,
		sort,
		limit,
		offset,
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
		customRangeCostTo
	} = data;

	if (url === '/search_tickets') {
		api.filterRoutes(
			cityWhereFromId, 
			cityWhereToId, 
			sort,
			limit,
			offset,
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
			.then(res => dispatch(setTickets(
				res.data.items, 
				res.data.total_count,
				sort,
				limit,
				offset, 
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
				customRangeCostTo
				)));
	} else if (url === '/seat_selection') {
		
	}
};

export default ticketsPayReducer;