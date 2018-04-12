import 'babel-polyfill';
import express from 'express';
import htmlContent from './renderTemplate';
import {store} from './store';
import {matchRoutes} from 'react-router-config';
import {routes} from './client/routes';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {

	const promises = matchRoutes(routes,req.path).map(({route})=>{
		return route.loadData ? route.loadData(store,req) : null;
	});
	Promise.all(promises).then(() => {
		const context = {};
		const content = htmlContent(req,store,context);
		res.send(content);
	});
});

app.listen(3000, () => {
	console.log('Listening port 3000')
});