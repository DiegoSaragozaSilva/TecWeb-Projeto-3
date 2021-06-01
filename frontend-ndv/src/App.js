import axios from "axios";
import { useState, useEffect } from "react";

import DataBox from "./components/DataBox";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import FavoriteBox from "./components/FavoriteBox";

import "./App.css";

function App() {

  const [dataApod, setDataApod] = useState([]);
  const [dataNASA, setDataNASA] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [token, setToken] = useState([]);
  const [img_src, setSrc] = useState([]);

  useEffect(() => {
      axios.get(`http://localhost:8000/api/ndv/apod`).then((response) => setDataApod(response.data));
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/ndv/NASA/moon`).then((response) => setDataNASA(response.data.data));
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8000/favorite/`).then((response) => setFavorites(response.data));
  }, []);

  useEffect(() => {
    axios.get(`http://54.88.109.168/diegoss3/token`).then((response) => {
      let body = {"token": response.data.token};
      axios({method: "post", url: "http://54.88.109.168/diegoss3/image", data: body}).then((response) => {
        let hostname = "http://54.88.109.168";
        setSrc(hostname + response.data.image_uri);
      })
    })
  }, []);

  return (
    <div className="App">
      <Header img_src = {img_src}/>

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

      <div className = "FavoriteArea" id = "Favorites">
            <p className = "DivTitle-Text"><strong>Favorites</strong></p>
            {
              favorites.map((fav) => (
                <FavoriteBox title = {fav['title']} date = {fav['date']} url = {fav['url']} explanation = {fav['explanation']} />
            ))}
      </div>
      
    </div>
  );
}

export default App;