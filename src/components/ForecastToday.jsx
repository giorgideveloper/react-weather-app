import React from 'react';
import { Col, Row } from 'react-bootstrap';

function ForecastToday() {
	return (
		<>
			<Row className=''>
				<Col md={12}>
					<div
						className='justify-content-center d-flex'
						style={{ marginTop: '150px', fontSize: '100px' }}
					>
						27 <span>°C</span>{' '}
					</div>
				</Col>
			</Row>
		</>
	);
}

export default ForecastToday;
