import React from "react";

export function Jumbotron(props) {
	return (
		<div className="jumbotron text-justify">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">
				Contrary to popular belief, Lorem Ipsum is not simply random
				text. It has roots in a piece of classical Latin literature from
				45 BC, making it over 2000 years old.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to action!
			</a>
		</div>
	);
}
