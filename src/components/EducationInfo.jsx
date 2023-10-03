const EducationInfo = () => {
	return (
		<div className="section">
			<h2 className="section-title">Educational Experience</h2>
			<form>
				<label>
					<p className="label-text">School Name</p>
					<input type="text"></input>
				</label>
				<label>
					<p className="label-text">Title Of Study</p>
					<input type="text"></input>
				</label>
				<label>
					<p className="label-text">Date Of Study</p>
					<input type="date"></input>
				</label>
			</form>
		</div>
	);
};

export default EducationInfo;
