import '../styles/section.css';
import PropTypes from 'prop-types';

const PersonalInfo = ({ personalInfo, setPersonalInfo }) => {
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setPersonalInfo({ ...personalInfo, [name]: value });
	};

	return (
		<div className="section">
			<h2 className="section-title">Personal Information</h2>
			<form>
				<label>
					<p className="label-text">Full Name</p>
					<input
						type="text"
						name="fullName"
						value={personalInfo.fullName}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					<p className="label-text">Email</p>
					<input
						type="email"
						name="email"
						value={personalInfo.email}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					<p className="label-text">Phone Number</p>
					<input
						type="number"
						name="phoneNumber"
						value={personalInfo.phoneNumber}
						onChange={handleInputChange}
					/>
				</label>
			</form>
		</div>
	);
};

PersonalInfo.propTypes = {
	personalInfo: PropTypes.shape({
		fullName: PropTypes.string,
		email: PropTypes.string,
		phoneNumber: PropTypes.string,
	}),
	setPersonalInfo: PropTypes.func.isRequired,
};

export default PersonalInfo;
