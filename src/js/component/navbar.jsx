import React from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/icons8-la-guerra-de-las-galaxias-50.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark m-0 p-0">

			<div className="container">
				<div className="icon">
					<a className="navbar-brand ms-4 me-0" href="#">
						<img src={starwars} />
					</a>
				</div>
				<div className="dropdown">
					<button className="btn btn-dark btn-sm dropdown-toggle border border-2 border-white" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
					<i className="fas fa-heart" style={{color: "#fca311"}}></i>
						
					</button>
					<ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
						<li><a className="dropdown-item" href="#">Likes</a></li>
						
					</ul>
				</div>
				
			</div>

		</nav>
	);
};
