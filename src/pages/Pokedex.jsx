import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPokemon from '../components/pokedex/CardPokemon'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import './styles/pokedex.css'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')

  useEffect(() => {

    if(typeSelected !== 'All Pokemons'){
      axios.get(typeSelected)
      .then(res => {
        const result = res.data.pokemon.map(e => e.pokemon)
        setPokemons(result)
      })
      .catch(err => console.log(err))

    } else {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    axios.get(URL)
    .then(res => setPokemons(res.data.results))
    .catch(err => console.log(err))
    }
  }, [typeSelected])

const userName = useSelector(state => state.userName)

//logica de paginacion

const [page, setPage] = useState(1)
const [pokePerPage, setPokePerPage] = useState(8)
const initialPage = (page - 1) * pokePerPage
const finalPage = page * pokePerPage

  return (
    <div>
      <header className='header_pokedex'>
      <div className='pokedex-border-red'></div>
       <img className='pokedex__img-id' src="/src/pages/images/home/pokedex.png" alt="" />
       <div className='pokedex-border-black'></div>
       <div className='podex-eclipce1'></div>
       <div className='podex-eclipce2'></div>
      </header>
        
      <div>
       <p className='pokedex__wellcome'>Welcome <span className='card__username-trainor'>{userName}</span>, here you can find your favorite pokemon. </p>
      </div>

      <div>
        <InputSearch />
        <SelectByType setTypeSelected={setTypeSelected}
        setPage={setPage}
        />
      </div>

      <div>
        <Pagination
        page={page}
        pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
        setPage={setPage}
         />
      </div>

      <main>
        <div className='card-container'>
          {
            pokemons?.slice(initialPage, finalPage).map(pokemon => (
              <CardPokemon
              key={pokemon.url}
              url={pokemon.url}
              />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default Pokedex