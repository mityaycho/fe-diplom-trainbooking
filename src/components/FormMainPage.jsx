import React, {Fragment} from 'react';
import iconCachedWhite from "../images/icon_cached_white.png";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import {Typeahead} from 'react-bootstrap-typeahead';


class FormMainPage extends React.Component {

  state = {

  }

  setSearchItem = (e) => {
    this.props.setSearchItem(e);
  }
  options = this.props.dataCities.map(el => el.name);

  render() {
    return (
      <div className="row mt-5">
        <form className="form mt-5 w-100" action="input">
          <p className="ml-3">Направление</p>
          <div className="d-flex form-group m-3 justify-content-center">
            <Fragment>
              <Typeahead id={1} value={this.props.searchItem}
                         placeholder={this.props.error ? this.props.error : "откуда"}
                         options={this.options}
                         onInputChange={this.setSearchItem}
                         onChange={(selected) => console.log(selected[0])}
              />
            </Fragment>
            <img className="mt-auto mb-2" src={iconCachedWhite} alt="..."/>

            <Typeahead
              value={this.props.searchItem}
              placeholder={this.props.error ? this.props.error : "куда"}
              options={this.options}
              onInputChange={this.setSearchItem}
            />
          </div>
        </form>
        <form className="form mt-5 w-100" action="input">
          <p className="ml-3">Дата</p>
          <div className="d-flex form-group m-3">
            <input className="col-sm form-control mr-4" type="date" onChange={(e) => console.log(e.currentTarget.value)}/>
            <input className="col-sm form-control" type="date" />
          </div>
        </form>
      </div>
    );
  };
};


export default FormMainPage;