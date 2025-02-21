import React from 'react'

const PokemonCard = ({pokemonData}) => {
  return (
    <li className='pokemon-card'>
        <figure>
            <img className='pokemon-image' src={pokemonData.sprites.other.dream_world.front_default} 
            alt={pokemonData.name} />
        </figure>
        <h1 className='pokemon-name'>{pokemonData.name}</h1>
        <div className='pokemon-info pokemon-highlight'>
            <p>
                {pokemonData.types.map((item) => item.type.name).join(", ") }
            </p>
        </div>
        <div className='grid-three-cols'>
            <div className='pokemon-info'>
               <p>{pokemonData.height}</p> 
                <span>Height</span>
            </div>
            <div className='pokemon-info'>
                <p>{pokemonData.weight}</p>
                <span>Weight</span>
            </div>
            <div className='pokemon-info'>
                <p>{pokemonData.stats[5].base_stat}</p>
                <span>Speed</span>
            </div>
        </div>
        <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{pokemonData.base_experience}</p>
          <span> Experience </span>
        </div>
        <div className="pokemon-info">
          <p>{pokemonData.stats[1].base_stat}</p>
          <span>Attack</span>
        </div>
        <div className="pokemon-info">
          <p>
            {pokemonData.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span> Abilities </span>
        </div>
      </div>
    </li>
  )
}

export default PokemonCard