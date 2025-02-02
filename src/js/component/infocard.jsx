import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

const Infocard = (props) => {
    const {store, actions} = useContext(Context);

    const nav = useNavigate();
    const [like, setLike] = useState(store.favorites.includes(props.name));

    //cuando hay un cambio en el props.isFavorite, se setea el like al estado actual,
    //provocando el cambio del color del corazón. Esto es para el caso de borrar un item
    //de la lista a traves del trash icon, y que el corazón pase al color blanco nuevamente
    useEffect(() => {
        setLike(props.isFavorite);
    }, [props.isFavorite]);

    const handleLikes = () => {
       if(store.favorites.includes(props.name)) {
        setLike(false);
       } else {
        setLike(true);
       } 
       actions.likes(props.name);
    }
    
    return(
        <div className="card mx-3 my-5" style={{ width: "18rem", flex: "0 0 auto" }}>
            <img src={props.img} onError={(e) => { e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                e.target.style.maxHeight = "286px";}} className="card-img-top" alt={props.name}/>
            <div className="card-body">
                <h5 className="card-title fw-bold">{props.name}</h5>

                {/* caso characters */}
                {props.gender && <p className="card-text">Gender: {props.gender}</p>}
                {props.hairColor && <p className="card-text">Hair Color: {props.hairColor}</p>}
                {props.eyeColor && <p className="card-text">Eye Color: {props.eyeColor}</p>}

                {/* caso planets */}
                {props.population && <p className="card-text">Population: {props.population}</p>}
                {props.climate && <p className="card-text">Climate: {props.climate}</p>}
                {props.terrain && <p className="card-text">Terrain: {props.terrain}</p>}

                {/* caso vehicles */}
                {props.model && <p className="card-text">Model: {props.model}</p>}
                {props.manufacturer && <p className="card-text">Manufacturer: {props.manufacturer}</p>}
                {props.cost && <p className="card-text">Cost: {props.cost}</p>}

                
                
            </div>
            <div className="d-flex justify-content-end mb-3 me-3">
                    <button type="button" className="btn btn-dark mx-2" onClick={() => nav(`/single/${props.type}/${props.id}`)}>+ Info</button>
                    <button type="button" className="btn btn-dark" onClick={handleLikes}><i className="fas fa-heart" style={{color: like ? "#FCA311" : "#FFFFFF"}}></i></button>
            </div>
        </div>
    );
}

export default Infocard;