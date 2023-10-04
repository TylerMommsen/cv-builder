import PropTypes from 'prop-types';

const DisplayCV = ({ personalInfo, educationInfo, practicalExpInfo }) => {
	return (
		<div className="cv-display">
			<div className="cv-title">
				<h2>CV</h2>
			</div>

			<div className="cv-display-sections">
				<div className="cv-section">
					<div className="cv-section-title">Personal Info</div>
					<div className="section-info">
						<p className="label-text">Full Name: {personalInfo.fullName}</p>
						<p className="label-text">Email: {personalInfo.email}</p>
						<p className="label-text">Phone Number: {personalInfo.phoneNumber}</p>
					</div>
				</div>

				<div className="cv-section">
					<div className="cv-section-title">Education</div>
					<div className="section-info">
						<p className="label-text">School Name: {educationInfo.schoolName}</p>
						<p className="label-text">Title Of Study: {educationInfo.titleOfStudy}</p>
						<p className="label-text">Date Of Study: {educationInfo.dateOfStudy}</p>
					</div>
				</div>

				<div className="cv-section">
					<div className="cv-section-title">Practical Experience</div>
					<div className="section-info">
						<p className="label-text">Company Name: {practicalExpInfo.companyName}</p>
						<p className="label-text">Position Title: {practicalExpInfo.positionTitle}</p>
						<p className="label-text">
							Main Responsibilities: {practicalExpInfo.mainResponsibilities}
						</p>
						<p className="label-text">Date Started: {practicalExpInfo.dateStarted}</p>
						<p className="label-text">Date Finished: {practicalExpInfo.dateFinished}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

DisplayCV.propTypes = {
	personalInfo: PropTypes.shape({
		fullName: PropTypes.string,
		email: PropTypes.string,
		phoneNumber: PropTypes.string,
	}),
	educationInfo: PropTypes.shape({
		schoolName: PropTypes.string,
		titleOfStudy: PropTypes.string,
		dateOfStudy: PropTypes.string,
	}),
	practicalExpInfo: PropTypes.shape({
		companyName: PropTypes.string,
		positionTitle: PropTypes.string,
		mainResponsibilities: PropTypes.string,
		dateStarted: PropTypes.string,
		dateFinished: PropTypes.string,
	}),
};

export default DisplayCV;
