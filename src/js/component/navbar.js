import React from "react";

export let Navbar = function() {
	return (
		<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>

			<div
				className="collapse navbar-collapse d-flex flex-row-reverse bd-highlight"
				id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home
							<span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
