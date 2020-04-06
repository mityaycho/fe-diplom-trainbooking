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
import { setDataFormAC } from '../../redux/action';
import { connect } from 'react-redux';
import iconMinus from '../../images/icon_minus.png';
import LastRoutes from './LastRoutes';
import { getLastRoutesTC } from '../../redux/searchMain-reducer';
import { getTicketsTC } from '../../redux/ticketsPay-reducer';
import ReactCompoundSlider from './reactCompoundSlider/ReactCompoundSlider';
import ReactSlider from './reactCompoundSlider/ReactSlider';


class SideBarSearchTicketsAndSeatSelection extends React.Component {
	state = {
		customRangeCostFrom: false,
		customRangeCostTo: false,
		lastRoutes: [],
		have_second_class: false,
		have_third_class: false,
		have_fourth_class: false,
		have_first_class: false,
		have_wifi: false,
		have_express: false,
		whereFromDate: undefined,
		whereToDate: undefined
	};
	getTicketsFetch = () => {
		const data = {
			cityWhereFromId: this.props.form.cityWhereFromId,
			cityWhereToId: this.props.form.cityWhereToId,
			sort: this.props.sort,
			limit: this.props.limit,
			have_second_class: this.state.have_second_class,
			have_third_class: this.state.have_third_class,
			have_fourth_class: this.state.have_fourth_class,
			have_first_class: this.state.have_first_class,
			have_wifi: this.state.have_wifi,
			have_express: this.state.have_express
		};
		this.props.getTickets(data);
	};

	componentDidMount() {
		this.props.getLasRoutes();
		this.getTicketsFetch();
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.total_count !== this.props.total_count ||
			prevState.have_second_class !== this.state.have_second_class ||
			prevState.have_third_class !== this.state.have_third_class ||
			prevState.have_fourth_class !== this.state.have_fourth_class ||
			prevState.have_first_class !== this.state.have_first_class ||
			prevState.have_wifi !== this.state.have_wifi ||
			prevState.have_express !== this.state.have_express 
			) {
			this.getTicketsFetch();
			};
	};

	setWhereFromDate = (event) => this.setState({ whereFromDate: event.currentTarget.value });

	setWhereToDate = (event) => this.setState({ whereToDate: event.currentTarget.value });

	checkSecondClass = (event) => this.setState({ have_second_class: event.currentTarget.checked });

	checkThirdClass = (event) => this.setState({ have_third_class: event.currentTarget.checked });

	checkFourthClass = (event) => this.setState({ have_fourth_class: event.currentTarget.checked });

	checkFirstClass = (event) => this.setState({ have_first_class: event.currentTarget.checked });

	checkWiFi = (event) => this.setState({ have_wifi: event.currentTarget.checked });

	checkExpress = (event) => this.setState({ have_express: event.currentTarget.checked });

	setCustomRangeCostFrom = (bool) => this.setState({ customRangeCostFrom: bool });

	setCustomRangeCostTo = (bool) => this.setState({ customRangeCostTo: bool });

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
									checked={this.state.have_second_class} onChange={this.checkSecondClass} />
								<label className="custom-control-label" htmlFor="customSwitch1"></label>
							</div>
						</div>
						<div className="container economclass ml-3 d-flex">
							<img className="icon-coupe" src={iconEconomclass} alt="иконка Плацкарт" />
							<p className="container">Плацкарт</p>
							<div className="custom-control custom-switch d-flex justify-content-end mr-4">
								<input type="checkbox" className="custom-control-input" id="customSwitch2"
									checked={this.state.have_third_class} onChange={this.checkThirdClass} />
								<label className="custom-control-label" htmlFor="customSwitch2"></label>
							</div>
						</div>
						<div className="container coupe ml-3 d-flex">
							<img className="icon-coupe" src={iconSedentary} alt="иконка Сидячий" />
							<p className="container">Сидячий</p>
							<div className="custom-control custom-switch d-flex justify-content-end mr-4">
								<input type="checkbox" className="custom-control-input" id="customSwitch3"
									checked={this.state.have_fourth_class} onChange={this.checkFourthClass} />
								<label className="custom-control-label" htmlFor="customSwitch3"></label>
							</div>
						</div>
						<div className="container coupe ml-3 d-flex">
							<img className="icon-coupe" src={iconLuxury} alt="иконка Люкс" />
							<p className="container">Люкс</p>
							<div className="custom-control custom-switch d-flex justify-content-end mr-4">
								<input type="checkbox" className="custom-control-input" id="customSwitch4"
									checked={this.state.have_first_class} onChange={this.checkFirstClass} />
								<label className="custom-control-label" htmlFor="customSwitch4"></label>
							</div>
						</div>
						<div className="container coupe ml-3 d-flex">
							<img className="icon-coupe" src={iconWifi} alt="иконка Wi-Fi" />
							<p className="container">Wi-Fi</p>
							<div className="custom-control custom-switch d-flex justify-content-end mr-4">
								<input type="checkbox" className="custom-control-input" id="customSwitch5"
									checked={this.state.have_wifi} onChange={this.checkWiFi} />
								<label className="custom-control-label" htmlFor="customSwitch5"></label>
							</div>
						</div>
						<div className="container coupe ml-3 d-flex">
							<img className="icon-coupe" src={iconExpress} alt="иконка Экспресс" />
							<p className="container">Экспресс</p>
							<div className="custom-control custom-switch d-flex justify-content-end mr-4">
								<input type="checkbox" className="custom-control-input" id="customSwitch6"
									checked={this.state.have_express} onChange={this.checkExpress} />
								<label className="custom-control-label" htmlFor="customSwitch6"></label>
							</div>
						</div>
					</div>


					<hr className="bg-light" />
					<form className="form pt-3 pl-4 pr-4 w-100">
						<label className="custom-range-cost" htmlFor="customRange3">Стоимость</label>
						<div className="row justify-content-between react-compound-slider"><span>от</span><span>до</span></div>
						<ReactCompoundSlider />
					</form>
					<ReactSlider />



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
							<form className="form pl-4 pr-4 w-100">
								<label htmlFor="customRange3">Время отбытия</label>
								<input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3" />
							</form>
							<form className="form pl-4 pr-4 w-100">
								<div className="d-flex mt-4 justify-content-end">
									<label htmlFor="customRange3">Время прибытия</label>
								</div>
								<input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3" />
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
						<div>
							<div className="container d-flex justify-content-between w-100">
								<p className="custom-range-cost ml-2 mt-2 font-weight-bold">
									<img className="mr-2" src={iconBack} alt="иконка туда" />Обратно</p>
								<img className="custom-range-cost-check icon-coupe mr-3 mt-3"
									onClick={() => this.setCustomRangeCostTo(false)}
									src={iconMinus} alt="иконка плюс" />
							</div>
							<form className="form pl-4 pr-4 w-100">
								<label htmlFor="customRange3">Время отбытия</label>
								<input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3" />
							</form>
							<form className="form pl-4 pr-4 w-100">
								<div className="d-flex mt-4 justify-content-end">
									<label htmlFor="customRange3">Время прибытия</label>
								</div>
								<input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3" />
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
		items: state.ticketsPayPage.tickets,
		total_count: state.ticketsPayPage.totalCountTickets,
		sort: state.ticketsPayPage.sort,
		limit: state.ticketsPayPage.limit
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

export default connect(mapStateToProps, mapDispatchToProps)(SideBarSearchTicketsAndSeatSelection);