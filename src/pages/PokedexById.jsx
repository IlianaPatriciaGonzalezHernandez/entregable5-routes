import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Error404 from './Error404'
import './styles/pokedexbyid.css'

const PokedexById = () => {

  const { id } = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
  }, [])

  if(hasError){
    return <Error404 />
  }

  return (

    <div>

    <div>
     <header className='header_pokedex'>
         <div className='pokedex-border-red'></div>
         <img className='pokedex__img-id' src="/src/pages/images/home/pokedex.png" alt="" />
         <div className='pokedex-border-black'></div>
         <div className='podex-eclipce1'></div>
         <div className='podex-eclipce2'></div>
       </header> 

    </div>

     <div className={`card-pokemon2 border-${pokemon?.types[0].type.name}`}>
     <header className={`card-poke__header2 bg-${pokemon?.types[0].type.name}`}>
         <img className='card-poke__sprite2' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" /> 
     </header>
     <section className='card-poke__body2'>
     <h3 className={`card-poke__name2 letter-${pokemon?.types[0].type.name}`}>{pokemon?.id}</h3>
         <h3 className={`card-poke__name2 letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>

         <ul>
             <li className={`card-poke__types-container2 letter-${pokemon?.types[0].type.name}`}>{pokemon?.weight}</li>
             <li className='card-poke__type-label2'>Weight</li>
             <li className={`card-poke__types-container2 letter-${pokemon?.types[0].type.name}`}>{pokemon?.height}</li>
             <li className='card-poke__type-label2'>Height</li>
         </ul>

         <ul className='card-poke__types-container2'>
             {
                 pokemon?.types.map(type => (
                     <li key={type.slot} className={`card-poke__type2 bg-${pokemon?.types[0].type.name}`}>{type.type.name}</li>
                 ))
             }
         </ul>
         <p className='card-poke__type-label2'>Type</p>
         <ul className='card-poke__types-container2'>
             {
                 pokemon?.abilities.map(ability => (
                     <li key={ability.slot} className={`card-poke__abilities2 letter-${pokemon?.types[0].type.name}`}>{ability.ability.name}</li>
                 ))
             }
         </ul>
         <p className='card-poke__type-label2'>Abilities</p>


         <p className='card-poke__Stats2'>Stats</p>

         <ul className='card-poke__stats-container2'>
             {
                 pokemon?.stats.map(stat => (
                     <li key={stat.stat.name} className='card-poke__stat2'>
                         <span className='card-poke__stat-label2'>{stat.stat.name}</span>
                         <span className={`card-poke__stat-number letter-${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
                     </li>
                 ))
             }
         </ul>

         <p className='card-poke__moves'>Moves</p>
        <div className='moves__container'>
          {
                       pokemon?.moves.map(move => (
               <p key={move.move.name} className={`card-poke__stat-number bg-${pokemon?.types[0].type.name}`}>
                 <span>{move.move.name}</span>
              </p>
           ))
          }

        </div>
     </section>
   

     </div>
     <button className='link-poke__bnt'>
    <Link to='/pokedex' className='link-poke'>Return to Pokedex</Link>
    </button>
     <footer className='footer_pokedex1'>
      <div className='pokedex-border-red1'></div>
       <div className='pokedex-border-black1'></div>
       <div className='podex-eclipce11'></div>
       <div className='podex-eclipce21'></div>
      </footer>
 </div>
  )
}

export default PokedexById
