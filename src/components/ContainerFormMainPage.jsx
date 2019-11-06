import React from 'react';
import {setDataCities, setSearchItem} from "../bll/searchMain-reducer";
import {connect} from "react-redux";
import FormMainPage from "./FormMainPage";


class ContainerFormMainPage extends React.Component {
  componentDidMount() {
    fetch(`https://netology-trainbooking.herokuapp.com/routes/cities?name=c`)
      .then(response => response.json())
      .then(data => {
        this.props.setDataCities(data);
        console.log(data)
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.searchItem !== prevProps.searchItem) {
      fetch(`https://netology-trainbooking.herokuapp.com/routes/cities?name=${this.props.searchItem}`)
        .then(response => response.json())
        .then(data => {
          this.props.setDataCities(data);
        });
    }
    ;
  };

  render() {
    return <FormMainPage {...this.props}/>;
  };
};

const mapState = (state) => {
  return {
    dataCities: state.sectionSearch.dataCities,
    searchItem: state.sectionSearch.searchItem
  };
};

export default connect(mapState, {setDataCities, setSearchItem})(ContainerFormMainPage);