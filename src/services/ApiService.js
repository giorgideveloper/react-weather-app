import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://dataservice.accuweather.com',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

const apikey = 'Pq59arhPTj6vchkubxAch37i3IXaYCkD';

const getCitySearch = q =>
	instance.get('/locations/v1/cities/search', { params: { apikey, q } });

export { getCitySearch };
