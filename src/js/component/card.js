import React from "react";
import PropTypes from "prop-types";
import Link from "react-router-dom";

export function Card(props) {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-3">
					<div className="wrapperCard">
						<div className="card">
							<img
								src={props.urlImg}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title text-center">
									<i>
										<strong>{props.title}</strong>
									</i>
								</h5>
								<p className="card-text">{props.textCard}</p>
								{/* <Link
									to=
									type="button"
									className="btn btn-outline-secondary">
									Lets check it out together!
								</Link> */}
								{/* <Link to={props.buttonCard}>
									<span>Lets check it out together!</span>
								</Link> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	urlImg: PropTypes.string,
	title: PropTypes.string,
	textCard: PropTypes.string,
	buttonCard: PropTypes.string
};
