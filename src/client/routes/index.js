import React from 'react';
import App from '../containers/App';
import Test from '../page/Test';

export const routes = [
	{
		...App,
		routes: [
			{
				...Test,
				path: '/test'
			}
		]
	}
];

