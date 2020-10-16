import React from "react";

export function Card() {
	return (
		<div className="wrapperCard">
			<div className="card">
				<img src={props.cardImage} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p clasclassNames="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
		</div>
	);
}
