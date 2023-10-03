const DisplayCV = () => {
	return (
		<div className="cv-display">
			<h2 className="cv-title">CV</h2>

			<div className="cv-display-sections">
				<div className="cv-section">
					<p className="label-text">Full Name: </p>
					<p className="label-text">Email: </p>
					<p className="label-text">Phone Number: </p>
				</div>

				<div className="cv-section">
					<p className="label-text">School Name: </p>
					<p className="label-text">Title Of Study: </p>
					<p className="label-text">Date Of Study: </p>
				</div>

				<div className="cv-section">
					<p className="label-text">Company Name: </p>
					<p className="label-text">Position Title: </p>
					<p className="label-text">Main Responsibilities: </p>
					<p className="label-text">Date Started: </p>
					<p className="label-text">Date Finished: </p>
				</div>
			</div>
		</div>
	);
};

export default DisplayCV;
