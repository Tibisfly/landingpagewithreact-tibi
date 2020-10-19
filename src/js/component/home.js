import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

export function Home(props) {
	return (
		<div className="container-fluid">
			<Navbar />

			<Jumbotron title="A Warming Welcome!" />

			<Card />

			<p className="text-center">
				Made by <a href="http://www.4geeksacademy.com">Tibi</a>, with
				love!
			</p>
			<p className="text-center">
				<img src={rigoImage} />
			</p>

			<Footer />
		</div>
	);
}
