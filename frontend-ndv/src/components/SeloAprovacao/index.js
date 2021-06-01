import React from "react";
import "./index.css";

export default function SeloAprovacao(props) {
  return (
    <img className = "Selo-Aprovacao-Imagem" src = {props["img_src"]}></img>
  );
}