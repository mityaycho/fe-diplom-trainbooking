import React from 'react';
import {setDataCities, setSearchItem} from "../bll/searchMain-reducer";
import {connect} from "react-redux";
import FormMainPage from "./FormMainPage";


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
    if (this.state.value !== prevProps.value) {
      fetch(`https://netology-trainbooking.herokuapp.com/routes/cities?name=${this.state.value}`)
        .then(response => response.json())
        .then(data => this.setState(data.error ? {dataCities: [], value: data.error} : {dataCities: data}));
    };
  };

  setEvent = (event) => {
    this.setState({value: event})
  };

  setWhereFromName = (event) => {
    this.setState({whereFromName: event[0]})
  };

  setWhereToName = (event) => {
    this.setState({whereToName: event[0]})
  };

  setWhereFromDate = (event) => {
    this.setState({whereFromDate: event.currentTarget.value})
  };



  render() {
    return <FormMainPage {...this.state}
                         setEvent={this.setEvent}
                         setWhereFromName={this.setWhereFromName}
                         setWhereToName={this.setWhereToName}
                         setWhereFromDate={this.setWhereFromDate}
    />;
  };
};

const mapState = (state) => {
  return {
    dataCities: state.sectionSearch.dataCities,
    searchItem: state.sectionSearch.searchItem,
    error: state.sectionSearch.error
  };
};

export default connect(mapState, {setDataCities, setSearchItem})(ContainerFormMainPage);