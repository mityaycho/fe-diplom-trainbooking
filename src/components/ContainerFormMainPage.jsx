import React from 'react';
import {setDataCities} from "../bll/reducerSectionSearchMain";
import {connect} from "react-redux";
import FormOneTwoPage from "./FormMainPage";


class  ContainerFormMainPage extends React.Component{
  componentDidMount() {
    fetch( 'https://netology-trainbooking.herokuapp.com/routes/cities?name=с' )
      .then( response => response.json())
      .then( data => {
        this.props.setDataCities(data);
      });
  }
  render() {
    return <FormOneTwoPage {...this.props}/>;
  };
};

const mapState =(state) => {
  return {
    dataCities: state.sectionSearch.dataCities
  };
};

export default connect(mapState, {setDataCities})(ContainerFormMainPage);