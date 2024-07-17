import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

const Infocard = (props) => {
    const {store, actions} = useContext(Context);

    const nav = useNavigate();
    const [like, setLike] = useState(false);

    const handleLikes = () => {
       setLike(!like);
       actions.likes(props.name);
       console.log(store.favorites)
    }
    
    
    return(
        <div className="card mx-3 my-5" style={{ width: "18rem", flex: "0 0 auto" }}>
            <img src={props.img} onError={(e) => { e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                e.target.style.maxHeight = "286px";}} className="card-img-top" alt={props.name}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                {props.gender && <p className="card-text">Gender: {props.gender}</p>}
                {props.hairColor && <p className="card-text">Hair Color: {props.hairColor}</p>}
                {props.eyeColor && <p className="card-text">Eye Color: {props.eyeColor}</p>}
                {props.population && <p className="card-text">Population: {props.population}</p>}
                {props.climate && <p className="card-text">Climate: {props.climate}</p>}
                {props.terrain && <p className="card-text">Terrain: {props.terrain}</p>}

                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-dark mx-2" onClick={()=> nav(`/single/${props.type}/${props.id-1}`)}>+ Info</button>
                    <button type="button" className="btn btn-dark" onClick={handleLikes}><i className="fas fa-heart" style={{color: like ? "#FCA311" : "#FFFFFF"}}></i></button>
                </div>
                
            </div>
        </div>
    );
}

export default Infocard;