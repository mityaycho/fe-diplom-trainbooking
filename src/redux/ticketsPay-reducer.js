import { SET_TICKETS, setTickets } from "./action";


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

}


export const getTicketsTC = (data) => (dispatch) => {
	const {
		have_second_class,
		have_third_class,
		have_fourth_class,
		have_first_class,
		have_wifi,
		have_express,
		sort,
		limit,
		cityWhereFromId,
		cityWhereToId
	} = data

	// cityWhereFromId: "5b9a2fa7f83e028786ea5672"
	// cityWhereToId: "5b9a2fa7f83e028786ea5673"
	// `routes?from_city_id=${cityWhereFromId}&to_city_id=${cityWhereToId}` (line 47)

	fetch(`https://netology-trainbooking.herokuapp.com/` +
			`routes?from_city_id=${"5b9a2fa7f83e028786ea5672"}&to_city_id=${"5b9a2fa7f83e028786ea5673"}` +
			`${have_second_class ? '&have_second_class=true' : ''}` +
			`${have_third_class ? '&have_third_class=true' : ''}` +
			`${have_fourth_class ? '&have_fourth_class=true' : ''}` +
			`${have_first_class ? '&have_first_class=true' : ''}` +
			`${have_wifi ? '&have_wifi=true' : ''}` +
			`${have_express ? '&have_express=true' : ''}` +
			(`${sort}` ? `&sort=${sort}` : '') +
			(`${limit}` ? `&limit=${limit}` : ''))
		.then(response => response.json())
		.then(data => {
			dispatch(setTickets(data.items, data.total_count))
		})

}

export default ticketsPayReducer;