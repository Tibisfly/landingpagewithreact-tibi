import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

export function Home(props) {
	let myCardsArray = [
		{
			src:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7lWHi3VMn5X78uJH5FMqKrnyQ7Fb8vLKt2w&usqp=CAU",
			text: "Prueba 1"
		},
		{
			src:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzvIUbKcfOv5WH1RLxcq_Z9FPE38h0pXjEgw&usqp=CAU",
			text: "Prueba 1"
		},
		{
			src:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7Vh0jU3tQOo0t9_BEAfS_ztfN4-RsyXj-_g&usqp=CAU",
			text: "Prueba 1"
		},
		{
			src:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDwgWJoRxJOdrMhD_rJRGgTow3uvE3ZryOTA&usqp=CAU",
			text: "Prueba 1"
		}
	];

	return (
		<div className="container-fluid">
			<Navbar />

			<Jumbotron title="A Warming Welcome!" />

			<Card cards={myCardsArray} />

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
