import PersonalInfo from './components/PersonalInfo';
import EducationInfo from './components/EducationInfo';
import PracticalExpInfo from './components/PracticalExpInfo';
import DisplayCV from './components/DisplayCV';
import './styles/index.css';
import { useState } from 'react';

function App() {
	const [personalInfo, setPersonalInfo] = useState({
		fullName: '',
		email: '',
		phoneNumber: '',
	});
	const [educationInfo, setEducationInfo] = useState({
		schoolName: '',
		titleOfStudy: '',
		dateOfStudy: '',
	});
	const [practicalExpInfo, setPracticalExpInfo] = useState({
		companyName: '',
		positionTitle: '',
		mainResponsibilities: '',
		dateStarted: '',
		dateFinished: '',
	});

	return (
		<div className="app">
			<div className="input-sections">
				<PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
				<EducationInfo educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
				<PracticalExpInfo
					practicalExpInfo={practicalExpInfo}
					setPracticalExpInfo={setPracticalExpInfo}
				/>
			</div>

			<div className="display-cv-section">
				<DisplayCV
					personalInfo={personalInfo}
					educationInfo={educationInfo}
					practicalExpInfo={practicalExpInfo}
				/>
			</div>
		</div>
	);
}

export default App;
