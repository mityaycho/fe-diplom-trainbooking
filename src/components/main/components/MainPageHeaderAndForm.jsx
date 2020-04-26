import React, { Fragment } from 'react';
import iconCachedWhite from '../../../images/icon_cached_white.png';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { connect } from 'react-redux';
import { setDataFormAC } from '../../../redux/action';
import { Typeahead } from 'react-bootstrap-typeahead';
import { withRouter } from 'react-router-dom';
import { searchMainAPI } from '../../../redux/searchMain-reducer';

class MainPageHeaderAndForm extends React.Component {

	state = {
		value: '',
		dataCities: [],
		whereFromCity: '',
		whereFromDate: '',
		whereToCity: '',
		whereToDate: '',
		cityWhereFromId: '',
		cityWhereToId: ''
	};

	componentDidMount() {
		this.props.searchRoutes('')
		.then(data => this.setState(data.data.error ? { dataCities: [], value: data.data.error } : { dataCities: data.data }));
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.value !== this.state.value) {
			this.props.searchRoutes(this.state.value)
			.then(data => this.setState(data.data.error ? { dataCities: [], value: data.data.error } : { dataCities: data.data }));
		}
	};

	setEvent = (event) => {
		this.setState({ value: event });
	};

	setWhereFromCity = (event) => {
		const city = this.state.dataCities.find(el => el.name === event[0]);

		this.setState({ whereFromCity: event[0], cityWhereFromId: city._id, dataCities: [], value: '' });
	};

	setWhereToCity = (event) => {
		const city = this.state.dataCities.find(el => el.name === event[0]);
		this.setState({ whereToCity: event[0], cityWhereToId: city._id, dataCities: [], value: '' });
	};

	setWhereFromDate = (event) => {
		this.setState({ whereFromDate: event.currentTarget.value });
	};

	setWhereToDate = (event) => {
		this.setState({ whereToDate: event.currentTarget.value });
	};

	saveMainState = () => {
		const { whereFromCity, whereToCity, whereFromDate, whereToDate, cityWhereFromId, cityWhereToId } = this.state;
		const setForm = { whereFromCity, whereToCity, whereFromDate, whereToDate, cityWhereFromId, cityWhereToId };
		this.props.setDataForm(setForm);

		this.props.history.push('/search_tickets');
	};

	render() {

		const options = this.state.dataCities.map(el => el.name);

		return (
			<div className="header-section">
				<div className="container section-header text-white">
					<div className="row">
						<div className="section-header-text col-lg-6 pl-5 animated zoomInDown">
							<h1 className="display-4">Вся жизнь -</h1>
							<h1 className="display-4 font-weight-bold">путешествие!</h1>
						</div>
						<div className="section-header-form col-lg-6 animated zoomInDown">
							<div className="row mt-5">
								<form className="form mt-5 w-100">
									<p className="ml-3">Направление</p>
									<div className="d-flex form-group m-3 justify-content-center">
										<Fragment>
											<Typeahead value={this.value}
												placeholder={this.state.dataCities.error ? this.state.dataCities.error : "откуда"}
												id="whereFromCity"
												options={options}
												onInputChange={this.setEvent}
												onChange={this.setWhereFromCity}
												className="input-typeahead"
											/>
										</Fragment>
										<img className="mt-auto mb-2" src={iconCachedWhite} alt="..." />

										<Typeahead
											value={this.searchItem}
											placeholder={this.state.dataCities.error ? this.state.dataCities.error : "куда"}
											id="whereToCity"
											options={options}
											onInputChange={this.setEvent}
											onChange={this.setWhereToCity}
											className="input-typeahead"
										/>
									</div>
								</form>
								<form className="form mt-5 w-100">
									<p className="ml-3">Дата</p>
									<div className="d-flex form-group m-3">
										<input className="col-sm form-control mr-4"
											type="date"
											value={this.state.whereFromDate}
											onChange={this.setWhereFromDate} />
										<input className="col-sm form-control"
											type="date"
											value={this.state.whereToDate}
											onChange={this.setWhereToDate} />
									</div>
								</form>
							</div>
							<div className="text-right ml-4">
								<button className="btn btn-warning mt-5 col-lg-6"
									type="button"
									onClick={this.saveMainState}>найти билеты</button>
							</div>
						</div>
					</div>
				</div>
				<div className="header-bottom-line"></div>
			</div>
		);
	};
}

const mapStateToProps = (state) => {
	return {
		form: state.sectionSearch.form
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		searchRoutes: (value) => searchMainAPI(value),
		setDataForm: (form) => {
			const action = setDataFormAC(form);
			dispatch(action);
		}
	}
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPageHeaderAndForm));