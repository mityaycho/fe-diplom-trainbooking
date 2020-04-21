import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://netology-trainbooking.herokuapp.com/'
});

export const api = {
	getLastRoutes() {
		return instance.get('routes/last')
	},
	filterRoutes(
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
	) {
		// cityWhereFromId: "5b9a2fa7f83e028786ea5672"
		// cityWhereToId: "5b9a2fa7f83e028786ea5673"
		// `routes?from_city_id=${cityWhereFromId}&to_city_id=${cityWhereToId}` (line 28)

		return instance.get(
			`routes?from_city_id=${'5b9a2fa7f83e028786ea5672'}&to_city_id=${'5b9a2fa7f83e028786ea5673'}` +
			(`${sort}` ? `&sort=${sort}` : '') +
			(`${limit}` ? `&limit=${limit}` : '') +
			(`${offset}` ? `&offset=${offset}` : '') +
			`${have_second_class ? '&have_second_class=true' : ''}` +
			`${have_third_class ? '&have_third_class=true' : ''}` +
			`${have_fourth_class ? '&have_fourth_class=true' : ''}` +
			`${have_first_class ? '&have_first_class=true' : ''}` +
			`${have_wifi ? '&have_wifi=true' : ''}` +
			`${have_express ? '&have_express=true' : ''}` +
			`${price_from ? `&price_from=${price_from}` : ''}` +
			`${price_to ? `&price_to=${price_to}` : ''}` +
			`${start_departure_hour_from ? `&start_departure_hour_from=${start_departure_hour_from}` : ''}` +
			`${start_departure_hour_to ? `&start_departure_hour_to=${start_departure_hour_to}` : ''}` +
			`${start_arrival_hour_from ? `&start_arrival_hour_from=${start_arrival_hour_from}` : ''}` +
			`${start_arrival_hour_to ? `&start_arrival_hour_to=${start_arrival_hour_to}` : ''}` +
			`${end_departure_hour_from ? `&end_departure_hour_from=${end_departure_hour_from}` : ''}` +
			`${end_departure_hour_to ? `&end_departure_hour_to=${end_departure_hour_to}` : ''}` +
			`${end_arrival_hour_from ? `&end_arrival_hour_from=${end_arrival_hour_from}` : ''}` +
			`${end_arrival_hour_to ? `&end_arrival_hour_to=${end_arrival_hour_to}` : ''}`
		)
	},
	setSeatSelection(trainId) {
		console.log('routes/' + `${trainId}` + '/seats?')
		return instance.get('routes/' + `${trainId}` + '/seats?');
	}
};