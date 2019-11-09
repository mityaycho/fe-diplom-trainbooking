import React, {Fragment} from 'react';
import iconCachedWhite from '../images/icon_cached_white.png';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import {Typeahead} from 'react-bootstrap-typeahead';
import {NavLink} from "react-router-dom";

const FormMainPage = (props) => {
  console.log(props)

  const options = props.dataCities.map(el => el.name);

  return (
    <div className="section-header-form col-lg-6">
      <div className="row mt-5">
        <form className="form mt-5 w-100" action="input">
          <p className="ml-3">Направление</p>
          <div className="d-flex form-group m-3 justify-content-center">
            <Fragment>
              <Typeahead value={props.value}
                         placeholder={props.dataCities.error ? props.dataCities.error : "откуда"}
                         options={options}
                         onInputChange={props.setEvent}
                         onChange={props.setWhereFromName}
              />
            </Fragment>
            <img className="mt-auto mb-2" src={iconCachedWhite} alt="..."/>

            <Typeahead
              value={props.searchItem}
              placeholder={props.dataCities.error ? props.dataCities.error : "куда"}
              options={options}
              onInputChange={props.setEvent}
              onChange={props.setWhereToName}
            />
          </div>
        </form>
        <form className="form mt-5 w-100" action="input">
          <p className="ml-3">Дата</p>
          <div className="d-flex form-group m-3">
            <input className="col-sm form-control mr-4"
                   type="date"
                   onChange={props.setWhereFromDate}/>
            <input className="col-sm form-control"
                   type="date"
                   onChange={props.setWhereToDate}/>
          </div>
        </form>
      </div>
      <div className="text-right ml-4">
        <NavLink className="btn btn-warning mt-5 col-lg-6"
                 to="/search_tickets"
                 type="button"
        onClick={props.saveMainState}>найти билеты</NavLink>
      </div>
    </div>
  );
};


export default FormMainPage;