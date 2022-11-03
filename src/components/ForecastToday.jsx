import React from 'react';
import { Col, Row } from 'react-bootstrap';
import WeatherIcon from '../assets/img/weather-icon.png';
import icon1 from '../assets/img/icon1.svg';
import icon2 from '../assets/img/icon2.svg';
import icon3 from '../assets/img/icon3.svg';

function ForecastToday() {
	return (
		<>
			<Row className='justify-content-center' style={{ marginTop: '60px' }}>
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
			</Row>
			<Row>
				<Col md={3} offset-md={1}></Col>
				<Col md={8} className='text-light '>
					{' '}
					<div className=''>
						<p style={{ fontSize: '30px' }}>17th Jun ‘21</p>
						<p style={{ fontSize: '20px' }}>Thrusday 2:45 am</p>
					</div>
				</Col>
			</Row>
			<Row>
				<Col md={12} className='justify-content-center d-flex'>
					<Col md={6}>
						{' '}
						<ul
							style={{ listStyle: 'none' }}
							className='d-flex justify-content-between text-light'
						>
							<li className=''>
								{' '}
								<img src={icon3} alt='Wind' /> Wind 10 km/h
							</li>
							<li className='border-start ps-5 border-end pe-5'>
								{' '}
								<img src={icon2} alt='Hum' /> Hum 54k %
							</li>
							<li>
								{' '}
								<img src={icon1} alt='Rain' /> Rain %
							</li>
						</ul>
					</Col>
				</Col>
			</Row>
		</>
	);
}

export default ForecastToday;
