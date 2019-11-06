import React, {Fragment} from 'react';
import iconCachedWhite from "../images/icon_cached_white.png";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import {Typeahead} from 'react-bootstrap-typeahead';


const FormMainPage = (props) => {
  const dataCities = props.dataCities.map(el => <option key={el.id}>{el.name}</option>);
  const setSearchItem = (e) => props.setSearchItem(e.currentTarget.value);
  const options = props.dataCities.map(el => el.name);

  return (
    <div className="row mt-5">
      <form className="form mt-5 w-100" action="input">
        <p className="ml-3">Направление</p>
        <div className="d-flex form-group m-3">
          <Fragment>
            <Typeahead key={dataCities.id}
                       value={props.searchItem}
                       placeholder="откуда"
                       options={options}
                       onChange={setSearchItem}/>
          </Fragment>

          <select className="col-sm form-control">
            {dataCities}
          </select>
          <img className="mt-auto mb-2" src={iconCachedWhite} alt="..."/>

          <input className="col-sm form-control"
                 type="text"
                 placeholder="куда"
                 key={dataCities.id}
                 value={props.searchItem}
                 onChange={setSearchItem}/>
        </div>
      </form>
      <form className="form mt-5 w-100" action="input">
        <p className="ml-3">Дата</p>
        <div className="d-flex form-group m-3">
          <input className="col-sm form-control mr-4" type="date" placeholder="дд/мм/гг"/>
          <input className="col-sm form-control" type="date" placeholder="дд/мм/гг"/>
        </div>
      </form>
    </div>
  );
};


export default FormMainPage;