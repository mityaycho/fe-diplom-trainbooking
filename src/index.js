import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {App} from './components/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./bll/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));

serviceWorker.unregister();