import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import starwars from "../../img/icons8-la-guerra-de-las-galaxias-50.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	
	// console.log(store.favorites);
	return (
		<nav className="navbar sticky-top navbar-dark bg-dark mb-5 p-0">

			<div className="container">
				<div className="icon">
					<a className="navbar-brand ms-4 me-0" href="#">
						<img src={starwars} />
					</a>
				</div>

				{/* Likes (orange heart) dropdown button */}
				<div className="dropdown">
					<button className="btn btn-dark btn-sm dropdown-toggle position-relative" data-bs-auto-close="false" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
						<i className="fas fa-heart" style={{color: "#fca311"}}></i>

						{/* badge que muestra store.favorites.length */}
						{store.favorites.length > 0 && (
						<span className="position-absolute top-50 end-100 translate-middle rounded-pill badge border border-light text-bg-light">
							{store.favorites.length}
							<span className="visually-hidden"></span>
						</span>
						)}
					</button>
					
					{/* map de store.favorites para la lista del dropdown y empty en caso de ser 0 */}
					<ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
					{store.favorites.length === 0 ? (
						<li className="dropdown-item d-flex justify-content-between">Empty</li>
					) : (
					
						store.favorites.map((item, index) => (
							<li className="dropdown-item d-flex justify-content-between" key={index}>
								{item}
								<button type="button" onClick={() => actions.likes(item)} className="btn btn-sm ms-3 btn-outline-secondary">
									<i className="fas fa-trash"></i></button></li>
						))
						)}
						
						
					</ul>
				</div>
				
			</div>

		</nav>
	);
};
