import React from 'react';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateDefault from '../../../images/progress_state_default.png';
import { setDataFormAC } from '../../../redux/action';
import { connect } from 'react-redux';
import ProgressLineCost from '../../shared/ProgressLineCost';
import SearchTicketsJSX from './SearchTicketsJSX';
import { getLastRoutesTC } from '../../../redux/searchMain-reducer';
import SideBarSearchTicketsAndSeatSelection from './../../shared/SideBarSearchTicketsAndSeatSelection';
import { getTicketsTC } from './../../../redux/ticketsPay-reducer';


class SectionSearchTickets extends React.Component {
	// state = {
	// 	// customRangeCostFrom: false,
	// 	// customRangeCostTo: false,
	// 	// lastRoutes: [],
	// 	// have_second_class: false,
	// 	// have_third_class: false,
	// 	// have_fourth_class: false,
	// 	// have_first_class: false,
	// 	// have_wifi: false,
	// 	// have_express: false,
	// 	// whereFromDate: undefined,
	// 	// whereToDate: undefined,
	// 	sort: 'date',
	// 	limit: '5'
	// };

	// getTicketsFetch = () => {
	// 	const data = {
	// 		// have_second_class: this.state.have_second_class,
	// 		// have_third_class: this.state.have_third_class,
	// 		// have_fourth_class: this.state.have_fourth_class,
	// 		// have_first_class: this.state.have_first_class,
	// 		// have_wifi: this.state.have_wifi,
	// 		// have_express: this.state.have_express,
	// 		sort: this.state.sort,
	// 		limit: this.state.limit,
	// 		cityWhereFromId: this.props.form.cityWhereFromId,
	// 		cityWhereToId: this.props.form.cityWhereToId
	// 	}
	// 	this.props.getTickets(data)
	// }

	// componentDidMount() {
		// fetch( 'https://netology-trainbooking.herokuapp.com/routes/last' )
		// .then( response => response.json())
		// .then(data => {
		// 	console.log(data);
		// 	return data;
		// })
		// .then( data => this.setState({lastRoutes: data}));
		// this.props.getLasRoutes()

		// this.getTicketsFetch()
		// fetch(`https://netology-trainbooking.herokuapp.com/`
		//   + `routes?from_city_id=${this.props.form.cityWhereFromId}&to_city_id=${this.props.form.cityWhereToId}`
		//   + `${this.state.have_second_class ? '&have_second_class=true' : ''}`
		//   + `${this.state.have_third_class ? '&have_third_class=true' : ''}`
		//   + `${this.state.have_fourth_class ? '&have_fourth_class=true' : ''}`
		//   + `${this.state.have_first_class ? '&have_first_class=true' : ''}`
		//   + `${this.state.have_wifi ? '&have_wifi=true' : ''}`
		//   + `${this.state.have_express ? '&have_express=true' : ''}`
		//   + (`${this.state.sort}` ? `&sort=${this.state.sort}` : '')
		//   + (`${this.state.limit}` ? `&limit=${this.state.limit}` : ''))
		//   .then(response => response.json())
		//   .then(data => {
		//     console.log(data);
		//     return data;
		//   })
		//   .then(data => this.setState({
		//     total_count: data.total_count,
		//     items: data.items,
		//     whereFromDate: this.props.form.whereFromDate,
		//     whereToDate: this.props.form.whereToDate,
		//     have_second_class: this.state.have_second_class,
		//     have_third_class: this.state.have_third_class,
		//     have_fourth_class: this.state.have_fourth_class,
		//     have_first_class: this.state.have_first_class,
		//     have_wifi: this.state.have_wifi,
		//     have_express: this.state.have_express,
		//     sort: this.state.sort,
		//     limit: this.state.limit
		//   }));


		// fetch(`https://netology-trainbooking.herokuapp.com/`
		//   + `routes?from_city_id=${this.props.form.cityWhereFromId}&to_city_id=${this.props.form.cityWhereToId}`)
		//   .then(response => response.json())
		//   .then(data => {
		//     console.log(data);
		//     return data;
		//   })
		//   .then(data => this.setState({
		//     total_count: data.total_count,
		//     whereFromDate: this.props.form.whereFromDate,
		//     whereToDate: this.props.form.whereToDate
		//   }));

		// test url from work UI

		// fetch(`https://netology-trainbooking.herokuapp.com/routes?from_city_id=5b9a2fa7f83e028786ea5672&to_city_id=5b9a2fa7f83e028786ea5673`)
		//   .then(response => response.json())
		//   .then(data => {
		//     console.log(data);
		//     return data;
		//   })
		//   .then(data => this.setState({
		//     total_count: data.total_count,
		//     whereFromDate: this.props.form.whereFromDate,
		//     whereToDate: this.props.form.whereToDate,
		//     have_second_class: this.state.have_second_class
		//   }));
	// };

	// componentDidUpdate(prevProps, prevState) {
	// 	if (
	// 		// prevProps.total_count !== this.props.total_count ||
	// 		// prevState.have_second_class !== this.state.have_second_class ||
	// 		// prevState.have_third_class !== this.state.have_third_class ||
	// 		// prevState.have_fourth_class !== this.state.have_fourth_class ||
	// 		// prevState.have_first_class !== this.state.have_first_class ||
	// 		// prevState.have_wifi !== this.state.have_wifi ||
	// 		// prevState.have_express !== this.state.have_express ||
	// 		prevState.sort !== this.state.sort ||
	// 		prevState.limit !== this.state.limit) {
	// 		this.getTicketsFetch()
			// fetch(`https://netology-trainbooking.herokuapp.com/`
			//   + `routes?from_city_id=${this.props.form.cityWhereFromId}&to_city_id=${this.props.form.cityWhereToId}`
			//   + `${this.state.have_second_class ? '&have_second_class=true' : ''}`
			//   + `${this.state.have_third_class ? '&have_third_class=true' : ''}`
			//   + `${this.state.have_fourth_class ? '&have_fourth_class=true' : ''}`
			//   + `${this.state.have_first_class ? '&have_first_class=true' : ''}`
			//   + `${this.state.have_wifi ? '&have_wifi=true' : ''}`
			//   + `${this.state.have_express ? '&have_express=true' : ''}`
			//   + (`${this.state.sort}` ? `&sort=${this.state.sort}` : '')
			//   + (`${this.state.limit}` ? `&limit=${this.state.limit}` : ''))
			//   .then(response => response.json())
			//   .then(data => {
			//     console.log(data);
			//     return data;
			//   })
			//   .then(data => this.setState({
			//     total_count: data.total_count,
			//     items: data.items,
			//     whereFromDate: this.props.form.whereFromDate,
			//     whereToDate: this.props.form.whereToDate,
			//     have_second_class: this.state.have_second_class,
			//     have_third_class: this.state.have_third_class,
			//     have_fourth_class: this.state.have_fourth_class,
			//     have_first_class: this.state.have_first_class,
			//     have_wifi: this.state.have_wifi,
			//     have_express: this.state.have_express,
			//     sort: this.state.sort,
			//     limit: this.state.limit
			//   }));
	// 	}
	// 	// console.log(this.props.items)
	// };

	// setWhereFromDate = (event) => this.setState({ whereFromDate: event.currentTarget.value });

	// setWhereToDate = (event) => this.setState({ whereToDate: event.currentTarget.value });

	// checkSecondClass = (event) => this.setState({ have_second_class: event.currentTarget.checked });

	// checkThirdClass = (event) => this.setState({ have_third_class: event.currentTarget.checked });

	// checkFourthClass = (event) => this.setState({ have_fourth_class: event.currentTarget.checked });

	// checkFirstClass = (event) => this.setState({ have_first_class: event.currentTarget.checked });

	// checkWiFi = (event) => this.setState({ have_wifi: event.currentTarget.checked });

	// checkExpress = (event) => this.setState({ have_express: event.currentTarget.checked });

	// sortSearch = (event) => this.setState({ sort: event.currentTarget.value });

	// filterChoiceTickets = (event) => this.setState({ limit: event.currentTarget.innerHTML });

	// setCustomRangeCostFrom = (bool) => this.setState({ customRangeCostFrom: bool });

	// setCustomRangeCostTo = (bool) => this.setState({ customRangeCostTo: bool });

	render() {

		return (
			<div className="text-white tickets-search-window ">

				<ProgressLineCost tickets={progressStateSelect}
					passengers={progressStateDefault}
					passengersClass=""
					payment={progressStateDefault}
					paymentClass=""
					checkClass="" />

				<div className="container d-flex">

					<SideBarSearchTicketsAndSeatSelection />

					<SearchTicketsJSX />}
        </div>
			</div>
		);
	};
}

const mapStateToProps = (state) => {
	return {
		form: state.sectionSearch.form,
		lastRoutes: state.sectionSearch.lastRoutes,
		items: state.ticketsPayPage.tickets,
		total_count: state.ticketsPayPage.totalCountTickets
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setDataForm: (form) => {
			const action = setDataFormAC(form);
			dispatch(action);
		},
		getLasRoutes: () => {
			dispatch(getLastRoutesTC())
		},
		getTickets: (data) => {
			dispatch(getTicketsTC(data))
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionSearchTickets);