import React, { useContext } from "react";
import Infocard from "./infocard.jsx";
import { Context } from "../store/appContext.js";

const Carrousel = ({ type }) => {
    const { store } = useContext(Context);
    


    //obtencion de los arrays de cada type desde el store
    const getData = {
        characters: store.characters,
        planets: store.planets
        // vehicles: store.vehicles
    }[type]
    
    //obtencion de las rutas de las imágenes por cada type
    const imgUrl = {
        characters: "https://starwars-visualguide.com/assets/img/characters/",
        planets: "https://starwars-visualguide.com/assets/img/planets/"
        // vehicles: "https://starwars-visualguide.com/assets/img/vehicles/"
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
            default:
                return {};
        }
    }

    
    return (
        <div className="container my-5 pb-5">

            {/* Characters */}
            <div className="mb-5">
                <h2 className="text-start mb-3">{type}</h2>
                <div className="d-flex overflow-x-auto" style={{ overflowX: "scroll" }}>

                {getData.map((item, index) => (
                        <Infocard
                            type={item.type} 
                            key={index}
                            id={item.id} 
                            img={`${imgUrl}${item.id}.jpg`} 
                            {...displayedProps(item)} 
                        />
                    ))}
                    
                </div>
            </div>
            

            {/* Planets

            <div className="mb-5">
                <h2 className="text-start mb-3">Planets</h2>
                <div className="d-flex overflow-x-auto" style={{ overflowX: "scroll" }}>

                    {store.planets.map((planet, index) => (
                        <Infocard id={planet.id} key={index} name={planet.name} gender={planet.gender} hairColor={planet.hair_color} 
                        eyeColor={planet.eye_color} img={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`} />
                    ))
                    }
                    
                </div>
            </div> */}
        
        </div>
    );
}

export default Carrousel;