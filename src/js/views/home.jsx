import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Carrousel from "../component/carrousel.jsx";

export const Home = () => {
	
	return(
	<div className="container">

		<Carrousel type="characters" />
		<Carrousel type="planets" />
		<Carrousel type="vehicles" />
	</div>

	);
}
