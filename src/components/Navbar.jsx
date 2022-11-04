import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { getCitySearch } from '../services/ApiService';

function Navbar({ setCitySearch }) {
	const searchWeather = async e => {
		if (e.target.value.length > 3) {
			await getCitySearch(e.target.value).then(res =>
				setCitySearch(res.data[0]?.Key)
			);
		} else {
			setCitySearch('');
		}
	};

	const inputStyle = {
		height: '50px',
		background:
			'linear-gradient(116.79deg, rgba(255, 255, 255, 0.48) -41.94%, rgba(255, 255, 255, 0.12) 57.51%)',
		backdropFilter: 'blur(50px)',
		borderRadius: '20px',
		color: '#fff',
	};

	return (
		<>
			<Row className='justify-content-between pt-3'>
				<Col md={3}>
					<Form>
						<Form.Check
							type='switch'
							id='custom-switch'
							className='fs-4 text-light'
							label='F/C'
						/>
					</Form>
				</Col>
				<Col md={4}>
					<InputGroup className='mb-3'>
						<Form.Control
							aria-label='Default'
							aria-describedby='inputGroup-sizing-default'
							style={inputStyle}
							placeholder='Georgia, Batumi'
							onChange={searchWeather}
						/>
					</InputGroup>
				</Col>
			</Row>
		</>
	);
}

export default Navbar;
