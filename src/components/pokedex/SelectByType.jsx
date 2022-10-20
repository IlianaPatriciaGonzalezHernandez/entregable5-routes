import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/selectbytype.css'

const SelectByType = ({setTypeSelected, setPages}) => {

    const [types, setTypes] = useState()

    useEffect(() => {
        const URL = 'https://pokeapi.co/api/v2/type'
        axios.get(URL)
        .then(res => setTypes(res.data.results))
        .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        setTypeSelected(e.target.value)
        setPages(1)
    }

  return (
    <select className='pokedex__container' onChange={handleChange}>
    <option className='all-pokemons' value="All Pokemons">All Pokemons</option>
    {
        types?.map(type => (
            <option key={type.url} value={type.url}>{type.name}</option>
        ))
    }
   
</select>
  )
}

export default SelectByType