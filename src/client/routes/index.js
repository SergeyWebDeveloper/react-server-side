import React from 'react';
import App from '../containers/App';
import HomePage from '../page/HomePage';
import InfoPage from '../page/InfoPage';
import NotFound from '../page/NotFound';

export const routes = [
	{
		...App,
		routes: [
			{
				...HomePage,
				path: '/',
				exact: true
			},
			{
				...InfoPage,
				path: '/info'
			},
			{
				...NotFound
			}
		]
	}
];
