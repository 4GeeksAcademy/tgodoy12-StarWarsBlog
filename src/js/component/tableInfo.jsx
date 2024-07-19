import React, {useContext} from "react";
import { Context } from "../store/appContext";

const TableInfo = (props) => {
    //hacer un tableInfo generico para todos los types

	const mapPropertys = () => {
		//segun el type, corto la cantidad de propiedades que quiero ver en pantalla
		let entries = [];
		if (props.type == "characters") {
			entries = Object.entries(props).slice(0, 9);
		} else if (props.type == "planets") {
			entries = Object.entries(props).slice(0, 10);
		} else if (props.type == "vehicles") {
			entries = Object.entries(props).slice(0, 12);
		}
		
		//mapeo el nombre de las propertys(keys) para que se muestren en la tabla
		//y en td imprimo el valor
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
		</table>
    );
}

export default TableInfo