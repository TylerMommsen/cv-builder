import PropTypes from 'prop-types';

const EducationInfo = ({ educationInfo, setEducationInfo }) => {
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEducationInfo({ ...educationInfo, [name]: value });
	};

	return (
		<div className="section">
			<h2 className="section-title">Educational Experience</h2>
			<form>
				<label>
					<p className="label-text">School Name</p>
					<input
						type="text"
						name="schoolName"
						value={educationInfo.schoolName}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					<p className="label-text">Title Of Study</p>
					<input
						type="text"
						name="titleOfStudy"
						value={educationInfo.titleOfStudy}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					<p className="label-text">Date Of Study</p>
					<input
						type="date"
						name="dateOfStudy"
						value={educationInfo.dateOfStudy}
						onChange={handleInputChange}
					/>
				</label>
			</form>
		</div>
	);
};

EducationInfo.propTypes = {
	educationInfo: PropTypes.shape({
		schoolName: PropTypes.string,
		titleOfStudy: PropTypes.string,
		dateOfStudy: PropTypes.string,
	}),
	setEducationInfo: PropTypes.func.isRequired,
};

export default EducationInfo;
