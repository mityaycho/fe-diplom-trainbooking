import React from 'react';
import iconCoupe from '../../images/icon_coupe.png';
import iconEconomclass from '../../images/icon_economclass.png';
import iconSedentary from '../../images/icon_sedentary.png';
import iconLuxury from '../../images/icon_luxury.png';
import iconWifi from '../../images/icon_wifi.png';
import iconExpress from '../../images/icon_express.png';
import iconThere from '../../images/icon_there.png';
import iconBack from '../../images/icon_back.png';
import iconPlus from '../../images/icon_plus.png';
import iconMinus from '../../images/icon_minus.png';
import LastRoutes from './LastRoutes';
import ReactCompoundSlider from './reactCompoundSlider/ReactCompoundSlider';
import ReactCompoundSliderSmall from './reactCompoundSlider/ReactCompoundSliderSmall';
import { connect } from 'react-redux';
import { setDataFormAC } from '../../redux/action';
import { getLastRoutesTC } from '../../redux/searchMain-reducer';
import { withRouter } from 'react-router';
import { filterTicketsAndSeatsReducerTC } from '../../redux/filterTicketsAndSeats-reducer';


class SideBarSearchTicketsAndSeatSelection extends React.Component {
	state = {
		customRangeCostFrom: this.props.customRangeCostFrom,
		customRangeCostTo: this.props.customRangeCostTo,
		whereFromDate: this.props.form.whereFromDate,
		whereToDate: this.props.form.whereToDate,
		price_from: this.props.price_from,
		price_to: this.props.price_to,
		start_departure_hour_from: this.props.start_departure_hour_from,
		start_departure_hour_to: this.props.start_departure_hour_to,
		start_arrival_hour_from: this.props.start_arrival_hour_from,
		start_arrival_hour_to: this.props.start_arrival_hour_to,
		end_departure_hour_from: this.props.end_departure_hour_from,
		end_departure_hour_to: this.props.end_departure_hour_to,
		end_arrival_hour_from: this.props.end_arrival_hour_from,
		end_arrival_hour_to: this.props.end_arrival_hour_to
	};

	componentDidMount() {
		this.props.setSeatsAndTicketsEvent('actualPage', this.props.match.url);
		this.props.getLasRoutes();
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.total_count !== this.props.total_count ||
			prevProps.have_second_class !== this.props.have_second_class ||
			prevProps.have_third_class !== this.props.have_third_class ||
			prevProps.have_fourth_class !== this.props.have_fourth_class ||
			prevProps.have_first_class !== this.props.have_first_class ||
			prevProps.have_wifi !== this.props.have_wifi ||
			prevProps.have_express !== this.props.have_express ||
			prevState.price_from !== this.state.price_from ||
			prevState.price_to !== this.state.price_to ||
			prevState.start_departure_hour_from !== this.state.start_departure_hour_from ||
			prevState.start_departure_hour_to !== this.state.start_departure_hour_to ||
			prevState.start_arrival_hour_from !== this.state.start_arrival_hour_from ||
			prevState.start_arrival_hour_to !== this.state.start_arrival_hour_to ||
			prevState.end_departure_hour_from !== this.state.end_departure_hour_from ||
			prevState.end_departure_hour_to !== this.state.end_departure_hour_to ||
			prevState.end_arrival_hour_from !== this.state.end_arrival_hour_from ||
			prevState.end_arrival_hour_to !== this.state.end_arrival_hour_to
			) {
				this.props.setSeatsAndTicketsEvent('actualPage', this.props.match.url);
			};
	};

	setWhereFromDate = (event) => this.setState({ whereFromDate: event.currentTarget.value });

	setWhereToDate = (event) => this.setState({ whereToDate: event.currentTarget.value });

	checkSecondClass = (event) => this.props.setSeatsAndTicketsEvent('have_second_class', event.currentTarget.checked);

	checkThirdClass = (event) => this.props.setSeatsAndTicketsEvent('have_third_class', event.currentTarget.checked);

	checkFourthClass = (event) => this.props.setSeatsAndTicketsEvent('have_fourth_class', event.currentTarget.checked);

	checkFirstClass = (event) => this.props.setSeatsAndTicketsEvent('have_first_class', event.currentTarget.checked);

	checkWiFi = (event) => this.props.setSeatsAndTicketsEvent('have_wifi', event.currentTarget.checked);

	checkExpress = (event) => this.props.setSeatsAndTicketsEvent('have_express', event.currentTarget.checked);

	setCustomRangeCostFrom = (bool) => this.setState({ customRangeCostFrom: bool });

	setCustomRangeCostTo = (bool) => this.setState({ customRangeCostTo: bool });

	setPrice = (array) => this.setState({price_from: array[0], price_to: array[1]});

	startDeparture = (array) => this.setState({start_departure_hour_from: array[0], start_departure_hour_to: array[1]});
	
	startArrival = (array) => this.setState({start_arrival_hour_from: array[0], start_arrival_hour_to: array[1]});
	
	endDeparture = (array) => this.setState({end_departure_hour_from: array[0], end_departure_hour_to: array[1]});
	
	endArrival = (array) => this.setState({end_arrival_hour_from: array[0], end_arrival_hour_to: array[1]});

	render() {

		const lastRoutesJSX = this.props.lastRoutes ? this.props.lastRoutes.map((el, idx) =>
			<LastRoutes key={idx} state={el} />) : [];

		return (
			<div className="tickets-search-param col-lg-3 mt-5 mb-5">
				<div className="tickets-search-menu bg-dark">
					<form className="form pt-5 pl-4 pr-4 w-100" action="input">
						<p>Дата поездки</p>
						<div className="d-flex form-group">
							<input className="col-sm form-control"
								type="date"
								onChange={this.setWhereFromDate}
								value={this.state.whereFromDate}
							/>
						</div>
					</form>
					<form className="form pt-3 pl-4 pr-4 w-100" action="input">
						<p>Дата возвращения</p>
						<div className="d-flex form-group">
							<input className="col-sm form-control"
								type="date"
								onChange={this.setWhereToDate}
								value={this.state.whereToDate}
							/>
						</div>
					</form>
					<hr className="bg-light" />
					<div className="row ml-1">
						<div className="container coupe ml-3 d-flex">
							<img className="icon-coupe" src={iconCoupe} alt="иконка купе" />
							<p className="container">Купе</p>
							<div className="custom-control custom-switch d-flex justify-content-end mr-4">
								<input type="checkbox" className="custom-control-input" id="customSwitch1"
									checked={this.props.have_second_class} onChange={this.checkSecondClass} />
								<label className="custom-control-label" htmlFor="customSwitch1"></label>
							</div>
						</div>
						<div className="container economclass ml-3 d-flex">
							<img className="icon-coupe" src={iconEconomclass} alt="иконка Плацкарт" />
							<p className="container">Плацкарт</p>
							<div className="custom-control custom-switch d-flex justify-content-end mr-4">
								<input type="checkbox" className="custom-control-input" id="customSwitch2"
									checked={this.props.have_third_class} onChange={this.checkThirdClass} />
								<label className="custom-control-label" htmlFor="customSwitch2"></label>
							</div>
						</div>
						<div className="container coupe ml-3 d-flex">
							<img className="icon-coupe" src={iconSedentary} alt="иконка Сидячий" />
							<p className="container">Сидячий</p>
							<div className="custom-control custom-switch d-flex justify-content-end mr-4">
								<input type="checkbox" className="custom-control-input" id="customSwitch3"
									checked={this.props.have_fourth_class} onChange={this.checkFourthClass} />
								<label className="custom-control-label" htmlFor="customSwitch3"></label>
							</div>
						</div>
						<div className="container coupe ml-3 d-flex">
							<img className="icon-coupe" src={iconLuxury} alt="иконка Люкс" />
							<p className="container">Люкс</p>
							<div className="custom-control custom-switch d-flex justify-content-end mr-4">
								<input type="checkbox" className="custom-control-input" id="customSwitch4"
									checked={this.props.have_first_class} onChange={this.checkFirstClass} />
								<label className="custom-control-label" htmlFor="customSwitch4"></label>
							</div>
						</div>
						<div className="container coupe ml-3 d-flex">
							<img className="icon-coupe" src={iconWifi} alt="иконка Wi-Fi" />
							<p className="container">Wi-Fi</p>
							<div className="custom-control custom-switch d-flex justify-content-end mr-4">
								<input type="checkbox" className="custom-control-input" id="customSwitch5"
									checked={this.props.have_wifi} onChange={this.checkWiFi} />
								<label className="custom-control-label" htmlFor="customSwitch5"></label>
							</div>
						</div>
						<div className="container coupe ml-3 d-flex">
							<img className="icon-coupe" src={iconExpress} alt="иконка Экспресс" />
							<p className="container">Экспресс</p>
							<div className="custom-control custom-switch d-flex justify-content-end mr-4">
								<input type="checkbox" className="custom-control-input" id="customSwitch6"
									checked={this.props.have_express} onChange={this.checkExpress} />
								<label className="custom-control-label" htmlFor="customSwitch6"></label>
							</div>
						</div>
					</div>


					<hr className="bg-light" />
					<form className="form pt-3 pl-4 pr-4 w-100">
						<label className="custom-range-cost" htmlFor="customRange3">Стоимость</label>
						<div className="row justify-content-between react-compound-slider"><span>от</span><span>до</span></div>
						<ReactCompoundSlider setPrice={this.setPrice} />
					</form>



					<hr className="bg-light mt-5" />
					{this.state.customRangeCostFrom ?
						<div>
							<div className="container d-flex justify-content-between w-100">
								<p className="custom-range-cost ml-2 mt-2 font-weight-bold">
									<img className="mr-2" src={iconThere} alt="иконка туда" />Туда</p>
								<img className="custom-range-cost-check icon-coupe mr-3 mt-3"
									onClick={() => this.setCustomRangeCostFrom(false)}
									src={iconMinus} alt="иконка плюс" />
							</div>
							<form className="form pl-4 pr-4 mt-2 pb-2 w-100">
								<label htmlFor="customRange3">Время отбытия</label>
								<ReactCompoundSliderSmall setHoursFilter={this.startDeparture} />
							</form>
							<form className="form pl-4 pr-4 pt-3 pb-5 w-100">
								<div className="d-flex mt-4 justify-content-end">
									<label htmlFor="customRange3">Время прибытия</label>
								</div>
								<ReactCompoundSliderSmall setHoursFilter={this.startArrival} />
							</form>
						</div> :
						<div className="container d-flex justify-content-between w-100">
							<p className="custom-range-cost ml-2 mt-2 font-weight-bold">
								<img className="mr-2"
									src={iconThere}
									alt="иконка туда" />Туда</p>
							<img className="custom-range-cost-check icon-coupe mr-3 mt-3"
								onClick={() => this.setCustomRangeCostFrom(true)}
								src={iconPlus} alt="иконка плюс" />
						</div>}

					<hr className="bg-light" />

					{this.state.customRangeCostTo ?
						<div className="pb-3">
							<div className="container d-flex justify-content-between w-100">
								<p className="custom-range-cost ml-2 mt-2 font-weight-bold">
									<img className="mr-2" src={iconBack} alt="иконка туда" />Обратно</p>
								<img className="custom-range-cost-check icon-coupe mr-3 mt-3"
									onClick={() => this.setCustomRangeCostTo(false)}
									src={iconMinus} alt="иконка плюс" />
							</div>
							<form className="form pl-4 pr-4 mt-2 pb-2 w-100">
								<label htmlFor="customRange3">Время отбытия</label>
								<ReactCompoundSliderSmall setHoursFilter={this.endDeparture}/>
							</form>
							<form className="form pl-4 pr-4 pt-3 pb-5 w-100">
								<div className="d-flex mt-4 justify-content-end">
									<label htmlFor="customRange3">Время прибытия</label>
								</div>
								<ReactCompoundSliderSmall setHoursFilter={this.endArrival} />
							</form>
						</div> :
						<div className="container d-flex justify-content-between w-100">
							<p className="custom-range-cost ml-2 mt-2 pb-3 font-weight-bold">
								<img className="mr-2"
									src={iconBack}
									alt="иконка обратно" />Обратно</p>
							<img className="custom-range-cost-check icon-coupe mr-3 mt-3"
								onClick={() => this.setCustomRangeCostTo(true)}
								src={iconPlus} alt="иконка плюс" />
						</div>
					}
				</div>


				<div className="last-tickets">
					<h4 className="mt-5 mb-2 ml-1">Последние билеты</h4>
					{lastRoutesJSX}
				</div>
			</div>
		);
	};
}

const mapStateToProps = (state) => {
	return {
		form: state.sectionSearch.form,
		lastRoutes: state.sectionSearch.lastRoutes,
		ticketsArray: state.filterChoiceTicketsAndSeatsPages.ticketsArray,
		items: state.filterChoiceTicketsAndSeatsPages.tickets,
		total_count: state.filterChoiceTicketsAndSeatsPages.totalCountTickets,
		have_second_class: state.filterChoiceTicketsAndSeatsPages.have_second_class,
		have_third_class: state.filterChoiceTicketsAndSeatsPages.have_third_class,
		have_fourth_class: state.filterChoiceTicketsAndSeatsPages.have_fourth_class,
		have_first_class: state.filterChoiceTicketsAndSeatsPages.have_first_class,
		have_wifi: state.filterChoiceTicketsAndSeatsPages.have_wifi,
		have_express: state.filterChoiceTicketsAndSeatsPages.have_express,
		price_from: state.filterChoiceTicketsAndSeatsPages.price_from,
		price_to: state.filterChoiceTicketsAndSeatsPages.price_to,
		start_departure_hour_from: state.filterChoiceTicketsAndSeatsPages.start_departure_hour_from,
		start_departure_hour_to: state.filterChoiceTicketsAndSeatsPages.start_departure_hour_to,
		start_arrival_hour_from: state.filterChoiceTicketsAndSeatsPages.start_arrival_hour_from,
		start_arrival_hour_to: state.filterChoiceTicketsAndSeatsPages.start_arrival_hour_to,
		end_departure_hour_from: state.filterChoiceTicketsAndSeatsPages.end_departure_hour_from,
		end_departure_hour_to: state.filterChoiceTicketsAndSeatsPages.end_departure_hour_to,
		end_arrival_hour_from: state.filterChoiceTicketsAndSeatsPages.end_arrival_hour_from,
		end_arrival_hour_to: state.filterChoiceTicketsAndSeatsPages.end_arrival_hour_to,
		customRangeCostFrom: state.filterChoiceTicketsAndSeatsPages.customRangeCostFrom,
		customRangeCostTo: state.filterChoiceTicketsAndSeatsPages.customRangeCostTo
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
		setSeatsAndTicketsEvent: (fieldName, fieldValue) => dispatch(filterTicketsAndSeatsReducerTC(fieldName, fieldValue))
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBarSearchTicketsAndSeatSelection))