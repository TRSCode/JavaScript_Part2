import React, {useState, useEffect} from 'react'

const PokemonApi = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    // adding ?limit=807 gets all pokemon's... shown in documentation "Resource Lists"
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(response => setPokemon(response.results))
  }, []);
  
  return (
    <div>
      {pokemon.length > 0 && pokemon.map((poke, index) =>{
        return (<div key={index}>{poke.name}</div>)
      }
      )}
    </div>
  );
}

export default PokemonApi