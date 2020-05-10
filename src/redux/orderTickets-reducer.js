import { SET_ROUTE_TRAIN_SEAT } from './action';

const initState = {
	user: {
		first_name: "Иван",
		last_name: "Смирнов",
		patronymic: "Олегович",
		phone: "8900123123",
		email: "string@string.ru",
		payment_method: "cash"
	},
	departure: {
		route_direction_id: "123431",
		seats: [{
			coach_id: "12341",
			person_info: {
				is_adult: true,
				first_name: "Ivan",
				last_name: "Popov",
				patronymic: "Popovich",
				gender: true,
				birthday: "1980-01-01",
				document_type: "паспорт",
				document_data: "45 6790195"
			},
			seat_number: 10,
			is_child: true,
			include_children_seat: true
		}]
	}
};

const orderTicketsReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_ROUTE_TRAIN_SEAT:
			return {
				...state,
				departure: { route_direction_id: action.route_direction_id, 
					seats: [{...state.departure.seats, 
						coach_id: action.coach_id, 
						seat_number: action.seat_number, 
						is_child: action.is_child,
						include_children_seat: action.include_children_seat}] }
			}
			default:
				return state;
	}
}

export default orderTicketsReducer;