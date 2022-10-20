import React from 'react'
import { Link } from 'react-router-dom'
import './styles/error404.css'

const Error404 = () => {
  return (
    <div className='card__error'>
        <h1 className='error__title'>Pokemon not found</h1>
        <button className='link__bnt'>
    
    <Link to='/pokedex' className='link'>Return to Pokedex</Link>
    </button>
    </div>
  )
}

export default Error404