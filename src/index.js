import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';

import { App } from './components/app/App';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>,
	document.getElementById('root')
	);

serviceWorker.unregister();