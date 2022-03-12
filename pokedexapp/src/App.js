import './App.css';
import React from 'react';
import Data from "./data.json";
import { useState } from 'react';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='title'>
      <h3>Pokedex </h3>
      <div className="container">
        <input type="text" placeholder="seach..." onChange={e => setSearchTerm(e.target.value)} className="search" />
        {Data.filter((id) => {
          if (searchTerm === "") {
            return id
          }
          else  if (
              id.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return id;
            }
        }).map((id, key) => {
          return <div key={id.id} className="container-card">
            <h3> {id.id} </h3>
            <h4> {id.name}</h4>
            <div className="pokemonPhoto">
              <img src={id.sprites.other.official_artwork.front_default} />
            </div>
          </div>
        })}
      </div>
    </div>);
} export default App;