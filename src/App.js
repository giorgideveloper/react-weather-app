import './App.css';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import ForecastFiveDays from './components/ForecastFiveDays';
import ForecastToday from './components/ForecastToday';
import { useEffect, useState } from 'react';
import { getCityFromIpAddress, getIpAddress } from './services/ApiService';

function App() {
	const [citySearch, setCitySearch] = useState('');

	useEffect(() => {
		if (!citySearch) {
			getIpAddress().then(res => {
				getCityFromIpAddress(res.data.ip).then(city =>
					setCitySearch(city.data.Key)
				);
			});
		}
	}, [citySearch]);
	return (
		<div className='App'>
			<Container>
				<Navbar setCitySearch={setCitySearch} />
				<ForecastToday citySearch={citySearch} />
				<ForecastFiveDays citySearch={citySearch} />
			</Container>
		</div>
	);
}

export default App;
