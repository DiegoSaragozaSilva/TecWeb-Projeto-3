import axios from "axios";
import { useState, useEffect } from "react";

import DataBox from "./components/DataBox";
import Header from "./components/Header";

import "./App.css";

function App() {

  const [dataApod, setDataApod] = useState([]);

  useEffect(() => {
      axios.get(`http://localhost:8000/api/ndv/apod`).then((response) => setDataApod(response.data));
  }, []);

  console.log(dataApod);

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
    </div>
  );
}

export default App;