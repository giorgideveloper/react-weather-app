import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { getCurrentCondition } from '../services/ApiService';
import { format } from 'date-fns';

function ForecastToday({ citySearch }) {
	const [weather, setWeather] = useState('');

	const currentWeather = key => {
		getCurrentCondition(key).then(res => setWeather(res.data[0]));
	};

	useEffect(() => {
		if (citySearch) {
			currentWeather(citySearch);
		}
	}, [citySearch]);

	format(new Date(2014, 1, 11), 'MM/dd/yyyy');
	return (
		<>
			<Row className='justify-content-center' style={{ marginTop: '60px' }}>
				<Col md={4} offset-md={2}>
					<div
						className='justify-content-center d-flex text-light'
						style={{ fontSize: '150px' }}
					>
						<span>
							{weather?.Temperature?.Metric?.Value &&
								(weather?.Temperature?.Metric?.Value).toFixed(0)}
						</span>
						<span style={{ fontSize: '30px', marginTop: '40px' }}>°C</span>{' '}
					</div>
				</Col>
				{weather?.WeatherIcon && (
					<Col md={3}>
						<img
							src={`https://developer.accuweather.com/sites/default/files/${
								weather?.WeatherIcon > 9
									? weather?.WeatherIcon
									: `0${weather?.WeatherIcon}`
							}-s.png`}
							width='100%'
							alt='weather icon'
						/>
					</Col>
				)}
			</Row>
			<Row>
				<Col md={3} offset-md={1}></Col>
				<Col md={8} className='text-light '>
					{' '}
					<div className='d-flex gap-5 align-items-center'>
						<p style={{ fontSize: '30px' }}>17th Jun ‘21</p>
						<p style={{ fontSize: '20px' }}>Thrusday 2:45 am</p>
						{weather?.WeatherText && (
							<p style={{ fontSize: '20px' }}>{weather?.WeatherText}</p>
						)}
					</div>
				</Col>
			</Row>
		</>
	);
}

export default ForecastToday;
