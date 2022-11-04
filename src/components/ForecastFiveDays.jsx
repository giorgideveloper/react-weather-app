import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import fiveDayIcon from '../assets/img/fiveDayIcon.svg';
import { getFiveDayForecast } from '../services/ApiService';

function ForecastFiveDays({ citySearch }) {
	const [data, setData] = useState([]);

	useState(() => {
		if (citySearch)
			getFiveDayForecast(citySearch, true).then(res =>
				setData(res.data.DailyForecasts)
			);

		return () => setData([]);
	}, [citySearch]);
	console.log(data);

	return (
		<>
			{' '}
			<Row className='pt-5 pb-5 justify-content-center text-center text-light'>
				{data.length > 0 &&
					data.map((weather, index) => (
						<Col key={index} md={2}>
							<div
								style={{
									width: '100%',
									height: '260px',
									background: 'rgba(255, 255, 255, 0.2)',
								}}
							>
								{' '}
								<p
									style={{
										paddingTop: '20px',
										fontSize: '24px',
										fontWeight: 'bold',
									}}
								>
									{weather?.Temperature?.Maximum?.Value &&
										(weather?.Temperature?.Maximum?.Value).toFixed(0)}
									°C
								</p>
								{weather?.Day?.Icon && (
									<img
										style={{ paddingTop: '5px' }}
										width='100%'
										src={`https://developer.accuweather.com/sites/default/files/${
											weather?.Day?.Icon > 9
												? weather?.Day?.Icon
												: `0${weather?.Day?.Icon}`
										}-s.png`}
										alt=''
									/>
								)}
								<p
									style={{
										paddingTop: '10px',
										fontSize: '24px',
										fontWeight: 'bold',
									}}
								>
									Fri
								</p>
							</div>
						</Col>
					))}
			</Row>
		</>
	);
}

export default ForecastFiveDays;
