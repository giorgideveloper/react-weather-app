import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://dataservice.accuweather.com',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

const apikey = 'rGWJtckgHsXDmepWmmvntXveFLXAUUmK';

const getCitySearch = q =>
	instance.get('/locations/v1/cities/search', { params: { apikey, q } });
const getCurrentCondition = key =>
	instance.get(`/currentconditions/v1/${key}`, { params: { apikey } });
const getIpAddress = () => axios.get('https://ipapi.co/json');
const getCityFromIpAddress = q =>
	instance.get('/locations/v1/cities/ipaddress/search', {
		params: { apikey, q },
	});
const getFiveDayForecast = (key, metric) =>
	instance.get(`/forecasts/v1/daily/5day/${key}`, {
		params: { apikey, metric },
	});

export {
	getCitySearch,
	getCurrentCondition,
	getIpAddress,
	getCityFromIpAddress,
	getFiveDayForecast,
};
