import React from "react";
import PropTypes from "prop-types";
import Link from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
								</Link> Intenté instalar varias actualizacions de react (creo que era el error que me estaba dando al intentar utilizar el Link) y no pude, por eso utilicé el <a/> con rel="noopener noreferrer"*/}
								<a
									href={props.buttonCard}
									className="btn btn-primary"
									rel="noopener noreferrer">
									Go somewhere
								</a>
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
