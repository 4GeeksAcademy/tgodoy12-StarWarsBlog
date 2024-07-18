import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { type, theid } = useParams();
	const [ item, setItem ] = useState(null);

	//busqueda por type(character, planets or vehicles) y por id
	useEffect(() => {
		const foundItem = store[type]?.find(item => item.id == theid);
        if (foundItem) {
            setItem(foundItem);
        }
	}, []);

	if (!item) {
        return <div>Loading...</div>;
    }



	
	return (
		
		<div className="container my-5">
			<Link to="/">
				<button className="btn btn-light mb-5" role="button">
					<i className="fas fa-long-arrow-alt-left"></i>
					<span className="ms-2">Back home</span>
				</button>
			</Link>

			<div className="row g-3 text-white">
				<div className="col-sm-12 col-md-12 col-lg-6">

					<div className="mb-3 pt-3 d-flex justify-content-center me-5">
						<img src={`https://starwars-visualguide.com/assets/img/${type}/${item.id}.jpg`} className="single-page-img" alt={item.name}/>
					</div>

				</div>

				<div className="col-sm-12 col-md-12 col-lg-6">
					<h1 className="display-2 fw-bold m-0 p-0">{item.name}</h1>
					
					<table className="table table-hover text-white mt-4">
						<tbody>
							{type == "characters" && (
								<>
								<tr>
									<th scope="row">Height :</th>
									<td>{item.height}</td>
								</tr>
								<tr>
									<th scope="row">Mass :</th>
									<td>{item.mass}</td>
								</tr>
								<tr>
									<th scope="row">Hair color :</th>
									<td>{item.hair_color}</td>
								</tr>
								<tr>
									<th scope="row">Skin color :</th>
									<td>{item.skin_color}</td>
								</tr>
								<tr>
									<th scope="row">Eye color :</th>
									<td>{item.eye_color}</td>
								</tr>
								<tr>
									<th scope="row">Birth year :</th>
									<td>{item.birth_year}</td>
								</tr>
								<tr>
									<th scope="row">Gender :</th>
									<td>{item.gender}</td>
								</tr>
								<tr>
									<th scope="row">Home world :</th>
									<td>{item.home_world}</td>
								</tr>
								</>
							)}
							{/* hacer un componente tabla para mostrar los tres tipos de types */}
						</tbody>
					</table>

				</div>
			</div>

		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
