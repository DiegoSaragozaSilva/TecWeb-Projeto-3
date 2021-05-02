import React from "react"
import FavoriteStar from "../FavoriteStar"

import "./index.css"

export default function SearchBox(props) {
    return (
        <div className = "SearchBox">
            <p className = "Title-text"><strong>Title: </strong> {props['title']}</p>
            <p className = "Date-text"><strong>Creation date:</strong> {props['creation_date']}</p>
            <FavoriteStar title = {props.title} date = {props.creation_date} explanation = {props.description} url = {props.href}/>
            <img className = "Media-image" src = {props['href']}></img>
            <p className = "Explanation-text"><strong>Description: </strong> {props['description']}</p>
        </div>
    );
}