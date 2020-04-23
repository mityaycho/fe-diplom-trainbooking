import { filterTicketsAndSeatsAC, SET_TICKETS_AND_SEATS } from "./action";

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

const filterTicketsAndSeatsReducer = (state = initState, action) => {

	switch (action.type) {
		case SET_TICKETS_AND_SEATS:
			return {
				...state, [action.fieldName]: action.fieldValue
			};
		default:
			return state;
	};
};

export const filterTicketsAndSeatsReducerTC = (fieldName, fieldValue) => (dispatch, getState) => {
	dispatch(filterTicketsAndSeatsAC(fieldName, fieldValue));
}

export default filterTicketsAndSeatsReducer;