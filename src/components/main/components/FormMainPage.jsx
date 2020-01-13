import React, {Fragment} from 'react';
import iconCachedWhite from '../../../images/icon_cached_white.png';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import {Typeahead} from 'react-bootstrap-typeahead';
import {NavLink} from 'react-router-dom';

const FormMainPage = (props) => {

	const options = props.dataCities.map(el => el.name);

  return (
    <div className="header-section">
      <div className="container section-header text-white animated zoomInDow">
        <div className="row">
          <div className="section-header-text col-lg-6 pl-5">
            <h1 className="display-4">Вся жизнь -</h1>
            <h1 className="display-4 font-weight-bold">путешествие!</h1>
          </div>
          <div className="section-header-form col-lg-6">
            <div className="row mt-5">
              <form className="form mt-5 w-100">
                <p className="ml-3">Направление</p>
                <div className="d-flex form-group m-3 justify-content-center">
                  <Fragment>
                    <Typeahead value={props.value}
															 placeholder={props.dataCities.error ? props.dataCities.error : "откуда"}
															 id="whereFromCity"
                               options={options}
                               onInputChange={props.setEvent}
															 onChange={props.setWhereFromCity}
                    />
                  </Fragment>
                  <img className="mt-auto mb-2" src={iconCachedWhite} alt="..."/>

                  <Typeahead
                    value={props.searchItem}
										placeholder={props.dataCities.error ? props.dataCities.error : "куда"}
										id="whereToCity"
                    options={options}
                    onInputChange={props.setEvent}
										onChange={props.setWhereToCity}
                  />
                </div>
              </form>
              <form className="form mt-5 w-100">
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
        </div>
      </div>
      <div className="header-bottom-line"></div>
    </div>
  );
};


export default FormMainPage;