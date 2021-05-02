import axios from "axios";
import { useState, useEffect } from "react";

import DataBox from "./components/DataBox";
import Header from "./components/Header";

import "./App.css";
import SearchBox from "./components/SearchBox";

function App() {

  const [dataApod, setDataApod] = useState([]);
  const [dataNASA, setDataNASA] = useState([]);

  useEffect(() => {
      axios.get(`http://localhost:8000/api/ndv/apod`).then((response) => setDataApod(response.data));
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/ndv/NASA/moon`).then((response) => setDataNASA(response.data.data));
  }, []);

  console.log(dataNASA)

  return (
    <div className="App">
      <Header />
      <DataBox title = {dataApod.title} date = {dataApod.date} explanation = {dataApod.explanation} url = {dataApod.url} media_type = {dataApod.media_type}/>
      <p className = "DateSelector-text">If you want to choose a date to view the image/video linked to it, you can use the picker below.</p>
      <input className = "DateSelector-input" type = "date" onChange = {(e) => {
        axios.get(`http://localhost:8000/api/ndv/apod/${e.target.value}`).then((response) => {
          setDataApod(response.data);
        });
      }}></input>

      <div className = "SearchArea" id = "NASA">
        <p className = "DivTitle-text">Image and video search provided by NASA Image and Video Library API.</p>
        <input type = "text" placeholder = "Type here to search..." onChange = {(e) => {
          axios.get(`http://localhost:8000/api/ndv/NASA/${e.target.value}`).then((response) => {
            setDataNASA(response.data.data);
          });
        }}></input>
        {
          dataNASA.map((image) => (
            <SearchBox title = {image['title']} creation_date = {image['creation_date']} href = {image['href']} description = {image['description']} />
        ))}
      </div>
    </div>
  );
}

export default App;