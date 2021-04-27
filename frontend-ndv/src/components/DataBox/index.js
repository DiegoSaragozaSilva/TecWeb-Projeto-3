import React from "react";
import "./index.css";

export default function DataBox(props) {
  if(props.media_type == "video"){
    return (
      <div className = "DataBox">
        <p className = "DivTitle-text">Image/Video of the day provided by APOD (Astronomy Picture of the Day) API.</p>
        <p className = "Title-text"><strong>Title:</strong> {props.title}</p>
        <p className = "Date-text"><strong>Date:</strong> {props.date}</p>
        <iframe className = "Media-iframe" src = {props.url}></iframe>
        <p className = "Explanation-text"><strong>Explanation:</strong> {props.explanation}</p>
      </div>
    );
  }
  else {
    console.log(props.url);
    return (
      <div className = "DataBox">
        <p className = "DivTitle-text">Image/Video of the day provided by APOD (Astronomy Picture of the Day) API.</p>
        <p className = "Title-text"><strong>Title:</strong> {props.title}</p>
        <p className = "Date-text"><strong>Date:</strong> {props.date}</p>
        <img className = "Media-image" src = {props.url}></img>
        <p className = "Explanation-text"><strong>Explanation:</strong> {props.explanation}</p>
      </div>
    );
  }
}