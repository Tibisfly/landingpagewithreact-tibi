import React from "react";

export let Navbar = function() {
	return (
		<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>

			<div
				class="collapse navbar-collapse d-flex flex-row-reverse bd-highlight"
				id="navbarNavDropdown">
				<ul class="navbar-nav">
					<li class="nav-item active">
						<a class="nav-link" href="#">
							Home
							<span class="sr-only">(current)</span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							About
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Services
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
