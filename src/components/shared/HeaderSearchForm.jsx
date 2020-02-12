import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {setDataFormAC} from '../../redux/action';
import {Typeahead} from 'react-bootstrap-typeahead';

class HeaderSearchForm extends React.Component {
  state = {
    valueFromCity: '',
    valueToCity: '',
    dataCities: [],
    whereFromCity: '',
    whereFromDate: undefined,
    whereToCity: '',
    whereToDate: undefined,
    cityWhereFromId: '',
    cityWhereToId: ''
  };

  componentDidMount() {
    fetch(`https://netology-trainbooking.herokuapp.com/routes/cities?name=`)
      .then(response => response.json())
      .then(data => this.setState(data.error ? {dataCities: []} : {dataCities: data}));
    this.setState({
      whereFromCity: this.props.form.whereFromCity,
      whereToCity: this.props.form.whereToCity,
      valueFromCity: this.props.form.whereFromCity,
      valueToCity: this.props.form.whereToCity,
      whereFromDate: this.props.form.whereFromDate,
      whereToDate: this.props.form.whereToDate
    })
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      fetch(`https://netology-trainbooking.herokuapp.com/routes/cities?name=${this.state.valueFromCity}`)
        .then(response => response.json())
        .then(data => this.setState(data.error ? {dataCities: [], valueFromCity: data.error} : {dataCities: data}));
    }
    if (prevState.value !== this.state.value) {
      fetch(`https://netology-trainbooking.herokuapp.com/routes/cities?name=${this.state.valueToCity}`)
        .then(response => response.json())
        .then(data => this.setState(data.error ? {dataCities: [], valueToCity: data.error} : {dataCities: data}));
    }
  };

  setEvent = (event) => {
    this.setState({value: event});
  };

  setWhereFromCity = (event) => {
    const city = this.state.dataCities.find(el => el.name === event[0]);

    this.setState({whereFromCity: event[0], cityWhereFromId: city._id, dataCities: [], value: ''});
  };

  setWhereToCity = (event) => {
    const city = this.state.dataCities.find(el => el.name === event[0]);
    this.setState({whereToCity: event[0], cityWhereToId: city._id, dataCities: [], value: ''});
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
    console.log(setForm);
    this.props.setDataForm(setForm);
  };

  render() {
    const options = this.state.dataCities.map(el => el.name);

    return (
      <div className="header-section-three-page">
        <div className="text-white animated zoomInDow">
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
                                 onInputChange={this.setEvent}
                                 onChange={this.setWhereFromCity}
                                 className="col-sm"
                      />
                      <i className="glyphicon glyphicon-user"/>
                      <Typeahead value={this.state.valueToCity}
                                 placeholder={this.state.valueToCity ? this.state.valueToCity : "куда"}
                                 id="whereToCity"
                                 options={options}
                                 onInputChange={this.setEvent}
                                 onChange={this.setWhereToCity}
                                 className="col-sm"
                      />
                    </div>
                  </form>
                  <form className="form mt-3 w-100" action="input">
                    <p className="ml-3">Дата</p>
                    <div className="d-flex form-group m-3">
                      <input className="col-sm form-control mr-4"
                             type="date"
                             onChange={this.setWhereFromDate}
                             value={this.state.whereFromDate}
                      />
                      <input className="col-sm form-control"
                             type="date"
                             onChange={this.setWhereToDate}
                             value={this.state.whereToDate}
                      />
                    </div>
                  </form>
                </div>
                <div className="text-right">
                  <NavLink className="btn btn-warning btn-sm m-3 col-lg-3"
                           to="/"
                           type="button"
                           onClick={this.saveMainState}
                  >найти
                    билеты</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.sectionSearch.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDataForm: (form) => {
      const action = setDataFormAC(form);
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearchForm);