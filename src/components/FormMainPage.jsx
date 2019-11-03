import React from 'react';
import iconCachedWhite from "../images/icon_cached_white.png";


const FormMainPage = (props) => {
  const dataCities = props.dataCities.map(el => <option key={el.id}>{el.name}</option>);
  console.log(props.currentValueCities)
  return (
    <div className="row mt-5">
      <form className="form mt-5 w-100" action="input">
        <p className="ml-3">Направление</p>
        <div className="d-flex form-group m-3">
          <select class="col-sm form-control">
          <input className="col-sm form-control" key={dataCities.id}
                 value={dataCities.name} type="text" placeholder="откуда" />
            {dataCities}
          </select>
          <img className="mt-auto mb-2" src={iconCachedWhite} alt="..."/>
          <input className="col-sm form-control" type="text" placeholder="куда" />
        </div>
      </form>
      <form className="form mt-5 w-100" action="input">
        <p className="ml-3">Дата</p>
        <div className="d-flex form-group m-3">
          <input className="col-sm form-control mr-4" type="date" placeholder="дд/мм/гг" />
          <input className="col-sm form-control" type="date" placeholder="дд/мм/гг" />
        </div>
      </form>
    </div>
  );
};


export default FormMainPage;