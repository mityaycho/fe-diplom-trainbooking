import React from 'react';
import {setDataCities} from "../bll/reducerSectionSearchMain";
import {connect} from "react-redux";
import FormOneTwoPage from "./FormOneTwoPage";


class  ContainerFormOneTwoPage extends React.Component{
  componentDidMount() {
    fetch( 'https://netology-trainbooking.herokuapp.com/routes/cities?name=мос' )
      .then( response => response.json())
      .then( data => {
        this.props.setDataCities(data[0].name)
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

export default connect(mapState, {setDataCities})(ContainerFormOneTwoPage);