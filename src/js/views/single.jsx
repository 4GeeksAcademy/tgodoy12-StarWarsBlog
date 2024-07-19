import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import TableInfo from "../component/tableInfo.jsx";


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
						<TableInfo {...item} />
						{/* <TableInfo height={item.height} mass={item.mass} hairColor={item.hair_color} skinColor={item.skin_color} eyeColor={item.eye_color}
							birthYear={item.birth_year} gender={item.gender} /> */}
						

				</div>
			</div>

		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
