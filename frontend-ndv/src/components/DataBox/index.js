import React from "react";
import FavoriteStar from "../FavoriteStar"

import "./index.css";

export default function DataBox(props) {
  if(props.media_type == "video"){
    return (
      <div className = "DataBox" id = "APOD">
        <p className = "DivTitle-text">Image/Video of the day provided by APOD (Astronomy Picture of the Day) API.</p>
        <p className = "Title-text"><strong>Title:</strong> {props.title}</p>
        <p className = "Date-text"><strong>Date:</strong> {props.date}</p>
        <FavoriteStar title = {props.title} date = {props.date} explanation = {props.explanation} url = {props.url}/>
        <iframe className = "Media-iframe" src = {props.url}></iframe>
        <p className = "Explanation-text"><strong>Explanation:</strong> {props.explanation}</p>
      </div>
    );
  }
  else {
    return (
      <div className = "DataBox" id = "APOD">
        <p className = "DivTitle-text">Image/Video of the day provided by APOD (Astronomy Picture of the Day) API.</p>
        <p className = "Title-text"><strong>Title:</strong> {props.title}</p>
        <p className = "Date-text"><strong>Date:</strong> {props.date}</p>
        <FavoriteStar title = {props.title} date = {props.date} explanation = {props.explanation} url = {props.url}/>
        <img className = "Media-image" src = {props.url}></img>
        <p className = "Explanation-text"><strong>Explanation:</strong> {props.explanation}</p>
      </div>
    );
  }
}