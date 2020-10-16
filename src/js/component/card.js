import React from "react";

export function Card(props) {
	return (
		<div className="wrapperCard">
			<div className="card">
				<img
					src={props.myCardsArray[0].src}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p clasclassNames="card-text">
						{props.myCardsArray[0].text}
					</p>
					<a href="#" className="btn btn-primary">
						Find out more!
					</a>
				</div>
			</div>
		</div>
	);
}
