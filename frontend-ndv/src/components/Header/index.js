import React from "react";
import "./index.css";
import SeloAprovacao from "../SeloAprovacao";

export default function DataBox(props) {
  return (
    <div className = "Header">
        <a href=""><img  className = "Logo-img" src="https://fontmeme.com/permalink/210427/1a34af0edc6915b5805603c466e56586.png" alt="nasa-font" border="0"></img></a>
        <p className = "Description-text">Nasa Data Visualizer</p>
        <a className = "Link-text" href = "#APOD">APOD API</a>
        <a className = "Link-text" href = "#NASA">NASA Library API</a>
        <a className = "Link-text" href = "#Favorites">Favorites</a>
        <SeloAprovacao img_src = {props['img_src']}></SeloAprovacao>

    </div>
  );
}