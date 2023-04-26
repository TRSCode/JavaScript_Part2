import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PokemonApi = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    // adding ?limit=807 gets all pokemon's... shown in documentation "Resource Lists"
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(res => {
        console.log(res.data.results);
        setPokemon(res.data.results)
      })
      .catch(err => console.log(err))
  }, []);
  
  return (
    <div>
      <h1>Pokemon List</h1>
      {pokemon.map((poke, index) =>{
        return (
        <div key={index}>
          <p>{poke.name}</p>
        </div>)
      }
      )}
    </div>
  );
}

export default PokemonApi