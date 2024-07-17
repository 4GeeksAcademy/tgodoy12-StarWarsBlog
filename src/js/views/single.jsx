import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const param = useParams();
	const params = useParams();
	return (
		
		<div className="container my-5">
			<h1 className="display-4">This will show the demo element: {store[param.type][params.theid].name}</h1>

			<div class="row">
				<div class="col-sm-5 col-md-6">

				<div class="card mb-3">
					<img src="..." class="card-img-top" alt="..."/>
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
					</div>
				</div>

				</div>
				<div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, atque quasi quidem ducimus tempore, cum iusto repudiandae quae odit nobis dignissimos laborum tenetur suscipit reprehenderit numquam laudantium beatae cumque vel.
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
