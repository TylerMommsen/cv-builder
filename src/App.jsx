import PersonalInfo from './components/PersonalInfo';
import EducationInfo from './components/EducationInfo';
import PracticalExpInfo from './components/PracticalExpInfo';
import DisplayCV from './components/DisplayCV';
import './styles/index.css';

function App() {
	return (
		<div className="app">
			<div className="input-sections">
				<PersonalInfo />
				<EducationInfo />
				<PracticalExpInfo />
			</div>

			<div className="display-cv-section">
				<DisplayCV />
			</div>
		</div>
	);
}

export default App;
