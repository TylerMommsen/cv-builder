import PropTypes from 'prop-types';

const PracticalExpInfo = ({ practicalExpInfo, setPracticalExpInfo }) => {
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setPracticalExpInfo({ ...practicalExpInfo, [name]: value });
	};

	return (
		<div className="section">
			<h2 className="section-title">Practical Experience</h2>
			<form>
				<label>
					<p className="label-text">Company Name</p>
					<input
						type="text"
						name="companyName"
						value={practicalExpInfo.companyName}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					<p className="label-text">Position Title</p>
					<input
						type="text"
						name="positionTitle"
						value={practicalExpInfo.positionTitle}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					<p className="label-text">Main Responsibilities</p>
					<input
						type="text"
						name="mainResponsibilities"
						value={practicalExpInfo.mainResponsibilities}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					<p className="label-text">Date Started</p>
					<input
						type="date"
						name="dateStarted"
						value={practicalExpInfo.dateStarted}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					<p className="label-text">Date Finished</p>
					<input
						type="date"
						name="dateFinished"
						value={practicalExpInfo.dateFinished}
						onChange={handleInputChange}
					/>
				</label>
			</form>
		</div>
	);
};

PracticalExpInfo.propTypes = {
	practicalExpInfo: PropTypes.shape({
		companyName: PropTypes.string,
		positionTitle: PropTypes.string,
		mainResponsibilities: PropTypes.string,
		dateStarted: PropTypes.string,
		dateFinished: PropTypes.string,
	}),
	setPracticalExpInfo: PropTypes.func.isRequired,
};

export default PracticalExpInfo;
