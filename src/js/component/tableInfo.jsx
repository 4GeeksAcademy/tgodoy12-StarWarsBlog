import React, {useContext} from "react";
import { Context } from "../store/appContext";

const TableInfo = (props) => {
    //hacer un tableInfo generico para todos los types

	const mapPropertys = () => {
		const entries = Object.entries(props).slice(0, 7);
		return entries.map(([key,value], index) => (
			<tr key={index}>
				<th scope="row">{key}</th>
				<td>{value}</td>
			</tr>
		))
	}


    return (
        <table className="table table-hover text-white mt-4">
			<tbody>
				{mapPropertys()}
			</tbody>
			
						{/* <tbody>
								<tr>
									<th scope="row">Height :</th>
									<td>{props.height}</td>
								</tr>
								<tr>
									<th scope="row">Mass :</th>
									<td>{props.mass}</td>
								</tr>
								<tr>
									<th scope="row">Hair color :</th>
									<td>{props.hairColor}</td>
								</tr>
								<tr>
									<th scope="row">Skin color :</th>
									<td>{props.skinColor}</td>
								</tr>
								<tr>
									<th scope="row">Eye color :</th>
									<td>{props.eyeColor}</td>
								</tr>
								<tr>
									<th scope="row">Birth year :</th>
									<td>{props.birthYear}</td>
								</tr>
								<tr>
									<th scope="row">Gender :</th>
									<td>{props.gender}</td>
								</tr>
			
						</tbody> */}
					</table>
    );
}

export default TableInfo