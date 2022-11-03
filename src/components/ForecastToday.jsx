import React from 'react';
import { Col, Row } from 'react-bootstrap';
import WeatherIcon from '../assets/img/weather-icon.png';

function ForecastToday() {
	return (
		<>
			<Row className='justify-content-center' style={{ marginTop: '150px' }}>
				<Col md={4} offset-md={2}>
					<div
						className='justify-content-center d-flex text-light'
						style={{ fontSize: '150px' }}
					>
						<span>27</span>
						<span style={{ fontSize: '30px', marginTop: '40px' }}>°C</span>{' '}
					</div>
				</Col>
				<Col md={3}>
					<img src={WeatherIcon} width='100%' alt='weather icon' />
				</Col>
				<Col md={12} className='text-light '>
					{' '}
					<div className=''>
						<p style={{ fontSize: '30px' }}>17th Jun ‘21</p>
						<p style={{ fontSize: '20px' }}>Thrusday 2:45 am</p>
					</div>
					<p>Wind 10 km/h Hum 54 % Rain 0.2 %</p>
				</Col>
			</Row>
		</>
	);
}

export default ForecastToday;
