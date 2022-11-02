import './App.css';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import ForecastFiveDays from './components/ForecastFiveDays';
import ForecastToday from './components/ForecastToday';

function App() {
	return (
		<div className='App'>
			<Container>
				<Navbar />
				<ForecastToday />
				<ForecastFiveDays />
			</Container>
		</div>
	);
}

export default App;
