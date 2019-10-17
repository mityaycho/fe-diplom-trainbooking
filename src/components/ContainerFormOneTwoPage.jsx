import React from 'react';
import iconCachedWhite from "../images/icon_cached_white.png";


const ContainerFormOneTwoPage = () => {
  return (
    <div className="row mt-5">
      <form className="form mt-5 w-100" action="input">
        <p className="ml-3">Направление</p>
        <div className="d-flex form-group m-3">
          <input className="col-sm form-control" type="text" placeholder="откуда" />
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

export default ContainerFormOneTwoPage;