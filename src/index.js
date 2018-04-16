import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';
import App from './App';

import './libs/keact/css/normalize.css'
import './libs/keact/css/flex.css'
import './libs/keact/css/common.css'
import './style.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
    <ConnectedRouter history={history}>
			<App />
    </ConnectedRouter>
  </Provider>,
	document.getElementById('root'));

	registerServiceWorker();
