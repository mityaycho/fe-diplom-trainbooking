import * as axios from "axios";

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
		have_second_class,
		have_third_class,
		have_fourth_class,
		have_first_class,
		have_wifi,
		have_express,
		price_from,
		price_to
		) {
		// cityWhereFromId: "5b9a2fa7f83e028786ea5672"
		// cityWhereToId: "5b9a2fa7f83e028786ea5673"
		// `routes?from_city_id=${cityWhereFromId}&to_city_id=${cityWhereToId}` (line 28)

		return instance.get(
				`routes?from_city_id=${"5b9a2fa7f83e028786ea5672"}&to_city_id=${"5b9a2fa7f83e028786ea5673"}` +
				(`${sort}` ? `&sort=${sort}` : '') +
				(`${limit}` ? `&limit=${limit}` : '') +
				`${have_second_class ? '&have_second_class=true' : ''}` +
				`${have_third_class ? '&have_third_class=true' : ''}` +
				`${have_fourth_class ? '&have_fourth_class=true' : ''}` +
				`${have_first_class ? '&have_first_class=true' : ''}` +
				`${have_wifi ? '&have_wifi=true' : ''}` +
				`${have_express ? '&have_express=true' : ''}` +
				`${price_from ? `&price_from=${price_from}` : ''}` +
				`${price_to ? `&price_to=${price_to}` : ''}`
				)
	}
};