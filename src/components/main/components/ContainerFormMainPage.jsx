import React from 'react';
import {connect} from "react-redux";
import FormMainPage from "./FormMainPage";
import {setDataFormAC} from "../../../redux/action";


class ContainerFormMainPage extends React.Component {

  state = {
    value: '',
    dataCities: [],
    whereFromName: '',
    whereFromDate: null,
    whereToName: '',
    whereToDate: null
  };

  componentDidMount() {
    fetch(`https://netology-trainbooking.herokuapp.com/routes/cities?name=с`)
      .then(response => response.json())
      .then(data => this.setState({dataCities: data}));
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

  setWhereFromName = (event) => {
    this.setState({whereFromName: event[0]});
  };

  setWhereToName = (event) => {
    this.setState({whereToName: event[0]});
  };

  setWhereFromDate = (event) => {
    this.setState({whereFromDate: event.currentTarget.value});
  };

  setWhereToDate = (event) => {
    this.setState({whereToDate: event.currentTarget.value});
  };

  saveMainState = () => {
    const {whereFromName, whereToName, whereFromDate, whereToDate} = this.state;
    const setForm = {whereFromName, whereToName, whereFromDate, whereToDate};
    this.props.setDataForm(setForm);
  };

  render() {
    return <FormMainPage {...this.state}
                         setEvent={this.setEvent}
                         setWhereFromName={this.setWhereFromName}
                         setWhereToName={this.setWhereToName}
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