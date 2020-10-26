import React from "react";
import PropTypes from "prop-types";

export function Jumbotron(props) {
	return (
		<>
			<div className="jumbotron text-justify bg-cover">
				<h1 className="display-4">{props.title}</h1>
				<p className="lead">
					When your mind and heart are truly open abundance will flow
					to you effortlessly and easily. Click "Call to action" for
					know a bit more of this 21st century disease
				</p>
				<a
					className="btn btn-light btn-lg"
					target="_blank"
					href={props.urlJumbutton}
					role="button">
					Call to action!
				</a>
			</div>
			<div className="alert alert-secondary">
				<strong>
					In this landpage you can find four mechanisms to learn how
					to live in the present for reduce stress and anxiety from
					day to day
				</strong>
			</div>
		</>
	);
}

Jumbotron.propTypes = {
	title: PropTypes.string,
	urlJumbutton: PropTypes.string
};
