import React from 'react';
import {connect} from "react-redux";
import FormMainPage from "./FormMainPage";
import {setDataFormAC} from "../../../redux/action";


class ContainerFormMainPage extends React.Component {

  state = {
    value: '',
    dataCities: [],
    whereFromCity: '',
    whereFromDate: null,
    whereToCity: '',
    whereToDate: null
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
    this.setState({whereFromCity: event[0]});
  };

  setWhereToCity = (event) => {
    this.setState({whereToCity: event[0]});
  };

  setWhereFromDate = (event) => {
    this.setState({whereFromDate: event.currentTarget.value});
  };

  setWhereToDate = (event) => {
    this.setState({whereToDate: event.currentTarget.value});
  };

  saveMainState = () => {
    const {whereFromCity, whereToCity, whereFromDate, whereToDate} = this.state;
    const setForm = {whereFromCity: whereFromCity, whereToCity: whereToCity, whereFromDate, whereToDate};
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