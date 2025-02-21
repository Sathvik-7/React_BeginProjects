import React, { useEffect, useState } from 'react'
import "./index.css"
import PokemonCard from './PokemonCard';

const Pokemon = () => {

    const api = "https://pokeapi.co/api/v2/pokemon?limit=124";

    const [pokemon, setPokemon] = useState([])

    const [loading, setLoading] = useState(true)

    const [search,setSearch] = useState("")

    const fetchPokemon = async () =>
        {
            try {
                const data = await fetch(api).then(res => res.json())

                const detailedData = data.results.map(async (elements) => 
                    {
                        return await fetch(elements.url).then(res => res.json())
                    })

                const detailedResponse = await Promise.all(detailedData)
                setPokemon(detailedResponse)
                setLoading(false)

            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }

    useEffect(()=>
        {
            fetchPokemon();
        },[])

    if(loading)
    {
        return(<div><h1>Loading....</h1></div>)
    }

    const filteredData = pokemon.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
        <section className='container'>
            <header>
                <h1>Lets catch Pokemon</h1>
            </header>
            <div className='pokemon-search'>
                <input type="text" placeholder='Enter pokemon name' value={search} 
                        onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div>
                <ul className='cards'>
                    {filteredData.map((currPokemon) => 
                        {
                            return (<PokemonCard key={currPokemon.id} pokemonData={currPokemon}/>) 
                        })}
                </ul>
            </div>
        </section>
    </>
  )
}

export default Pokemon