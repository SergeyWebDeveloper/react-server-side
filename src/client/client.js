import 'babel-polyfill';
import React from 'react';
import {hydrate} from 'react-dom';
import {renderRoutes} from 'react-router-config';
import {routes} from './routes';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store = createStore(
	reducers,
	window.INITIAL_STATE,
	composeWithDevTools(applyMiddleware(thunk))
);

hydrate(
	<Provider store={store}>
		<BrowserRouter>
			{renderRoutes(routes)}
		</BrowserRouter>
	</Provider>, document.getElementById('root'));
