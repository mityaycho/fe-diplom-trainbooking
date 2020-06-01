import React from 'react';

import {connect} from 'react-redux';
import {setDataFormAC} from '../../redux/action';
import {Typeahead} from 'react-bootstrap-typeahead';
import { searchMainAPI } from '../../redux/searchMain-reducer';
import { withRouter } from 'react-router';

class HeaderSearchForm extends React.Component {
  state = {
    dataCities: [],
		valueFromCity: this.props.form.whereFromCity,
		valueToCity: this.props.form.whereToCity,
    whereFromCity: this.props.form.whereFromCity,
		whereToCity: this.props.form.whereToCity,
		whereFromDate: this.props.form.whereFromDate,
		whereToDate: this.props.form.whereToDate,
    cityWhereFromId: this.props.form.cityWhereFromId,
    cityWhereToId: this.props.form.cityWhereToId
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.valueFromCity !== this.state.valueFromCity) {
			this.props.searchRoutes(this.state.valueFromCity)
			.then(data => this.setState(data.data.error ? { dataCities: [], valueFromCity: data.data.error } : { dataCities: data.data }));
		}

		if (prevState.valueToCity !== this.state.valueToCity) {
			this.props.searchRoutes(this.state.valueToCity)
			.then(data => this.setState(data.data.error ? { dataCities: [], valueToCity: data.data.error } : { dataCities: data.data }));
		}
  };

  setFromValue = (event) => {
    this.setState({valueFromCity: event});
	};
	
	setToValue = (event) => {
    this.setState({valueToCity: event});
  };

  setWhereFromCity = (event) => {
		if (event.length !== 0) {
			const city = this.state.dataCities.find(el => el.name === event[0]);

			this.setState({ whereFromCity: event[0], cityWhereFromId: city._id, dataCities: [] });
		}
	};

	setWhereToCity = (event) => {
		if (event.length !== 0) {
			const city = this.state.dataCities.find(el => el.name === event[0]);

			this.setState({ whereToCity: event[0], cityWhereToId: city._id, dataCities: [] });
		}
	};

  setWhereFromDate = (event) => {
    this.setState({whereFromDate: event.currentTarget.value});
  };

  setWhereToDate = (event) => {
    this.setState({whereToDate: event.currentTarget.value});
  };

  saveMainState = () => {
    const {whereFromCity, whereToCity, whereFromDate, whereToDate, cityWhereFromId, cityWhereToId} = this.state;
    const setForm = {whereFromCity, whereToCity, whereFromDate, whereToDate, cityWhereFromId, cityWhereToId};
    
		this.props.setDataForm(setForm);
		
		this.props.history.push('/search_tickets');
  };

  render() {
    const options = this.state.dataCities.map(el => el.name);

    return (
      <div className="header-section-three-page">
        <div className="text-white animated zoomInDown">
          <div className="container section-header-order">
            <div className="row">
              <div className="section-header-form-order col-lg-12">
                <div className="d-flex">
                  <form className="form mt-3 w-100" action="input">
                    <p className="ml-3">Направление</p>
                    <div className="d-flex form-group">
                      <Typeahead value={this.state.valueFromCity}
                                 placeholder={this.state.valueFromCity ? this.state.valueFromCity : "откуда"}
                                 id="whereFromCity"
                                 options={options}
                                 onInputChange={this.setFromValue}
                                 onChange={this.setWhereFromCity}
                                 className="col-sm"
                      />
                      <i className="glyphicon glyphicon-user"/>
                      <Typeahead value={this.state.valueToCity}
                                 placeholder={this.state.valueToCity ? this.state.valueToCity : "куда"}
                                 id="whereToCity"
                                 options={options}
                                 onInputChange={this.setToValue}
                                 onChange={this.setWhereToCity}
                                 className="col-sm"
                      />
                    </div>
                  </form>
                  <form className="form mt-3 w-100" action="input">
                    <p className="ml-3">Дата</p>
                    <div className="d-flex form-group m-3">
                      <input className="col-sm form-control mr-4"
                             key="dateFrom"
                             type="date"
                             onChange={this.setWhereFromDate}
                             value={this.state.whereFromDate}
                      />
                      <input className="col-sm form-control"
                             key="dateTo"
                             type="date"
                             onChange={this.setWhereToDate}
                             value={this.state.whereToDate}
                      />
                    </div>
                  </form>
                </div>
                <div className="text-right">
									<button 
									className="btn btn-warning btn-sm m-3 col-lg-3"
                  type="button"
                  onClick={this.saveMainState}>найти билеты</button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderSearchForm));