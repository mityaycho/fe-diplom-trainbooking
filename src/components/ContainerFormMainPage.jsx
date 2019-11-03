import React from 'react';
import {setDataCities} from "../bll/searchMain-reducer";
import {connect} from "react-redux";
import FormMainPage from "./FormMainPage";


class  ContainerFormMainPage extends React.Component{
  inputCitiesChanged(value) {
    fetch( 'https://netology-trainbooking.herokuapp.com/routes/cities?name=с' )
      .then( response => response.json())
      .then( data => {
        this.props.setDataCities(data);
      });
  }
  render() {
    return <FormMainPage {...this.props}/>;
  };
};

const mapState =(state) => {
  return {
    dataCities: state.sectionSearch.dataCities,
    currentValueCities: state.sectionSearch.currentValueCities
  };
};

export default connect(mapState, {setDataCities})(ContainerFormMainPage);