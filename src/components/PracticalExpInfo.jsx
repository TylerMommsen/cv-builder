const PracticalExpInfo = () => {
	return (
		<div className="section">
			<h2 className="section-title">Practical Experience</h2>
			<form>
				<label>
					<p className="label-text">Company Name</p>
					<input type="text"></input>
				</label>
				<label>
					<p className="label-text">Position Title</p>
					<input type="text"></input>
				</label>
				<label>
					<p className="label-text">Main Responsibilities</p>
					<input type="text"></input>
				</label>
				<label>
					<p className="label-text">Date Started</p>
					<input type="date"></input>
				</label>
				<label>
					<p className="label-text">Date Finished</p>
					<input type="date"></input>
				</label>
			</form>
		</div>
	);
};

export default PracticalExpInfo;
