const SET_TICKETS = 'ticketsPayReducer/SET_TICKETS'

const initState = {
	tickets: [],
	totalCountTickets: 0
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
	
	const setTickets = (tickets, totalCountTickets) => ({type: SET_TICKETS, tickets, totalCountTickets})

	export const getTicketsTC = (data) => (dispatch) => {
		const {have_second_class, 
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
		debugger
		fetch(`https://netology-trainbooking.herokuapp.com/`
        + `routes?from_city_id=${cityWhereFromId}&to_city_id=${cityWhereToId}`
        + `${have_second_class ? '&have_second_class=true' : ''}`
        + `${have_third_class ? '&have_third_class=true' : ''}`
        + `${have_fourth_class ? '&have_fourth_class=true' : ''}`
        + `${have_first_class ? '&have_first_class=true' : ''}`
        + `${have_wifi ? '&have_wifi=true' : ''}`
        + `${have_express ? '&have_express=true' : ''}`
        + (`${sort}` ? `&sort=${sort}` : '')
        + (`${limit}` ? `&limit=${limit}` : ''))
        .then(response => response.json())
        .then(data => {
          console.log(data);
          dispatch(setTickets(data.items, data.total_count))
        })
        
	}

		export default ticketsPayReducer;