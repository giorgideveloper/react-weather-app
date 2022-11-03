import React from 'react';
import { Col, Row } from 'react-bootstrap';
import fiveDayIcon from '../assets/img/fiveDayIcon.svg';

function ForecastFiveDays() {
	return (
		<>
			{' '}
			<Row className='pt-3 pb-5 justify-content-center text-center text-light'>
				<Col md={2}>
					<div
						style={{
							width: '100%',
							height: '230px',
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
							24°C
						</p>
						<img style={{ paddingTop: '5px' }} src={fiveDayIcon} alt='' />
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
				</Col>{' '}
			</Row>
		</>
	);
}

export default ForecastFiveDays;
