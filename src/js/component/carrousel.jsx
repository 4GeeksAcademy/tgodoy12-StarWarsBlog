import React, { useContext } from "react";
import Infocard from "./infocard.jsx";
import { Context } from "../store/appContext.js";

const Carrousel = ({ type }) => {
    const { store } = useContext(Context);

    //obtencion de los arrays de cada type desde el store
    const getData = {
        characters: store.characters,
        planets: store.planets,
        vehicles: store.vehicles
    }[type]
    
    //obtencion de las rutas de las imágenes por cada type
    const imgUrl = {
        characters: "https://starwars-visualguide.com/assets/img/characters/",
        planets: "https://starwars-visualguide.com/assets/img/planets/",
        vehicles: "https://starwars-visualguide.com/assets/img/vehicles/"
    }[type]

    //switch para mostrar los props en la InfoCard segun el type
    const displayedProps = (item) => {
        switch (type) {
            case "characters":
                return {
                    type: type,
                    id: item.id,
                    name: item.name,
                    gender: item.gender,
                    hairColor: item.hair_color,
                    eyeColor: item.eye_color
                };
            case "planets":
                return {
                    type: type,
                    id: item.id,
                    name: item.name,
                    population: item.population,
                    climate: item.climate,
                    terrain: item.terrain
                };
            case "vehicles":
                return {
                    type: type,
                    id: item.id,
                    name: item.name,
                    model: item.model,
                    manufacturer: item.manufacturer,
                    cost: item.cost_in_credits
                };
            default:
                return {};
        }
    }
    
    return (
        <div className="container my-5 pb-5">

            {/* Characters */}
            <div className="mb-5">
                <h2 className="text-center display-4 mb-3 text-white">{type}</h2>
                <div className="d-flex overflow-x-auto" style={{ overflowX: "scroll", background: "black", borderRadius: "10px",
                    border: "3px solid #212529"}}>

                {getData.map((item, index) => (
                        <Infocard
                            type={item.type} 
                            key={index}
                            id={item.id}
                            // el prop isFavorite es para la funcion del heart button de la card
                            isFavorite={store.favorites.includes(item.name)} 
                            img={`${imgUrl}${item.id}.jpg`} 
                            {...displayedProps(item)} 
                        />
                    ))}
                    
                </div>
            </div>
        
        </div>
    );
}

export default Carrousel;