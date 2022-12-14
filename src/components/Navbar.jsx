import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { getCitySearch } from '../services/ApiService';

function Navbar({ setCitySearch }) {
	const [value, setValue] = useState('');

	const searchWeather = async () => {
		if (value.length > 3) {
			await getCitySearch(value).then(res => setCitySearch(res.data[0]?.Key));
		} else {
			setCitySearch('');
		}
	};

	const getValue = e => {
		setValue(e.target.value);
	};

	const inputStyle = {
		height: '50px',
		background:
			'linear-gradient(116.79deg, rgba(255, 255, 255, 0.48) -41.94%, rgba(255, 255, 255, 0.12) 57.51%)',
		backdropFilter: 'blur(50px)',
		borderRadius: '20px',
		color: '#fff',
	};
	console.log(value);

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
					<InputGroup className='mb-3 text-light'>
						<Form.Control
							aria-label='Default'
							aria-describedby='inputGroup-sizing-default'
							style={inputStyle}
							placeholder='Georgia, Batumi'
							onChange={getValue}
							className='text-light'
						/>
					</InputGroup>
					<Button onClick={searchWeather}>Search Weather</Button>
				</Col>
			</Row>
		</>
	);
}

export default Navbar;
