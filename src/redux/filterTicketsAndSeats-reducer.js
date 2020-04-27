import { filterTicketsAndSeatsAC, SET_TICKETS_AND_SEATS } from "./action";
import { api } from "../api/api";

const initState = {
	ticketsArray: [{
		have_first_class: false,
		have_second_class: false,
		have_third_class: false,
		have_fourth_class: false,
		have_wifi: false,
		have_air_conditioning: false,
		is_express: false,
		min_price: 3900,
		available_seats: 65,
		available_seats_info: {
			first: 18,
			third: 48
		},
		departure: {
			_id: '5b9a320ef83e028786ea6583',
			have_first_class: true,
			have_second_class: false,
			have_third_class: true,
			have_fourth_class: false,
			have_wifi: true,
			have_air_conditioning: false,
			is_express: false,
			min_price: 3900,
			duration: 355500,
			available_seats: 65,
			available_seats_info: {
				first: 18,
				third: 48
			},
			train: {
				_id: '5b9a3077f83e028786ea5fa7',
				name: 'Тройка - 2'
			},
			from: {
				railway_station_name: 'Киевский',
				city: {
					_id: '5b9a2fa7f83e028786ea5672',
					name: 'москва'
				},
				datetime: 1536923395
			},
			to: {
				railway_station_name: 'Ладожский',
				city: {
					_id: '5b9a2fa7f83e028786ea5673',
					name: 'санкт-петербург'
				},
				datetime: 1537278895
			},
			price_info: {
				first: {
					price: 4330,
					top_price: 3900,
					bottom_price: 4050
				},
				third: {
					top_price: 4310,
					bottom_price: 4755,
					side_price: 4415
				}
			}
		}
	},
	{
		have_first_class: false,
		have_second_class: false,
		have_third_class: false,
		have_fourth_class: false,
		have_wifi: false,
		have_air_conditioning: false,
		is_express: false,
		min_price: 2610,
		available_seats: 95,
		available_seats_info: {
			third: 96
		},
		departure: {
			_id: '5b9a3418f83e028786ea6e21',
			have_first_class: false,
			have_second_class: false,
			have_third_class: true,
			have_fourth_class: false,
			have_wifi: false,
			have_air_conditioning: true,
			is_express: false,
			min_price: 2610,
			duration: 20760,
			available_seats: 95,
			available_seats_info: {
				third: 96
			},
			train: {
				_id: '5b9a309ef83e028786ea6014',
				name: 'Иволга - 31'
			},
			from: {
				railway_station_name: 'Павелецкий',
				city: {
					_id: '5b9a2fa7f83e028786ea5672',
					name: 'москва'
				},
				datetime: 1536944136
			},
			to: {
				railway_station_name: 'Ладожский',
				city: {
					_id: '5b9a2fa7f83e028786ea5673',
					name: 'санкт-петербург'
				},
				datetime: 1536964896
			},
			price_info: {
				third: {
					top_price: 3335,
					bottom_price: 2610,
					side_price: 2835
				}
			}
		}
	},
	{
		have_first_class: false,
		have_second_class: false,
		have_third_class: false,
		have_fourth_class: false,
		have_wifi: false,
		have_air_conditioning: false,
		is_express: false,
		min_price: 536,
		available_seats: 159,
		available_seats_info: {
			first: 18,
			second: 32,
			third: 48,
			fourth: 62
		},
		departure: {
			_id: '5b9a3488f83e028786ea6ff8',
			have_first_class: true,
			have_second_class: true,
			have_third_class: true,
			have_fourth_class: true,
			have_wifi: false,
			have_air_conditioning: false,
			is_express: false,
			min_price: 536,
			duration: 356340,
			available_seats: 159,
			available_seats_info: {
				first: 18,
				second: 32,
				third: 48,
				fourth: 62
			},
			train: {
				_id: '5b9a3068f83e028786ea5f78',
				name: 'Калина - 61'
			},
			from: {
				railway_station_name: 'Ярославский',
				city: {
					_id: '5b9a2fa7f83e028786ea5672',
					name: 'москва'
				},
				datetime: 1537066528
			},
			to: {
				railway_station_name: 'Московский',
				city: {
					_id: '5b9a2fa7f83e028786ea5673',
					name: 'санкт-петербург'
				},
				datetime: 1537422868
			},
			price_info: {
				first: {
					price: 4210,
					top_price: 4645,
					bottom_price: 3325
				},
				second: {
					top_price: 2154,
					bottom_price: 2976
				},
				third: {
					top_price: 2665,
					bottom_price: 3275,
					side_price: 3800
				},
				fourth: {
					top_price: 536,
					bottom_price: 652
				}
			}
		}
	},
	{
		have_first_class: false,
		have_second_class: false,
		have_third_class: false,
		have_fourth_class: false,
		have_wifi: false,
		have_air_conditioning: false,
		is_express: false,
		min_price: 570,
		available_seats: 219,
		available_seats_info: {
			third: 96,
			fourth: 124
		},
		departure: {
			_id: '5b9a349bf83e028786ea7046',
			have_first_class: false,
			have_second_class: false,
			have_third_class: true,
			have_fourth_class: true,
			have_wifi: true,
			have_air_conditioning: true,
			is_express: false,
			min_price: 570,
			duration: 222720,
			available_seats: 219,
			available_seats_info: {
				third: 96,
				fourth: 124
			},
			train: {
				_id: '5b9a30ecf83e028786ea60f2',
				name: 'Тройка - 50'
			},
			from: {
				railway_station_name: 'Павелецкий',
				city: {
					_id: '5b9a2fa7f83e028786ea5672',
					name: 'москва'
				},
				datetime: 1537178147
			},
			to: {
				railway_station_name: 'Ладожский',
				city: {
					_id: '5b9a2fa7f83e028786ea5673',
					name: 'санкт-петербург'
				},
				datetime: 1537400867
			},
			price_info: {
				third: {
					top_price: 2720,
					bottom_price: 2875,
					side_price: 2720
				},
				fourth: {
					top_price: 570,
					bottom_price: 663
				}
			}
		}
	},
	{
		have_first_class: false,
		have_second_class: false,
		have_third_class: false,
		have_fourth_class: false,
		have_wifi: false,
		have_air_conditioning: false,
		is_express: false,
		min_price: 678,
		available_seats: 93,
		available_seats_info: {
			second: 32,
			fourth: 62
		},
		departure: {
			_id: '5b9a3178f83e028786ea6304',
			have_first_class: false,
			have_second_class: true,
			have_third_class: false,
			have_fourth_class: true,
			have_wifi: false,
			have_air_conditioning: true,
			is_express: false,
			min_price: 678,
			duration: 304620,
			available_seats: 93,
			available_seats_info: {
				second: 32,
				fourth: 62
			},
			train: {
				_id: '5b9a30ddf83e028786ea60c6',
				name: 'Ураган - 97'
			},
			from: {
				railway_station_name: 'Киевский',
				city: {
					_id: '5b9a2fa7f83e028786ea5672',
					name: 'москва'
				},
				datetime: 1537291645
			},
			to: {
				railway_station_name: 'Ладожский',
				city: {
					_id: '5b9a2fa7f83e028786ea5673',
					name: 'санкт-петербург'
				},
				datetime: 1537596265
			},
			price_info: {
				second: {
					top_price: 2817,
					bottom_price: 2169
				},
				fourth: {
					top_price: 925,
					bottom_price: 678
				}
			}
		}
	}],
	choiceSeatsArray: [],
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
	price_arr: [0, 5000],
	start_departure_hour_arr: [0, 24],
	start_arrival_hour_arr: [0, 24],
	end_departure_hour_arr: [0, 24],
	end_arrival_hour_arr: [0, 24],
	customRangeCostFrom: false,
	customRangeCostTo: false,
	trainId: '',
	actualPage: ''
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
	if (getState().filterChoiceTicketsAndSeatsPages.actualPage === '/search_tickets') {
			api.filterTicketsAndSeatsAPI(
				getState().sectionSearch.form,
				getState().filterChoiceTicketsAndSeatsPages
			)
				.then(res => {
					dispatch(filterTicketsAndSeatsAC('ticketsArray', res.data.items));
					dispatch(filterTicketsAndSeatsAC('totalCountTickets', res.data.total_count));
				});
		} else if (getState().filterChoiceTicketsAndSeatsPages.actualPage === '/seat_selection') {
			api.setSeatSelection(getState().filterChoiceTicketsAndSeatsPages)
			.then(res => {
				console.log(res);
				dispatch(filterTicketsAndSeatsAC('choiceSeatsArray', res.data));
			})
		}
		console.log(getState().filterChoiceTicketsAndSeatsPages.actualPage);
}

export default filterTicketsAndSeatsReducer;