import React from 'react';
import {connect} from 'react-redux';
import FormMainPage from './FormMainPage';
import {setDataFormAC} from '../../../redux/action';


class ContainerFormMainPage extends React.Component {

  state = {
    value: '',
    dataCities: [],
    whereFromCity: '',
    whereFromDate: null,
    whereToCity: '',
		whereToDate: null,
		cityWhereFromId: '',
		cityWhereToId: ''
  };

  componentDidMount() {
    fetch(`https://netology-trainbooking.herokuapp.com/routes/cities?name=`)
      .then(response => response.json())
      .then(data => this.setState(data.error ? {dataCities: [], value: data.error} : {dataCities: data}));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      fetch(`https://netology-trainbooking.herokuapp.com/routes/cities?name=${this.state.value}`)
        .then(response => response.json())
        .then(data => this.setState(data.error ? {dataCities: [], value: data.error} : {dataCities: data}));
    }
  };

  setEvent = (event) => {
    this.setState({value: event});
  };

  setWhereFromCity = (event) => {
		const cityId = this.state.dataCities.find(el => {
			let id;
			if (el.name === event[0]) {
				id = el._id
			}
			return id;
		})
		
		this.setState({whereFromCity: event[0], cityWhereFromId: cityId._id, dataCities: [], value: ''});
  };

  setWhereToCity = (event) => {
		const cityId = this.state.dataCities.find(el => {
			let id;
			if (el.name === event[0]) {
				id = el._id
			}
			return id;
		})
    this.setState({whereToCity: event[0], cityWhereToId: cityId._id, dataCities: [], value: ''}, () => console.log(this.state));
	};

  setWhereFromDate = (event) => {
    this.setState({whereFromDate: event.currentTarget.value});
  };

  setWhereToDate = (event) => {
    this.setState({whereToDate: event.currentTarget.value});
  };

  saveMainState = () => {
    const {whereFromCity, whereToCity, whereFromDate, whereToDate, cityWhereFromId, cityWhereToId} = this.state;
		const setForm = {whereFromCity: whereFromCity, whereToCity: whereToCity, whereFromDate, whereToDate, cityWhereFromId, cityWhereToId};
		console.log(setForm);
    this.props.setDataForm(setForm);
  };

  render() {
    return <FormMainPage {...this.state}
                         setEvent={this.setEvent}
                         setWhereFromCity={this.setWhereFromCity}
                         setWhereToCity={this.setWhereToCity}
                         setWhereFromDate={this.setWhereFromDate}
                         setWhereToDate={this.setWhereToDate}
												 saveMainState={this.saveMainState}
    />;
  };
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


export default connect(mapStateToProps, mapDispatchToProps)(ContainerFormMainPage);