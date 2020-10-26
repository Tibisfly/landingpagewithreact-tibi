import React from "react";

//create your first component
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

export function Home(props) {
	return (
		<div className="container">
			<Navbar />

			<Jumbotron
				title="Live the present"
				urlJumbutton="https://www.ted.com/talks/olivia_remes_how_to_cope_with_anxiety"
			/>

			<div className="contenedor container d-flex">
				<Card
					urlImg="https://cdn.powerofpositivity.com/wp-content/uploads/2014/12/meditate-meditation-sunset-1200x846.jpg"
					title="Meditation"
					textCard="Mantra meditation has been practiced in India for thousands of years because people knew that it reduces stress, calms the mind and increases inner peace. Click the button below to start a 21-day guided meditation for beginners"
					buttonCard="https://www.youtube.com/watch?v=Q_v5NP5DdBE&list=PLC7DackXX5HNlFjUM7Z0SENwC2ZJpcxgR"
				/>
				<Card
					urlImg="https://www.ift.org/-/media/news-and-publications/by-topic/foodhealthnutrition.jfif"
					title="Eat Healthy"
					textCard="When was the last time you truly appreciated a meal? It’s understandable. Your life is busy, and as a result, eating has become something done in passing. I encourage you to try slowing down, making food yourself, and eating purposefully. Choose live foods with a variety of different colors, textures, and flavors. Click for an interesting TED Talk about Mindful Eating"
					buttonCard="https://youtu.be/CtOU4f3smt4"
				/>
				<Card
					urlImg="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/assets/2019/06/18-06-2019-Yoga-ahmed-soliman-1.jpg/image1024x768.jpg"
					title="Move your body"
					textCard="Move your body. Exercising once a day (going for a walk, jogging, going to the gym or doing yoga) will make a difference, have a time for yourself and be with your body, release the daily rush. Click for Yoga For Beginners (7 days of challenge)"
					buttonCard="https://youtu.be/G_a4rPURiCY"
				/>
				<Card
					urlImg="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*"
					title="Connect with nature"
					textCard="Being in contact with nature has been shown to reduce stress, boost your immune system, increase your concentration, and make you happy. You could do this daily by visiting the nearest park or even having plants in your home, jus do it AWARENESS"
					buttonCard="https://www.ted.com/playlists/398/reconnect_with_nature"
				/>
			</div>
			<p className="text-center">
				Made by <a href="http://www.4geeksacademy.com">Tibi</a>, with
				love!
			</p>
			<Footer />
		</div>
	);
}
