import React from "react"
import "./index.css"

import favorite_img from "./favorite.png"
import axios from "axios";

export default function FavoriteStar(props) {
    return (
        <div className = "FavoriteStar">
            <img className = "Favorite-image" src = {favorite_img} onClick = {(e) => {
                axios.post("http://localhost:8000/favorite/", props);
                console.log("AJIFJAWFIAW");
            }}></img>
        </div>
    );
}